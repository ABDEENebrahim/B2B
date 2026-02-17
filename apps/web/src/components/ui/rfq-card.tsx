import Link from 'next/link';
import { RfqCardData } from '../../lib/mock-data';

export function RfqCard({ rfq }: { rfq: RfqCardData }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg shadow-black/20 transition hover:border-slate-600">
      <p className="text-xs uppercase tracking-wide text-slate-400">Buyer Region: {rfq.region}</p>
      <h3 className="mt-2 text-base font-semibold">{rfq.title}</h3>
      <p className="mt-2 text-sm text-slate-300">Quantity: {rfq.quantity}</p>
      <p className="text-sm text-amber-300">Deadline: {rfq.deadline}</p>
      <Link className="mt-4 inline-block text-sm font-medium text-emerald-400" href={`/rfqs/${rfq.id}`}>
        Submit quote →
      </Link>
    </article>
  );
}
