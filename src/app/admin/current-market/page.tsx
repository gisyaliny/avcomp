import type { Metadata } from 'next';
import CurrentMarketListingsClient from './CurrentMarketListingsClient';

export const metadata: Metadata = {
    title: 'Current market listings · AvComp',
    description: 'Current market listings sheet with filters, export, market summary, and specification compare.',
};

export default function CurrentMarketPage() {
    return <CurrentMarketListingsClient />;
}
