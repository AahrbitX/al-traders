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

import { productCategories as rawProductCategories } from "@/data/product-categories";
import { useStore } from "@/store/useStore";
import { products } from "@/data/product";
import { useRouter, useSearchParams } from "next/navigation";
import { CategoryMap } from "@/lib/categoryMap";

export default function ProductCategorySelect() {
  const { setProducts } = useStore();
  const productCategories = ["All products", ...rawProductCategories];

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const handleProductsCategoryChange = React.useCallback(
    (value: string) => {
      if (value.toLowerCase() === "all products") {
        setProducts(products);
        return;
      }
      setProducts(products.filter((p) => p.category === value));
    },
    [setProducts]
  );

  React.useEffect(() => {
    if (category) {
      const currCat = CategoryMap.get(category);
      if (currCat) {
        handleProductsCategoryChange(currCat);
      }
    }
  }, [category, handleProductsCategoryChange]);

  const router = useRouter();

  const handleCategoryChange = (category: string) => {
    console.log(category);
    if (category === "All products") {
      router.replace(`/store?page=1`, {});
    }
    const catSlug = [...CategoryMap.entries()].find(
      ([, value]) => value === category
    )?.[0];
    if (!catSlug) return;
    router.replace(`/store?category=${catSlug}&page=1`);
  };

  return (
    <Select onValueChange={handleCategoryChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {productCategories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
