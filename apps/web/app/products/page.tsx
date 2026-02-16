import { ProductCard } from '../../src/components/ui/product-card';
import { featuredProducts } from '../../src/lib/mock-data';

export default function ProductsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Products</h1>
      <p className="mt-2 text-slate-300">Search and filter products by category, MOQ, and supplier country.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
