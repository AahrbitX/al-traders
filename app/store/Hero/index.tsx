"use client";

import React, { useEffect } from "react";
import { Trash } from "lucide-react";

import { products } from "@/static/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/store/useStore";

function StoreHeroSection() {
  const { filterText, setProducts, setFilterText } = useStore();

  useEffect(() => {
    if (!filterText.trim()) {
      setProducts(products);
      return;
    }

    const filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(filterText.toLowerCase())
    );

    setProducts(filteredProducts);
  }, [filterText, setProducts]);

  return (
    <div className="w-full test-section mb-6">
      <div className="container px-4">
        <div className="flex justify-center gap-4">
          <Input
            type="text"
            value={filterText}
            onChange={(event) => setFilterText(event.target.value)}
            className="w-[14rem]"
            placeholder="Search Products..."
          />
          <Button variant="default" onClick={() => setFilterText("")}>
            <Trash /> Clear
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StoreHeroSection;
