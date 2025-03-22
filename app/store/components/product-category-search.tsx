"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { productCategories as rawProductCategories } from "@/static/product-categories";
import { useStore } from "@/store/useStore";
import { products } from "@/static/product";

export default function ProductCategorySelect() {
  const { setProducts } = useStore();
  const productCategories = ["All products", ...rawProductCategories];

  const handleProductsCategoryChange = (value: string) => {
    if (value === "ALL PRODUCTS") {
      setProducts(products);
      return;
    }
    const currProds = products.filter((p) => p.category === value);
    setProducts(currProds);
  };

  return (
    <Select onValueChange={handleProductsCategoryChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {productCategories.map((category) => (
            <SelectItem value={category} key={category}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
