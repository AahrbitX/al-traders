import React from "react";

import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import BrandSection from "./components/Brand";
import ProductsSection from "./components/products";
import ContactsSection from "./components/Contact";

function IndexPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BrandSection />
      <ProductsSection />
      <ContactsSection />
    </div>
  );
}

export default IndexPage;
