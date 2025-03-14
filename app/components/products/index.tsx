import React from "react";
import Link from "next/link";
import ImageCarousel from "@/components/custom/image-carousel";

function ProductsSection() {
  const items = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1718204436526-277f9f34607c?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 1",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1718717722247-26f4c6c09192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
      title: "Item 2",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 3",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1718524767488-10ee93e05e9c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 4",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1718524767488-10ee93e05e9c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 4",
    },
  ];
  return (
    <div className="container my-32 grid grid-rows-[auto-auto] lg:grid-cols-[0.7fr_1fr] gap-y-4">
      <div className="flex lg:items-start items-center justify-center flex-col">
        <h2 className="text-start text-4xl">Our Products</h2>
        <p className="text-muted-foreground text-pretty text-center lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam
          saepe necessitatibus a dignissimos sed, nihil sequi fugiat voluptates
          at est, iste obcaecati!
        </p>
        <Link
          className="mt-5 px-6 py-3 bg-primary text-black text-sm md:text-base rounded-lg font-medium inline-block relative"
          href="/store"
        >
          View All Products
        </Link>
      </div>
      <div className="flex justify-center">
        <ImageCarousel items={items} />
      </div>
    </div>
  );
}

export default ProductsSection;
