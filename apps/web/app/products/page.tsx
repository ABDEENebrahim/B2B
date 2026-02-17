import { ProductCard } from '../../src/components/ui/product-card';
import { featuredProducts, marketplaceCategories } from '../../src/lib/mock-data';

export default function ProductsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Source Products</h1>
        <p className="mt-2 text-slate-300">Compare MOQ, lead times, and verified supplier capabilities.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Filter by category</h2>
          <div className="mt-3 space-y-2 text-sm">
            {marketplaceCategories.map((category) => (
              <div key={category} className="rounded border border-slate-800 px-3 py-2 text-slate-300">
                {category}
              </div>
            ))}
          </div>
        </aside>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
