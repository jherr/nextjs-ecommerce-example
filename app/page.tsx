import Image from "next/image";
import Link from "next/link";

import { getProducts } from "@/src/products";

const ProductCard = ({
  name,
  description,
  image,
  slug,
}: {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
}) => (
  <Link href={`/products/${slug}`}>
    <Image
      className="aspect-[2/2] w-full rounded-2xl object-cover"
      src={image}
      alt={`${name} image`}
      width={320}
      height={320}
    />
    <h3 className="mt-2 text-lg font-bold leading-10 text-gray-900">{name}</h3>
    <p className="mt-4 text-base leading-7 text-gray-600">{description}</p>
  </Link>
);

export default async function Home() {
  const products = await getProducts();
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
    >
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard {...product} />
        </li>
      ))}
    </ul>
  );
}
