import Link from 'next/link';
import { marketplaceCategories, rfqTemplates } from '../../../src/lib/mock-data';

const steps = [
  { id: 1, label: 'Requirements' },
  { id: 2, label: 'Commercial Terms' },
  { id: 3, label: 'Quality & Compliance' },
  { id: 4, label: 'Publish & Match' },
];

export default function NewRfqPage() {
  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
        <p className="text-xs uppercase tracking-wide text-cyan-400">Sourcing Copilot</p>
        <h1 className="mt-1 text-2xl font-semibold">Create RFQ in under 3 minutes</h1>
        <p className="mt-2 text-sm text-slate-300">
          Use guided templates to publish clearer RFQs and receive higher quality quotes faster.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {steps.map((step) => (
              <span key={step.id} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                {step.id}. {step.label}
              </span>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              Product category
              <select className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm">
                {marketplaceCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>

            <label className="text-sm text-slate-300">
              Target quantity
              <input className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="e.g., 50,000 pcs" />
            </label>

            <label className="text-sm text-slate-300 sm:col-span-2">
              Product specs / requirements
              <textarea
                className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
                rows={5}
                placeholder="Paste specs, tolerances, material requirements, and packaging details"
              />
            </label>

            <label className="text-sm text-slate-300">
              Delivery destination
              <input className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Country / Port" />
            </label>

            <label className="text-sm text-slate-300">
              Preferred Incoterm
              <select className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm">
                <option>FOB</option>
                <option>CIF</option>
                <option>EXW</option>
                <option>DDP</option>
              </select>
            </label>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button className="rounded bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">Generate AI Draft</button>
            <button className="rounded border border-slate-700 px-4 py-2 text-sm">Save as Draft</button>
            <button className="rounded border border-emerald-700 bg-emerald-950 px-4 py-2 text-sm text-emerald-300">Publish RFQ</button>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Templates</h2>
            <div className="mt-3 space-y-3">
              {rfqTemplates.map((tpl) => (
                <article key={tpl.id} className="rounded border border-slate-800 p-3">
                  <p className="text-xs text-slate-400">{tpl.category}</p>
                  <h3 className="text-sm font-semibold">{tpl.name}</h3>
                  <p className="mt-1 text-xs text-slate-300">{tpl.description}</p>
                  <p className="mt-1 text-xs text-cyan-300">Lead time: {tpl.suggestedLeadTime}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-cyan-900 bg-cyan-950/30 p-4">
            <h2 className="text-sm font-semibold text-cyan-300">Pro tip</h2>
            <p className="mt-2 text-xs text-slate-300">Attach drawings and QC standards to increase qualified quote rate by up to 35%.</p>
            <Link href="/dashboard" className="mt-3 inline-block text-xs text-cyan-300">
              Open command center →
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
