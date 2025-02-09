import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function StoreHeroSection() {
  return (
    <div className="w-full test-section py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide selection of high-quality products. From our own
            signature items to carefully selected merchandise - we offer
            everything you need in one place. Browse our collection and find
            exactly what you&apos;re looking for.
          </p>
        </div>
        <div className="flex justify-center gap-4 ">
          <Input
            type="text"
            className="w-[14rem]"
            placeholder="Search Products..."
          />
          <Button variant={"default"}>
            <Search /> Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StoreHeroSection;
