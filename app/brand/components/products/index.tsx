import ProductCard from "@/components/custom/product-card";
import { products } from "@/static/product";
import React from "react";

function BrandProductsSection() {
  return (
    <div className="container my-8">
      <h2>Our Brand&apos;s Products</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {products
          .filter((i) => i.isOwnProduct)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isOwnProduct={product.isOwnProduct}
            />
          ))}
      </div>
    </div>
  );
}

export default BrandProductsSection;
