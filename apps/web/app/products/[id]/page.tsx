import { notFound } from 'next/navigation';
import { productDetails } from '../../../src/lib/mock-data';

interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productDetails.find((item) => item.id === params.id);
  if (!product) notFound();

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
        <p className="text-xs uppercase tracking-wide text-slate-400">{product.country} · MOQ {product.moq.toLocaleString()}</p>
        <h1 className="mt-1 text-2xl font-semibold">{product.title}</h1>
        <p className="mt-2 text-slate-300">Supplier: {product.supplier}</p>
        <p className="mt-2 text-cyan-300">From ${product.priceFrom.toFixed(2)} / unit</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-lg font-semibold">Technical specifications</h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {product.specs.map((spec) => (
              <div key={spec.label} className="rounded border border-slate-800 px-3 py-2 text-sm">
                <p className="text-slate-400">{spec.label}</p>
                <p className="text-slate-100">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h2 className="text-lg font-semibold">Trade terms</h2>
            <p className="mt-2 text-sm text-slate-300">Lead time: {product.leadTime}</p>
            <p className="mt-1 text-sm text-slate-300">Capacity: {product.capacity}</p>
            <p className="mt-1 text-sm text-slate-300">Payment: {product.paymentTerms}</p>
          </div>

          <div className="rounded-xl border border-cyan-900 bg-cyan-950/30 p-4">
            <h2 className="text-lg font-semibold text-cyan-300">Compliance</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.certifications.map((cert) => (
                <span key={cert} className="rounded-full border border-cyan-800 px-3 py-1 text-xs text-cyan-200">
                  {cert}
                </span>
              ))}
            </div>
            <button className="mt-4 rounded bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">Contact Supplier</button>
          </div>
        </div>
      </div>
    </section>
  );
}
