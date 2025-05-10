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
import { productCategories } from "@/data/product-categories";
import { useStore } from "@/store/useStore";
import { products } from "@/data/product";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductCategorySelect() {
  const { setProducts } = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const currValue = productCategories.find(
    (category) => category.slug === categoryParam
  ) || { label: "All Products", slug: "all-products" };

  const handleProductsCategoryChange = React.useCallback(
    (slug: string) => {
      if (!slug || slug === "all-products") {
        setProducts(products);
        return;
      }
      setProducts(products.filter((p) => p.category === slug));
    },
    [setProducts]
  );

  React.useEffect(() => {
    handleProductsCategoryChange(categoryParam || "all-products");
  }, [categoryParam, handleProductsCategoryChange]);

  const handleCategoryChange = (slug: string) => {
    if (slug === "all-products") {
      handleProductsCategoryChange("all-products");
      router.replace(`/store?page=1`);
    } else {
      handleProductsCategoryChange(slug);
      router.replace(`/store?page=1&category=${slug}`);
    }
  };

  return (
    <Select onValueChange={handleCategoryChange} defaultValue={currValue.slug}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {productCategories.map((category) => (
            <SelectItem key={category.slug} value={category.slug}>
              {category.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
