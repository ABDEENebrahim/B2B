import Link from 'next/link';

export default function SuppliersPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Suppliers</h1>
      <div className="mt-4 space-y-3">
        {['s-100', 's-200', 's-300'].map((id) => (
          <Link key={id} className="block rounded border border-slate-800 bg-slate-900 p-4 hover:border-slate-700" href={`/suppliers/${id}`}>
            Supplier {id}
          </Link>
        ))}
      </div>
    </section>
  );
}
