import { SupplierCard } from '../../src/components/ui/supplier-card';
import { featuredSuppliers } from '../../src/lib/mock-data';

export default function SuppliersPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Verified Supplier Directory</h1>
      <p className="mt-2 text-slate-300">Shortlist trusted manufacturers and trading companies by capability and response rate.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredSuppliers.map((supplier) => (
          <SupplierCard key={supplier.id} supplier={supplier} />
        ))}
      </div>
    </section>
  );
}
