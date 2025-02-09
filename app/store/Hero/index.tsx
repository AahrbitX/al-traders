"use client";

import React, { useRef } from "react";
import { Search } from "lucide-react";

import { products } from "@/static/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "../context";

function StoreHeroSection() {
  const { setProducts } = useStore();

  const productSearchTextRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (productSearchTextRef.current) {
      const query = productSearchTextRef.current.value.toLowerCase();

      const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(query)
      );

      setProducts(filteredProducts);
    }
  };

  return (
    <div className="w-full test-section mb-6">
      <div className="container px-4">
        <div className="flex justify-center gap-4 ">
          <Input
            type="text"
            ref={productSearchTextRef}
            className="w-[14rem]"
            placeholder="Search Products..."
          />
          <Button variant={"default"} onClick={handleSearch}>
            <Search /> Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StoreHeroSection;
