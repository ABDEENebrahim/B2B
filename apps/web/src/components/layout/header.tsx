import Link from 'next/link';
import { marketplaceCategories } from '../../lib/mock-data';

const mainLinks = [
  { href: '/products', label: 'Products' },
  { href: '/suppliers', label: 'Suppliers' },
  { href: '/rfqs', label: 'RFQs' },
  { href: '/dashboard', label: 'Dashboard' },
];

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="border-b border-slate-900 bg-slate-900/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs text-slate-400">
          <span>Welcome to B2B Market</span>
          <div className="flex gap-4">
            <span>Buyer Center</span>
            <span>Supplier Center</span>
            <span>Help</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
        <Link href="/" className="shrink-0 text-xl font-bold text-white">
          B2B Market
        </Link>
        <div className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-400">
          Search products, suppliers, categories...
        </div>
        <div className="flex gap-2">
          <Link href="/auth/login" className="rounded border border-slate-700 px-3 py-1 text-sm">
            Login
          </Link>
          <Link href="/auth/register" className="rounded bg-cyan-600 px-3 py-1 text-sm font-medium text-white">
            Join
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap gap-5 px-6 pb-3 text-sm text-slate-300">
        {mainLinks.map((link) => (
          <Link key={link.href} href={link.href} className="font-medium hover:text-white">
            {link.label}
          </Link>
        ))}
        <div className="ml-auto hidden gap-3 lg:flex">
          {marketplaceCategories.slice(0, 4).map((item) => (
            <span key={item} className="text-xs text-slate-500">
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
