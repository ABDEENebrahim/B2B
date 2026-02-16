import Link from 'next/link';

const dashboardLinks = [
  { href: '/dashboard/rfqs', label: 'My RFQs' },
  { href: '/dashboard/orders', label: 'My Orders' },
  { href: '/dashboard/products', label: 'My Products' },
  { href: '/dashboard/messages', label: 'Messages' },
  { href: '/dashboard/profile', label: 'Profile' },
];

export default function DashboardHomePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {dashboardLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded border border-slate-800 bg-slate-900 p-4 hover:border-slate-700">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
