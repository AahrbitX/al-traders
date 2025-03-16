import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/static/types/product";

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  const price = product.prices[0].amount;

  return (
    <Link href={`/store/${product.id}`}>
      <div className="product-card">
        <div className="flex-grow p-4 rounded-md bg-gradient-to-br from-amber-100 to-red-100 relative">
          {/* {product.isOwnProduct && (
          <span className="text-xs absolute top-3 left-3 bg-amber-300 px-3 py-2 rounded-full">
            20% OFF
          </span>
        )} */}
          <Image
            src="https://prd.place/400?id=33"
            alt="dummy"
            width={250}
            height={200}
          />
        </div>

        <div className="space-y-2">
          <h3
            title={product.name}
            className="font-semibold text-xl line-clamp-1"
          >
            {product.name}
          </h3>
          <p
            title={product.description}
            className="text-sm text-gray-500 line-clamp-1"
          >
            {product.description}
          </p>
          <div className="flex items-center justify-between ">
            <p className="font-bold text-3xl text-secondary">&#8377;{price}</p>
            <Badge size={product.sizes.length} />
            <Badge color={product.variants.length} />
          </div>
        </div>
      </div>
    </Link>
  );
}

const Badge = ({ size, color }: { size?: number; color?: number }) => {
  if (!size && !color) {
    return null;
  }

  return (
    <>
      {size! > 0 && (
        <span className="flex items-center text-sm bg-amber-200 px-3 py-1 rounded-full">
          {size} {size === 1 ? "size" : "sizes"}
        </span>
      )}
      {color! > 0 && (
        <span className="flex items-center text-sm bg-red-200 px-3 py-1 rounded-full">
          {color} {color === 1 ? "color" : "colors"}
        </span>
      )}
    </>
  );
};
