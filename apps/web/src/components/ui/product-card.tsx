import Link from 'next/link';
import { ProductCardData } from '../../lib/mock-data';

export function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <h3 className="text-base font-semibold">{product.title}</h3>
      <p className="mt-2 text-sm text-slate-300">MOQ: {product.moq.toLocaleString()} units</p>
      <p className="text-sm text-slate-300">From ${product.priceFrom.toFixed(2)} / unit</p>
      <p className="text-sm text-slate-400">Origin: {product.country}</p>
      <Link className="mt-3 inline-block text-sm font-medium text-cyan-400" href={`/products/${product.id}`}>
        View details →
      </Link>
    </article>
  );
}
