import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  name,
  description,
  image,
  slug,
  showDescription = true,
}: {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  showDescription?: boolean;
}) => (
  <Link href={`/products/${slug}`}>
    <Image
      className={`aspect-[2/2] w-full rounded-2xl object-cover min-w-[320px]`}
      src={image}
      alt={`${name} image`}
      width={320}
      height={320}
    />
    <h3 className="mt-2 text-lg font-bold leading-10 text-gray-900">{name}</h3>
    {showDescription && (
      <p className="mt-4 text-base leading-7 text-gray-600">{description}</p>
    )}
  </Link>
);

export default ProductCard;
