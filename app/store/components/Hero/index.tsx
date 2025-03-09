import React from "react";

import ProductCategorySelect from "../product-category-search";
import Catalogue from "./Catalogue";

function StoreHeroSection() {
  return (
    <div className="container grid grid-rows-[auto-auto-auto] md:grid-rows-2 md:grid-cols-2 py-[40px] gap-3 md:grid-flow-col justify-center md:justify-start">
      <h1 className="text-secondary text-4xl md:text-5xl lg:text-6xl font-dmsans font-bold text-center md:text-start">
        Welcome to AL Traders Store
      </h1>

      <div className="order-3 md:order-2 flex items-center justify-center flex-col md:items-start">
        <p className="text-2xl my-3">Select Product Category here</p>
        <ProductCategorySelect />
      </div>

      <div
        id="books"
        className="order-2 md:order-3 row-span-2 flex justify-around max-w-lg md:max-w-xl self-center "
      >
        <Catalogue />
      </div>
    </div>
  );
}

export default StoreHeroSection;
