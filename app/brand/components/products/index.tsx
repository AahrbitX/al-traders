import React from "react";
import { products } from "@/data/product";
import ProductCard from "@/components/custom/product-card";

function BrandProductsSection() {
  return (
    <div className="container my-8">
      <h2 className="mb-8 text-4xl">Our Brand&apos;s Products</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {products
          .filter((i) => i.isOwnProduct)
          .slice(0, 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default BrandProductsSection;
