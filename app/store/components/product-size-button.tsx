"use client";

import React from "react";
import ProductVariantSelect from "./product-variant-select";

export default function ProductSizeButtons({
  sizes,
  variants,
}: {
  sizes: string[];
  variants: string[];
}) {
  return (
    <>
      {/* <p className="font-dmsans mb-6 text-4xl text-secondary font-medium">
        &#x20B9;{price}
      </p> */}
      {sizes.length > 0 && (
        <div className="space-y-4 ">
          <div className="text-lg font-semibold inline-block">
            Sizes Available: &emsp;
          </div>
          <span className="inline-flex items-center gap-4 ">
            {sizes.map((s) => (
              <span className="text-base font-medium text-neutral-800" key={s}>
                &#x2022; {s}
              </span>
            ))}
          </span>
        </div>
      )}
      {variants.length > 1 && (
        <div className="flex items-center gap-4 mt-6">
          <h3 className="text-lg font-semibold">Select Variant</h3>
          <ProductVariantSelect variants={variants} />
        </div>
      )}
    </>
  );
}
