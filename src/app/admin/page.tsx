'use client';

import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function AdminToCurrentMarketRedirect() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const q = searchParams.toString();
        router.replace(q ? `/admin/current-market?${q}` : '/admin/current-market');
    }, [router, searchParams]);

    return (
        <p style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            Opening market database…
        </p>
    );
}

/** Legacy `/admin` URL — forwards to the unified listings view. */
export default function AdminMarketPage() {
    return (
        <Suspense fallback={<p style={{ padding: '2rem', textAlign: 'center' }}>Loading…</p>}>
            <AdminToCurrentMarketRedirect />
        </Suspense>
    );
}
