import Link from 'next/link';
import { RfqCardData } from '../../lib/mock-data';

export function RfqCard({ rfq }: { rfq: RfqCardData }) {
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <h3 className="text-base font-semibold">{rfq.title}</h3>
      <p className="mt-2 text-sm text-slate-300">Quantity: {rfq.quantity}</p>
      <p className="text-sm text-slate-300">Deadline: {rfq.deadline}</p>
      <Link className="mt-3 inline-block text-sm font-medium text-emerald-400" href={`/rfqs/${rfq.id}`}>
        Open RFQ →
      </Link>
    </article>
  );
}
