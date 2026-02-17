const columns = {
  Platform: ['About Us', 'Trust & Safety', 'Terms', 'Privacy'],
  Services: ['RFQ Service', 'Trade Assurance', 'Logistics Support', 'Inspection'],
  Resources: ['Buyer Guide', 'Supplier Guide', 'Help Center', 'API Docs'],
};

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        {Object.entries(columns).map(([title, links]) => (
          <div key={title}>
            <h3 className="mb-3 text-sm font-semibold text-slate-200">{title}</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-900 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} B2B Market. All rights reserved.
      </div>
    </footer>
  );
}
