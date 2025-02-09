"use client";

import { products as ProductsArray } from "@/static/product";
import { ProductType } from "@/static/types/product";
import { createContext, useContext, useState } from "react";

interface StoreContextType {
  filterText: string;
  setFilterText: (text: string) => void;
  sizeText: string;
  setSizeText: (text: string) => void;
  colorText: string;
  setColorText: (text: string) => void;
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterText, setFilterText] = useState("");
  const [sizeText, setSizeText] = useState("");
  const [colorText, setColorText] = useState("");
  const [products, setProducts] = useState<ProductType[]>(ProductsArray);

  return (
    <StoreContext.Provider
      value={{
        filterText,
        setFilterText,
        sizeText,
        setSizeText,
        colorText,
        setColorText,
        products,
        setProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export default StoreProvider;
