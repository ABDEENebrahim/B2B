import { ProductCard } from '../../src/components/ui/product-card';
import { featuredProducts, marketplaceCategories } from '../../src/lib/mock-data';

const quickFilters = ['Ready to Ship', 'Verified Supplier', 'Trade Assurance', 'Low MOQ'];

export default function ProductsPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
        <h1 className="text-2xl font-semibold">Source Products</h1>
        <p className="mt-2 text-slate-300">Compare MOQ, lead times, supplier credentials, and pricing tiers in one place.</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {quickFilters.map((filter) => (
            <span key={filter} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300">
              {filter}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Filter by category</h2>
            <div className="mt-3 space-y-2 text-sm">
              {marketplaceCategories.map((category) => (
                <div key={category} className="rounded border border-slate-800 px-3 py-2 text-slate-300 hover:border-slate-600">
                  {category}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-cyan-900 bg-cyan-950/30 p-4">
            <h2 className="text-sm font-semibold text-cyan-300">Can't find exact specs?</h2>
            <p className="mt-2 text-xs text-slate-300">Post an RFQ and let suppliers quote to your custom requirements.</p>
            <a href="/rfqs/new" className="mt-3 inline-block rounded bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white">
              Post RFQ
            </a>
          </div>
        </aside>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm">
            <p className="text-slate-300">Showing {featuredProducts.length} featured products</p>
            <div className="flex gap-2 text-xs text-slate-300">
              <span className="rounded border border-slate-700 px-2 py-1">Best Match</span>
              <span className="rounded border border-slate-700 px-2 py-1">Newest</span>
              <span className="rounded border border-slate-700 px-2 py-1">Low MOQ</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
