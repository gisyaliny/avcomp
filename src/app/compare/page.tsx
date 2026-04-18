import { redirect } from 'next/navigation';

/** Legacy URL — specification compare lives under Market DB → title dropdown. */
export default function CompareRedirectPage() {
    redirect('/admin/current-market?sheet=compare');
}
