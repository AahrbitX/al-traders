import { Button } from "@/components/ui/button";
import { ProductType } from "@/static/types/product";
import Link from "next/link";

interface ProductCardProps {
  product: ProductType;
  isOwnProduct: boolean;
}

export default function ProductCard({
  product,
  isOwnProduct,
}: ProductCardProps) {
  const price = product.price[0].price;

  return (
    <div
      className={`rounded-lg w-[20rem] h-[27rem] relative border p-4 flex flex-col gap-3`}
    >
      {/* <div className="relative h-full w-full aspect-square mb-4">*/}
      <div className="flex-grow p-4 bg-sky-400/50 rounded-md">
        {isOwnProduct && (
          <span className="text-xs bg-amber-300 px-3 py-2 rounded-full">
            20% OFF
          </span>
        )}
      </div>
      {/* </div>  */}

      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between ">
          <p className="font-bold">${price}</p>
          <Button variant="outline" asChild>
            <Link href={`/store/${product.id}`}>View Product</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
