import Link from 'next/link';
import {
  dashboardStats,
  nextBestActions,
  recentMessages,
  recentRfqs,
  sourcingPlaybook,
} from '../../src/lib/mock-data';

const dashboardLinks = [
  { href: '/dashboard/rfqs', label: 'My RFQs' },
  { href: '/dashboard/orders', label: 'My Orders' },
  { href: '/dashboard/products', label: 'My Products' },
  { href: '/dashboard/messages', label: 'Messages' },
  { href: '/dashboard/profile', label: 'Profile' },
];

export default function DashboardHomePage() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
        <h1 className="text-2xl font-semibold">Buyer Command Center</h1>
        <p className="mt-2 text-sm text-slate-300">
          Track sourcing pipeline, supplier responses, and order progress from one dashboard.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((item) => (
          <article key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
            <p className="mt-1 text-2xl font-bold text-white">{item.value}</p>
            <p className="mt-1 text-xs text-cyan-300">{item.trend}</p>
          </article>
        ))}
      </div>

      <div className="rounded-xl border border-cyan-900 bg-cyan-950/30 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-cyan-200">Next best actions</h2>
          <Link href="/rfqs/new" className="text-xs text-cyan-300">
            Launch RFQ Copilot →
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {nextBestActions.map((action) => (
            <article key={action.title} className="rounded border border-cyan-900 bg-slate-950/60 p-3">
              <p className="text-sm font-semibold">{action.title}</p>
              <p className="mt-1 text-xs text-slate-300">{action.detail}</p>
              <p className="mt-2 text-xs text-cyan-300">Impact: {action.impact}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-lg font-semibold">Recent RFQ activity</h2>
          <div className="mt-4 space-y-2">
            {recentRfqs.slice(0, 4).map((rfq) => (
              <div key={rfq.id} className="rounded border border-slate-800 px-3 py-2 text-sm text-slate-300">
                <p className="font-medium text-slate-100">{rfq.title}</p>
                <p className="text-xs text-slate-400">
                  {rfq.region} · {rfq.quantity} · Deadline {rfq.deadline}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-lg font-semibold">Inbox preview</h2>
          <div className="mt-4 space-y-2">
            {recentMessages.map((message) => (
              <div key={message.subject} className="rounded border border-slate-800 px-3 py-2">
                <p className="text-sm font-medium text-slate-100">{message.from}</p>
                <p className="text-xs text-slate-300">{message.subject}</p>
                <p className="mt-1 text-[11px] text-slate-500">{message.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-lg font-semibold">Sourcing playbook</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
            {sourcingPlaybook.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-cyan-900 bg-cyan-950/30 p-4">
          <h2 className="text-lg font-semibold text-cyan-300">Quick actions</h2>
          <div className="mt-3 grid gap-2">
            {dashboardLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded border border-cyan-900 bg-slate-900 px-3 py-2 text-sm text-slate-200 hover:border-cyan-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
