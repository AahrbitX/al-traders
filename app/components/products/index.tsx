import React from "react";
import Link from "next/link";
import ImageCarousel from "@/components/custom/image-carousel";

function ProductsSection() {
  const items = [
    {
      id: 1,
      image:
        "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/7%20GRINDING%20WHEEL.png",
      title: "Item 1",
    },
    {
      id: 2,
      image:
        "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/NOSE%20PLIER.png",
      title: "Item 2",
    },
    {
      id: 3,
      image:
        "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/SPIRIT%20LEVEL.png",
      title: "Item 3",
    },
    {
      id: 4,
      image:
        "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/ABRASIVE%20WATER%20PAPER.png",
      title: "Item 4",
    },
    {
      id: 5,
      image:
        "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/product_images/TESTER.png",
      title: "Item 4",
    },
  ];
  return (
    <div className="container my-32 grid grid-rows-[auto-auto] lg:grid-cols-[0.7fr_1fr] gap-y-4">
      <div className="flex lg:items-start items-center justify-center flex-col">
        <h2 className="text-start text-4xl">Our Products</h2>
        <p className="text-muted-foreground text-pretty text-center lg:text-start">
          We offer durable manual tools, machine tool accessories, and hardware
          designed for precision and reliability. Explore our collection for
          industrial and home use.
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
