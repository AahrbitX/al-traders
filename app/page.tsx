import React from "react";

import HeroSection from "./components/Hero";
import StatsSection from "./components/Stats";
import ProductsSection from "./components/products";
import ContactsSection from "./components/Contact";

function IndexPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <ContactsSection />
    </div>
  );
}

export default IndexPage;
