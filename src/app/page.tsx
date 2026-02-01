import { Suspense } from 'react';
import InventoryExplorer from '@/components/InventoryExplorer';

export const dynamic = 'force-dynamic';

export default function Home() {
    return (
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading Inventory...</div>}>
            <InventoryExplorer />
        </Suspense>
    );
}
