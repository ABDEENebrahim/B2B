import Link from 'next/link';
import { ReactNode } from 'react';

const links = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/rfqs', label: 'RFQs' },
  { href: '/dashboard/orders', label: 'Orders' },
  { href: '/dashboard/products', label: 'Products' },
  { href: '/dashboard/messages', label: 'Messages' },
  { href: '/dashboard/profile', label: 'Profile' },
];

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-[220px_1fr]">
      <aside className="rounded-lg border border-slate-800 bg-slate-900 p-4">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">Dashboard</h2>
        <nav className="space-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block rounded px-2 py-1 text-sm text-slate-200 hover:bg-slate-800">
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div>{children}</div>
    </div>
  );
}
