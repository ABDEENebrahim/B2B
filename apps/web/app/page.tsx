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

const services = [
  {
    title: 'Trade Assurance',
    desc: 'Secure milestone payments and protected order completion for buyers and suppliers.',
  },
  {
    title: 'Inspection Services',
    desc: 'Book pre-shipment quality checks through partner agencies before final payment.',
  },
  {
    title: 'Logistics Solutions',
    desc: 'Compare freight options and receive shipping updates from factory to destination port.',
  },
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

        <div className="mt-8 grid gap-3 text-xs text-slate-300 md:grid-cols-3">
          <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-3">✓ Verified suppliers and audits</div>
          <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-3">✓ Fast quote turnaround within 24h</div>
          <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-3">✓ Multi-country sourcing support</div>
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

      <section className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{service.desc}</p>
          </div>
        ))}
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

      <section className="rounded-2xl border border-cyan-900 bg-gradient-to-r from-cyan-950/40 to-slate-900 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-cyan-400">For Global Buyers</p>
            <h2 className="mt-1 text-2xl font-semibold">Need custom manufacturing at scale?</h2>
            <p className="mt-2 text-sm text-slate-300">
              Post one RFQ and receive matched quotations from verified factories across key sourcing regions.
            </p>
          </div>
          <Link href="/rfqs" className="rounded bg-cyan-600 px-5 py-2 text-sm font-semibold text-white">
            Start Sourcing Now
          </Link>
        </div>
      </section>
    </main>
  );
}
