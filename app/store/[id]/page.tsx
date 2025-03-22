import React from "react";
import { notFound } from "next/navigation";

import { products } from "@/static/product";
import ProductSizeButtons from "../components/product-size-button";
import ContactsSection from "@/app/components/Contact";
import Image from "next/image";
import ProductCarousel from "./components/Carousel";

interface ProductIdPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductIdPageProps) {
  const { id } = await params;
  const product = products.find((product) => product.id === id);
  return {
    title: product?.name + " | AL Traders" || "Product not found",
    description: product?.metaDescriptions,
  };
}

async function ProductIdPage({ params }: ProductIdPageProps) {
  const { id } = await params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="mt-8 h-max grid md:grid-cols-[0.7fr_1fr] md:grid-rows-1 grid-rows-2 gap-x-6 gap-y-4 pt-12 container px-2">
        <div className=" flex items-center justify-center py-8 px-3 rounded-2xl bg-gradient-to-br from-amber-100 to-red-100">
          <Image
            priority
            src={product.images}
            alt={`Product image`}
            width={250}
            height={300}
          />
        </div>
        <div className=" flex flex-col items-startjustify-around gap-12 bg-muted rounded-2xl py-8 px-4">
          <div>
            <h2 className="text-3xl text-foreground text-left font-semibold mb-2">
              {product.name}
            </h2>
            <p title={product.description} className=" text-muted-foreground">
              {product.description}
            </p>
          </div>
          <div className="">
            <ProductSizeButtons
              prices={product.prices}
              sizes={product.sizes}
              variants={product.variants}
            />
          </div>
        </div>
      </div>
      <div className="container min-h-[20rem] my-6">
        <h2 className="text-left">Similar Products</h2>
        <ProductCarousel category={product.category} />
      </div>
      <div className="container min-h-[20rem] my-6">
        <h2 className="text-left">Other Products</h2>
        <ProductCarousel isSameType={false} category={product.category} />
      </div>
      <ContactsSection />
    </>
  );
}

export default ProductIdPage;
