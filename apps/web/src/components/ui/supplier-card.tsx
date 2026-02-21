import Link from 'next/link';
import { SupplierData } from '../../lib/mock-data';

export function SupplierCard({ supplier }: { supplier: SupplierData }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-400">{supplier.country} · {supplier.years} yrs</p>
      <h3 className="mt-2 text-base font-semibold">{supplier.name}</h3>
      <p className="mt-2 text-sm text-slate-300">Response rate: {supplier.responseRate}</p>
      <p className="text-sm text-slate-300">Status: {supplier.verified ? 'Verified' : 'Pending verification'}</p>
      <Link className="mt-3 inline-block text-sm font-medium text-cyan-400" href={`/suppliers/${supplier.id}`}>
        View supplier →
      </Link>
    </article>
  );
}
