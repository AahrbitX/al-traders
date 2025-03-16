"use client";

import React, { memo } from "react";
import ProductCard from "@/components/custom/product-card";
import { useStore } from "@/store/useStore";

function StoreProductsSection() {
  const { products } = useStore();

  return (
    <div className="container">
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default memo(StoreProductsSection);
