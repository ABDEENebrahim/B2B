import Link from 'next/link';
import { notFound } from 'next/navigation';
import { quoteComparisonByRfqId, recentRfqs } from '../../../src/lib/mock-data';

interface RfqPageProps {
  params: { id: string };
}

export default function RfqDetailPage({ params }: RfqPageProps) {
  const rfq = recentRfqs.find((item) => item.id === params.id);
  if (!rfq) notFound();

  const comparisons = quoteComparisonByRfqId[rfq.id] ?? [];

  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
        <p className="text-xs uppercase tracking-wide text-cyan-400">RFQ Decision Cockpit</p>
        <h1 className="mt-1 text-2xl font-semibold">{rfq.title}</h1>
        <p className="mt-2 text-sm text-slate-300">
          Quantity: {rfq.quantity} · Buyer region: {rfq.region} · Deadline: {rfq.deadline}
        </p>
      </header>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">Quote comparison</h2>
          <Link href="/rfqs/new" className="rounded border border-cyan-700 bg-cyan-950 px-3 py-1.5 text-xs text-cyan-300">
            Create new RFQ
          </Link>
        </div>

        {comparisons.length === 0 ? (
          <p className="text-sm text-slate-300">No quote comparisons available yet for this RFQ.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-xs uppercase text-slate-400">
                <tr className="border-b border-slate-800">
                  <th className="px-3 py-2">Supplier</th>
                  <th className="px-3 py-2">Unit Price</th>
                  <th className="px-3 py-2">MOQ</th>
                  <th className="px-3 py-2">Lead Time</th>
                  <th className="px-3 py-2">Payment</th>
                  <th className="px-3 py-2">Quality Score</th>
                  <th className="px-3 py-2">Risk</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((quote) => (
                  <tr key={quote.supplier} className="border-b border-slate-800/70">
                    <td className="px-3 py-2 font-medium text-slate-100">{quote.supplier}</td>
                    <td className="px-3 py-2 text-cyan-300">${quote.unitPrice.toFixed(3)}</td>
                    <td className="px-3 py-2">{quote.moq.toLocaleString()}</td>
                    <td className="px-3 py-2">{quote.leadTimeDays} days</td>
                    <td className="px-3 py-2">{quote.paymentTerms}</td>
                    <td className="px-3 py-2">{quote.qualityScore}/100</td>
                    <td className="px-3 py-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${
                          quote.riskLevel === 'Low'
                            ? 'bg-emerald-950 text-emerald-300'
                            : quote.riskLevel === 'Medium'
                              ? 'bg-amber-950 text-amber-300'
                              : 'bg-rose-950 text-rose-300'
                        }`}
                      >
                        {quote.riskLevel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <button className="rounded border border-slate-700 bg-slate-900 px-4 py-3 text-sm">Ask AI to summarize best quote</button>
        <button className="rounded border border-emerald-700 bg-emerald-950 px-4 py-3 text-sm text-emerald-300">Award supplier</button>
        <button className="rounded border border-slate-700 bg-slate-900 px-4 py-3 text-sm">Request counteroffer</button>
      </div>
    </section>
  );
}
