import Link from 'next/link';
import { ProductCard } from '../src/components/ui/product-card';
import { RfqCard } from '../src/components/ui/rfq-card';
import { SupplierCard } from '../src/components/ui/supplier-card';
import {
  featuredProducts,
  featuredSuppliers,
  marketplaceCategories,
  recentRfqs,
} from '../src/lib/mock-data';

const stats = [
  { label: 'Active Suppliers', value: '38,000+' },
  { label: 'RFQs per Month', value: '52,000+' },
  { label: 'Product Listings', value: '3.1M+' },
  { label: 'Countries Served', value: '190+' },
];

export default function HomePage() {
  return (
    <main className="space-y-12">
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-10">
        <p className="text-sm uppercase tracking-wide text-cyan-400">Global Wholesale Marketplace</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
          Source verified products and suppliers for industrial, commercial, and OEM needs.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Publish RFQs, compare offers, manage orders, and collaborate with suppliers through one B2B workflow.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/products" className="rounded bg-cyan-600 px-5 py-2 font-medium text-white">
            Source Products
          </Link>
          <Link href="/rfqs" className="rounded border border-slate-600 px-5 py-2 font-medium text-slate-100">
            Submit RFQ
          </Link>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
            <p className="mt-1 text-2xl font-bold text-white">{item.value}</p>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Browse by Category</h2>
          <Link href="/products" className="text-sm text-cyan-400">
            View all →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaceCategories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm hover:border-slate-600"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Featured Products</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-semibold">Latest RFQs</h2>
          <div className="space-y-3">
            {recentRfqs.map((rfq) => (
              <RfqCard key={rfq.id} rfq={rfq} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Recommended Suppliers</h2>
          <div className="space-y-3">
            {featuredSuppliers.map((supplier) => (
              <SupplierCard key={supplier.id} supplier={supplier} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
