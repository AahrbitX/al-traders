import React from "react";
import { products as rawProducts } from "@/static/product";
import ProductCard from "@/components/custom/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from "@/components/custom/carousel";
import { ProductType } from "@/static/types/product";

function ProductCarousel({
  isSameType = true,
  category,
}: {
  isSameType?: boolean;
  category: string;
}) {
  let products: ProductType[];

  if (!isSameType) {
    products = rawProducts.filter((p) => p.category !== category).slice(0, 10);
  } else {
    products = rawProducts.filter((p) => p.category === category).slice(0, 10);
  }

  return (
    <div className="pb-8">
      <Carousel>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicator className="-bottom-7" />
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
