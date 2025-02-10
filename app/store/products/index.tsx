"use client";

import React, { Suspense } from "react";
import ProductCard from "@/components/custom/product-card";
import { useStore } from "@/store/useStore";

function StoreProductsSection() {
  const { products } = useStore();

  return (
    <div className="container">
      <Suspense fallback={<p>Loading...</p>}>
        <div className="flex flex-wrap gap-6 justify-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isOwnProduct={product.isOwnProduct}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default StoreProductsSection;
