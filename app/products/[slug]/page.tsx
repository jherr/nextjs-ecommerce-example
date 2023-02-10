import Image from "next/image";
import Link from "next/link";

import { getProductBySlug } from "@/src/products";

import Reviews from "./(components)/Reviews";

export default async function ProductById({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { description, image, name, reviews } = await getProductBySlug(slug);
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-5"
      >
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div className="flex items-center">
              <Link href="/" className="mr-4 text-sm font-medium text-gray-900">
                Home
              </Link>
              <svg
                viewBox="0 0 6 20"
                aria-hidden="true"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </li>
          <li className="text-sm">{name}</li>
        </ol>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <Image
          className="aspect-[2/2] w-full rounded-2xl object-cover"
          src={image}
          alt={`${name} image`}
          width={320}
          height={320}
        />
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {name}
          </h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-lg tracking-tight text-gray-900">
              {description}
            </p>
          </div>

          <Reviews slug={slug} reviews={reviews} />
        </div>
      </div>
    </>
  );
}
