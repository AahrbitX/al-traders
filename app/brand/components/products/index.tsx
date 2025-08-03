import React from "react";
import { products } from "@/data/product";
import ProductCard from "@/components/custom/product-card";
import Link from "next/link";
import { getRoute } from "@/lib/getRoute"

function BrandProductsSection() {
  return (
    <div className="container my-8 flex flex-col items-center justify-center">
      <h2 className="mb-8 text-4xl">Our Brand&apos;s Products</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {products
          .filter((i) => i.isOwnProduct)
          .slice(0, 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className="mt-8">
        <Link
          className="mt-5 px-6 py-3 bg-primary text-black text-sm md:text-base rounded-lg font-medium inline-block relative"
          href={getRoute("/store")}
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}

export default BrandProductsSection;