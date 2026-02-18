import { SupplierCard } from '../../src/components/ui/supplier-card';
import { featuredSuppliers } from '../../src/lib/mock-data';

const topCountries = ['China', 'Germany', 'India', 'Türkiye', 'Vietnam', 'South Africa'];

export default function SuppliersPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
        <h1 className="text-2xl font-semibold">Verified Supplier Directory</h1>
        <p className="mt-2 text-slate-300">Shortlist trusted manufacturers and trading companies by capability and response rate.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {topCountries.map((country) => (
            <span key={country} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
              {country}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredSuppliers.map((supplier) => (
          <SupplierCard key={supplier.id} supplier={supplier} />
        ))}
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        <h2 className="text-lg font-semibold">Supplier onboarding checklist</h2>
        <div className="mt-3 grid gap-3 text-sm text-slate-300 md:grid-cols-3">
          <div className="rounded border border-slate-800 p-3">Upload business license and export profile</div>
          <div className="rounded border border-slate-800 p-3">Complete product catalog and MOQ matrix</div>
          <div className="rounded border border-slate-800 p-3">Enable response SLA and quote templates</div>
        </div>
      </div>
    </section>
  );
}
