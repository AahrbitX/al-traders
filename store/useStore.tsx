"use client";

import { create } from "zustand";
import { products as ProductsArray } from "@/static/product";
import { ProductType } from "@/static/types/product";

interface StoreState {
  filterText: string;
  setFilterText: (text: string) => void;
  sizeText: string;
  setSizeText: (text: string) => void;
  colorText: string;
  setColorText: (text: string) => void;
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  filterText: "",
  setFilterText: (text) => set({ filterText: text }),
  sizeText: "",
  setSizeText: (text) => set({ sizeText: text }),
  colorText: "",
  setColorText: (text) => set({ colorText: text }),
  products: ProductsArray,
  setProducts: (products) => set({ products }),
}));
