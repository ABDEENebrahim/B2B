import Link from 'next/link';
import { ProductCard } from '../src/components/ui/product-card';
import { RfqCard } from '../src/components/ui/rfq-card';
import { featuredProducts, recentRfqs } from '../src/lib/mock-data';

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-8">
        <p className="text-sm uppercase tracking-wide text-cyan-400">Global B2B Sourcing</p>
        <h1 className="mt-2 text-3xl font-bold">Find verified suppliers, products, and quotes faster.</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Browse industrial products, publish RFQs, compare supplier quotes, and manage orders from one dashboard.
        </p>
        <div className="mt-5 flex gap-3">
          <Link href="/products" className="rounded bg-cyan-600 px-4 py-2 font-medium text-white">
            Browse products
          </Link>
          <Link href="/rfqs" className="rounded border border-slate-700 px-4 py-2 font-medium text-slate-100">
            View RFQs
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Featured Products</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Latest RFQs</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {recentRfqs.map((rfq) => (
            <RfqCard key={rfq.id} rfq={rfq} />
          ))}
        </div>
      </section>
    </main>
  );
}
