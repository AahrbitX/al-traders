import React, { Suspense } from "react";
import StoreHeroSection from "./components/Hero";
import StoreProductsSection from "./products";
import ContactsSection from "../components/Contact";
import { Metadata } from "next";
import Loader from "@/components/custom/loader";

export const metadata: Metadata = {
  title: "Store | AL traders",
  description:
    "Shop for top-quality hand tools from Bulls Store. Discover durable manual tools, machine tool accessories, and brass hardware designed for precision and reliability. Shop now for the best in performance and durability!",
};

function StorePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader />
        </div>
      }
    >
      <div className="mt-20 min-h-screen">
        <StoreHeroSection />
        <StoreProductsSection />
        <ContactsSection />
      </div>
    </Suspense>
  );
}

export default StorePage;
