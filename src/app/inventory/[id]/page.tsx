import { MOCK_AIRCRAFT } from '@/lib/mockData';
import AircraftDetailClient from './AircraftDetailClient';

// Static Params for Export
export async function generateStaticParams() {
  return MOCK_AIRCRAFT.map((aircraft) => ({
    id: aircraft.id,
  }));
}

export default async function AircraftDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <AircraftDetailClient id={id} />;
}
