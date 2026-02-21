import Link from 'next/link';
import { RfqCard } from '../../src/components/ui/rfq-card';
import { recentRfqs } from '../../src/lib/mock-data';

const spotlightRegions = ['Europe', 'Middle East', 'North America', 'Africa'];

export default function RfqsPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
        <h1 className="text-2xl font-semibold">Open RFQs</h1>
        <p className="mt-2 text-slate-300">Find high-intent demand from global buyers and submit competitive quotes.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {spotlightRegions.map((region) => (
            <span key={region} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
              {region}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {recentRfqs.map((rfq) => (
            <RfqCard key={rfq.id} rfq={rfq} />
          ))}
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Win more RFQs</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-slate-300">
              <li>Respond within 12 hours for higher buyer visibility</li>
              <li>Attach quality certificates and testing reports</li>
              <li>Offer tiered pricing for 3+ quantity breaks</li>
            </ul>
          </div>

          <div className="rounded-xl border border-cyan-900 bg-cyan-950/30 p-4">
            <h2 className="text-sm font-semibold text-cyan-300">Need private sourcing?</h2>
            <p className="mt-2 text-xs text-slate-300">Create a private RFQ room and invite shortlisted factories only.</p>
            <Link href="/dashboard/rfqs" className="mt-3 inline-block rounded bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white">
              Open RFQ Center
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
