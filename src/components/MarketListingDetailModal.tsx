'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Mail, Search, X } from 'lucide-react';
import {
    formatAskDisplay,
    formatInspectionDate,
    getListingById,
} from '@/lib/marketListings';
import { formatUsdDeltaShort, resolveAskPriceHistory } from '@/lib/askPriceHistory';
import { MOCK_AIRCRAFT } from '@/lib/mockData';
import { rngInt, rngPick } from '@/lib/fullCompareSnapshot';
import type { MarketListing } from '@/types/marketListing';
import type { Aircraft } from '@/types';
import styles from '@/components/MarketListingDetailModal.module.css';

const IMG_FALLBACK_POOL = [
    'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1583068739943-73934f0d3b6f?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1559087867-ce4c91325525?auto=format&fit=crop&q=80&w=1200',
];

const STATUS_OPTS = ['Available', 'Available — broker direct', 'Under contract', 'Sale pending'] as const;
const SELLER_OPTS = [
    'Jet Transactions LLC',
    'Aircraft Brokerage Partners',
    'Executive Aviation Sales',
    'Hangar Nine Aviation',
    'Premium Jet Group',
] as const;

type SpecSection = { key: string; title: string; paragraphs: string[] };

function buildPhotos(ac: Aircraft | undefined): string[] {
    const base =
        ac?.galleryImages?.filter(Boolean).length ?
            [...new Set([ac.mainImageUrl, ac.thumbnailUrl, ...(ac.galleryImages ?? [])].filter(Boolean))]
        :   [ac?.mainImageUrl ?? ac?.thumbnailUrl ?? IMG_FALLBACK_POOL[0]];
    const out: string[] = [];
    for (let i = 0; i < 10; i++) out.push(base[i % base.length]!);
    return out;
}

function mockListingMeta(row: MarketListing) {
    const id = row.id;
    const status = rngPick(id, 7, [...STATUS_OPTS]);
    const seller = rngPick(id, 13, [...SELLER_OPTS]);
    const phone = `+1 (${rngInt(id, 17, 214, 986)}) ${rngInt(id, 19, 200, 899)}-${rngInt(id, 21, 1000, 9999)}`;
    const contactFirst = rngPick(id, 23, ['James', 'Sarah', 'Michael', 'Emily', 'David', 'Rachel']);
    const contactLast = rngPick(id, 29, ['Hall', 'Nguyen', 'Brooks', 'Patel', 'Stone', 'Reed']);
    const emailLocal = `${contactFirst.toLowerCase()}.${contactLast.toLowerCase()}`;
    const emailDomain = rngPick(id, 31, ['bizav.com', 'jetsales.net', 'winggroup.aero']);
    return {
        status,
        seller,
        phone,
        contactName: `${contactFirst} ${contactLast}`,
        email: `${emailLocal}@${emailDomain}`,
    };
}

