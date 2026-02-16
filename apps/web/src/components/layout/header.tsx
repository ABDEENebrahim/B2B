import Link from 'next/link';

const links = [
  { href: '/products', label: 'Products' },
  { href: '/suppliers', label: 'Suppliers' },
  { href: '/rfqs', label: 'RFQs' },
  { href: '/dashboard', label: 'Dashboard' },
];

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-white">
          B2B Market
        </Link>
        <nav className="flex gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Link href="/auth/login" className="rounded border border-slate-700 px-3 py-1 text-sm">
            Login
          </Link>
          <Link href="/auth/register" className="rounded bg-cyan-600 px-3 py-1 text-sm font-medium text-white">
            Join
          </Link>
        </div>
      </div>
    </header>
  );
}
