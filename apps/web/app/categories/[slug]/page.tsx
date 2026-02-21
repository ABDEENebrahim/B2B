interface CategoryPageProps {
  params: { slug: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Category: {params.slug}</h1>
      <p className="mt-2 text-slate-300">Category tree navigation and product filters will be rendered here.</p>
    </section>
  );
}
