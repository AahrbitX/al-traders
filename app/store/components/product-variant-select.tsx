"use client";

import React, { useCallback } from "react";
import { useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ProductVariantSelect({
  prices,
  setPrice,
  variants,
}: {
  prices: {
    currency: string;
    amount: number;
  }[];
  variants: string[];
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}) {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleValueChange = (color: string) => {
    // Find the index of the selected variant
    const index = variants.indexOf(color);

    // Update price based on the index
    if (index !== -1 && prices[index]) {
      setPrice(prices[index].amount);
    }

    // Update the URL without triggering a new request
    const newQueryString = createQueryString("color", color);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newQueryString}`
    );
  };

  const defaultVariantValue = variants.find((color) => {
    return color === searchParams.get("color");
  });

  return (
    <Select
      onValueChange={handleValueChange}
      defaultValue={defaultVariantValue ? defaultVariantValue : variants[0]}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Colour" />
      </SelectTrigger>
      <SelectContent>
        {variants.map((v) => (
          <SelectItem value={v} key={`color-${v}`}>
            {v}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default ProductVariantSelect;