function buildSpecSections(row: MarketListing, ac: Aircraft | undefined): SpecSection[] {
    const askHist = resolveAskPriceHistory(row);
    const lastPrice =
        askHist.length ? askHist[askHist.length - 1]?.priceDisplay ?? formatAskDisplay(row) : formatAskDisplay(row);

    const highlights: string[] = [];
    if (ac?.highlights?.length) highlights.push(...ac.highlights);
    highlights.push(
        `${row.programModel} presented as a ${row.variant} configuration.`,
        row.yod ? `Year of manufacture ${row.yod}.` : 'Year of manufacture on file with broker.',
        row.location && row.location !== '-' ? `Currently located ${row.location}.` : 'Location per internal market feed.',
    );

    const airframe: string[] = [
        `Serial number ${row.sn}. Registration ${row.reg && row.reg !== '-' ? row.reg : 'on request'}.`,
        `Airframe times: ${row.tsn ?? '—'} hours TSN, ${row.csn ?? '—'} cycles CSN.`,
        `Interior configured for up to ${row.pax ?? ac?.maxPax ?? '—'} passengers.`,
    ];
    if (row.paintYear != null) airframe.push(`Exterior paint dated ${row.paintYear}.`);
    if (row.interiorYear != null) airframe.push(`Interior refreshed ${row.interiorYear}.`);

    const mx: string[] = [
        `Engine program: ${row.engineProg && row.engineProg !== '-' ? row.engineProg : 'See broker confirmation.'}`,
        `Parts / airframe program: ${row.partsProg && row.partsProg !== '-' ? row.partsProg : 'Per listing.'}`,
        `48-month inspection due: ${formatInspectionDate(row.inspection48mo)}.`,
    ];

    const engines: string[] = [
        `Program status and enrollment details should be verified with the seller prior to offer.`,
        row.tsn != null ? `Times stated at ${row.tsn} airframe hours; engine cycles per logbooks.` : 'Engine times per logbooks at inspection.',
    ];

    const apu: string[] = [
        `APU time: ${row.apuTsn ?? '—'}.`,
        `APU program: ${row.apuProg && row.apuProg !== '-' ? row.apuProg : 'Confirm with seller.'}`,
    ];

    const optional: string[] = [
        ac?.avionics ? `Avionics / equipment notes: ${ac.avionics}` : 'Equipment list per broker spec sheet.',
        `Range and performance figures are representative for the ${row.variant} variant; confirm against AFM.`,
    ];

    const pricing: string[] = [
        `Ask / take: ${formatAskDisplay(row)}.`,
        `Days on market: ${row.dom ?? '—'}.`,
        `Latest advertised ask from history: ${lastPrice}.`,
    ];
    if (askHist.length > 1) {
        pricing.push(
            ...askHist.slice(-3).map(
                (seg) =>
                    `${seg.rangeLabel}: ${seg.priceDisplay}` +
                    (seg.reductionFromPriorUsd != null && seg.reductionFromPriorUsd !== 0 ?
                        ` (${formatUsdDeltaShort(seg.reductionFromPriorUsd)})`
                    :   ''),
            ),
        );
    }
    if (row.askPriceHistoryFooter) pricing.push(row.askPriceHistoryFooter);

    return [
        { key: 'highlights', title: 'HIGHLIGHTS', paragraphs: highlights },
        { key: 'airframe', title: 'AIRFRAME', paragraphs: airframe },
        { key: 'mx', title: 'MAINTENANCE / PEDIGREE', paragraphs: mx },
        { key: 'engines', title: 'ENGINES', paragraphs: engines },
        { key: 'apu', title: 'APU', paragraphs: apu },
        { key: 'optional', title: 'OPTIONAL EQUIPMENT', paragraphs: optional },
        { key: 'pricing', title: 'PRICING & HISTORY', paragraphs: pricing },
    ];
}

function sectionMatches(q: string, s: SpecSection): boolean {
    if (!q.trim()) return true;
    const needle = q.trim().toLowerCase();
    if (s.title.toLowerCase().includes(needle)) return true;
    return s.paragraphs.some((p) => p.toLowerCase().includes(needle));
}

function buildSpecsDownloadText(row: MarketListing, ac: Aircraft | undefined, meta: ReturnType<typeof mockListingMeta>) {
    const sections = buildSpecSections(row, ac);
    const lines: string[] = [
        `${row.yod ?? ''} ${row.programModel}`.trim(),
        `S/N ${row.sn} · ${row.reg ?? 'Reg TBD'}`,
        `Location: ${row.location ?? '—'}`,
        `Status: ${meta.status}`,
        `Seller: ${meta.seller}`,
        `Contact: ${meta.contactName} · ${meta.phone} · ${meta.email}`,
        '',
        '---',
        '',
    ];
    for (const s of sections) {
        lines.push(s.title, '');
        for (const p of s.paragraphs) lines.push(p, '');
        lines.push('---', '');
    }
    lines.push('Disclaimer: Specifications are compiled from the internal market database and broker materials.');
    return lines.join('\n');
}

type Props = {
    listingId: string | null;
    onClose: () => void;
};

