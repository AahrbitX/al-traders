import React from "react";
import { Metadata } from "next";
import BrandHeroSection from "./components/Hero";
import BrandProductsSection from "./components/products";
import ContactsSection from "../components/Contact";

export const metadata: Metadata = {
  title: "Bulls Brand",
  description:
    "Explore top-quality hand tools from [Your Brand Name]. Discover durable manual tools, machine tool accessories, and brass hardware designed for precision and reliability. Shop now for the best in performance and durability!",
};

function BrandPage() {
  return (
    <div className="mt-24 min-h-screen">
      <BrandHeroSection />
      <BrandProductsSection />
      <ContactsSection />
    </div>
  );
}

export default BrandPage;
