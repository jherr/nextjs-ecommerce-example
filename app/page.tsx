import { getProducts } from "@/src/products";
import ProductCard from "./(components)/ProductCard";

export default async function Home() {
  const products = await getProducts();

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3"
    >
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard {...product} />
        </li>
      ))}
    </ul>
  );
}
