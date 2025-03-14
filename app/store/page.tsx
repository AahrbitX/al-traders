import React from "react";
import StoreHeroSection from "./components/Hero";
import StoreProductsSection from "./products";
import ContactsSection from "../components/Contact";

function StorePage() {
  return (
    <div className="mt-20 min-h-screen">
      <StoreHeroSection />
      <StoreProductsSection />
      <ContactsSection />
    </div>
  );
}

export default StorePage;
