import { getProducts } from "@/src/products";
import ProductCard from "@/app/(components)/ProductCard";

export default async function ProductsCarousel({
  excludeSlug,
}: {
  excludeSlug?: string;
}) {
  const products = await getProducts();

  return (
    <ul role="list" className="flex flex-row overflow-x-scroll gap-2">
      {products
        .filter(({ slug }) => slug !== excludeSlug)
        .map((product) => (
          <li key={product.id}>
            <ProductCard {...product} showDescription={false} />
          </li>
        ))}
    </ul>
  );
}