export default function MarketListingDetailModal({ listingId, onClose }: Props) {
    const row = listingId ? getListingById(listingId) : undefined;
    const ac = useMemo(
        () => (listingId ? MOCK_AIRCRAFT.find((a) => a.id === listingId) : undefined),
        [listingId],
    );
    const photos = useMemo(() => buildPhotos(ac), [ac]);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [searchQ, setSearchQ] = useState('');
    const [emailOpen, setEmailOpen] = useState(false);
    const [emailForm, setEmailForm] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        agree: false,
    });

    useEffect(() => {
        setPhotoIndex(0);
        setSearchQ('');
        setEmailOpen(false);
        setEmailForm({
            name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
            agree: false,
        });
    }, [listingId]);

    useEffect(() => {
        if (!listingId) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== 'Escape') return;
            if (emailOpen) {
                setEmailOpen(false);
                return;
            }
            onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener('keydown', onKey);
        };
    }, [listingId, onClose, emailOpen]);

    const meta = row ? mockListingMeta(row) : null;
    const sections = row ? buildSpecSections(row, ac) : [];
    const filtered = sections.filter((s) => sectionMatches(searchQ, s));

    const downloadSpecs = () => {
        if (!row || !meta) return;
        const text = buildSpecsDownloadText(row, ac, meta);
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `specsheet-sn-${row.sn}.txt`;
        a.rel = 'noopener';
        a.click();
        URL.revokeObjectURL(url);
    };

    const goPhoto = (delta: number) => {
        setPhotoIndex((i) => (i + delta + photos.length) % photos.length);
    };

    if (!listingId || !row || !meta) return null;
    if (typeof document === 'undefined') return null;

    const headline = `${row.yod ?? '—'} ${row.programModel}`.replace(/\s+/g, ' ').trim();

    return createPortal(
        <div className={styles.backdrop} role="presentation" onClick={onClose}>
            <div
                className={styles.shell}
                role="dialog"
                aria-modal="true"
                aria-labelledby="listing-modal-headline"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.resizeHint} aria-hidden />

                <aside className={styles.leftRail}>
                    <h2 id="listing-modal-headline" className={styles.headline}>
                        {headline}
                    </h2>

                    <div className={styles.summaryList}>
                        <div className={styles.summaryRow}>
                            <span className={styles.summaryLabel}>Serial #</span>
                            <span className={styles.summaryVal}>{row.sn}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span className={styles.summaryLabel}>Registration</span>
                            <span className={styles.summaryVal}>{row.reg && row.reg !== '-' ? row.reg : '—'}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span className={styles.summaryLabel}>Location</span>
                            <span className={styles.summaryVal}>
                                {row.location && row.location !== '-' ? row.location : '—'}
                            </span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span className={styles.summaryLabel}>Status</span>
                            <span className={styles.summaryVal}>{meta.status}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span className={styles.summaryLabel}>Seller</span>
                            <span className={styles.summaryVal}>{meta.seller}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span className={styles.summaryLabel}>Phone</span>
                            <span className={styles.summaryVal}>{meta.phone}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span className={styles.summaryLabel}>Contact</span>
                            <span className={styles.summaryVal}>
                                <span className={styles.contactWrap}>
                                    <span className={styles.contactRow}>
                                        {meta.contactName}
                                        <button
                                            type="button"
                                            className={styles.mailIconBtn}
                                            title={meta.email}
                                            aria-expanded={emailOpen}
                                            aria-label={`Email ${meta.contactName}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setEmailOpen((o) => !o);
                                            }}
                                        >
                                            <Mail size={18} aria-hidden />
                                        </button>
                                    </span>
                                    {emailOpen ? (
                                        <div
                                            className={styles.emailPopover}
                                            role="dialog"
                                            aria-label="Contact broker"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className={styles.emailPopoverHeader}>
                                                <span>Message {meta.contactName}</span>
                                                <button
                                                    type="button"
                                                    className={styles.emailPopoverClose}
                                                    aria-label="Close"
                                                    onClick={() => setEmailOpen(false)}
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                            <form
                                                className={styles.emailForm}
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    setEmailOpen(false);
                                                    setEmailForm({
                                                        name: '',
                                                        company: '',
                                                        email: '',
                                                        phone: '',
                                                        message: '',
                                                        agree: false,
                                                    });
                                                }}
                                            >
                                                <label className={styles.emailField}>
                                                    Name
                                                    <input
                                                        value={emailForm.name}
                                                        onChange={(ev) =>
                                                            setEmailForm((f) => ({ ...f, name: ev.target.value }))
                                                        }
                                                        autoComplete="name"
                                                    />
                                                </label>
                                                <label className={styles.emailField}>
                                                    Company
                                                    <input
                                                        value={emailForm.company}
                                                        onChange={(ev) =>
                                                            setEmailForm((f) => ({ ...f, company: ev.target.value }))
                                                        }
                                                        autoComplete="organization"
                                                    />
                                                </label>
                                                <label className={styles.emailField}>
                                                    Email
                                                    <input
                                                        type="email"
                                                        value={emailForm.email}
                                                        onChange={(ev) =>
                                                            setEmailForm((f) => ({ ...f, email: ev.target.value }))
                                                        }
                                                        autoComplete="email"
                                                        required
                                                    />
                                                </label>
                                                <label className={styles.emailField}>
                                                    Phone
                                                    <input
                                                        type="tel"
                                                        value={emailForm.phone}
                                                        onChange={(ev) =>
                                                            setEmailForm((f) => ({ ...f, phone: ev.target.value }))
                                                        }
                                                        autoComplete="tel"
                                                    />
                                                </label>
                                                <label className={styles.emailField}>
                                                    Message
                                                    <textarea
                                                        rows={4}
                                                        value={emailForm.message}
                                                        onChange={(ev) =>
                                                            setEmailForm((f) => ({ ...f, message: ev.target.value }))
                                                        }
                                                        required
                                                    />
                                                </label>
                                                <label className={styles.emailCheck}>
                                                    <input
                                                        type="checkbox"
                                                        checked={emailForm.agree}
                                                        onChange={(ev) =>
                                                            setEmailForm((f) => ({ ...f, agree: ev.target.checked }))
                                                        }
                                                        required
                                                    />
                                                    <span>
                                                        I agree my details may be shared with the listing broker for this
                                                        inquiry.
                                                    </span>
                                                </label>
                                                <button type="submit" className={styles.emailSubmit}>
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    ) : null}
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className={styles.gallery}>
                        <div className={styles.heroWrap}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className={styles.heroImg} src={photos[photoIndex]} alt="" />
                            <div className={styles.heroNav}>
                                <button type="button" className={styles.heroBtn} aria-label="Previous photo" onClick={() => goPhoto(-1)}>
                                    <ChevronLeft size={20} />
                                </button>
                                <button type="button" className={styles.heroBtn} aria-label="Next photo" onClick={() => goPhoto(1)}>
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                        <div className={styles.thumbs}>
                            {photos.slice(0, 10).map((src, i) => (
                                <button
                                    key={`${src}-${i}`}
                                    type="button"
                                    className={`${styles.thumb} ${i === photoIndex ? styles.thumbActive : ''}`}
                                    aria-label={`Photo ${i + 1}`}
                                    aria-current={i === photoIndex ? 'true' : undefined}
                                    onClick={() => setPhotoIndex(i)}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={src} alt="" />
                                </button>
                            ))}
                        </div>
                        <div className={styles.photoMeta}>
                            Photos ({photoIndex + 1}/{photos.length})
                        </div>
                    </div>

                    <button type="button" className={styles.downloadBtn} onClick={downloadSpecs}>
                        Download Specsheet
                    </button>
                </aside>

                <div className={styles.rightPane}>
                    <div className={styles.rightToolbar}>
                        <label className={styles.searchWrap}>
                            <Search size={18} aria-hidden />
                            <input
                                className={styles.searchInput}
                                type="search"
                                placeholder="Search specifications…"
                                value={searchQ}
                                onChange={(e) => setSearchQ(e.target.value)}
                                aria-label="Search specifications"
                            />
                        </label>
                        <button type="button" className={styles.closeBtn} aria-label="Close" onClick={onClose}>
                            <X size={22} />
                        </button>
                    </div>

                    <div className={styles.specScroll}>
                        <div className={styles.specColWrap}>
                            {filtered.map((block) => (
                                <article key={block.key} className={styles.specBlock}>
                                    <h3>{block.title}</h3>
                                    {block.paragraphs.map((p, i) => (
                                        <p key={`${block.key}-${i}`}>{p}</p>
                                    ))}
                                </article>
                            ))}
                            {!filtered.length ? (
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No sections match your search.</p>
                            ) : null}
                        </div>
                    </div>

                    <footer className={styles.specFooter}>
                        Specifications are compiled from the internal market database and seller materials. Verify hours, programs, and equipment with the
                        broker prior to making an offer.
                    </footer>
                </div>
            </div>
        </div>,
        document.body,
    );
}
