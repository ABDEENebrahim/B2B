import Link from 'next/link';
import { ProductCardData } from '../../lib/mock-data';

export function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-slate-600">
      <p className="text-xs uppercase tracking-wide text-slate-400">{product.country} · MOQ {product.moq.toLocaleString()}</p>
      <h3 className="mt-2 line-clamp-2 text-base font-semibold">{product.title}</h3>
      <p className="mt-2 text-sm text-slate-300">Supplier: {product.supplier}</p>
      <p className="mt-1 text-sm text-cyan-300">From ${product.priceFrom.toFixed(2)} / unit</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {product.badges?.map((badge) => (
          <span key={badge} className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-300">
            {badge}
          </span>
        ))}
      </div>
      <Link className="mt-4 inline-block text-sm font-medium text-cyan-400" href={`/products/${product.id}`}>
        View details →
      </Link>
    </article>
  );
}
