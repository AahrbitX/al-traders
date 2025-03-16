export type ProductType = {
  id: string;
  name: string;
  prices: {
    currency: string;
    amount: number;
  }[];
  images: string;
  metaImages: string;
  description: string;
  metaDescriptions: string;
  isOwnProduct: boolean;
  category: string;
  inStock: boolean;
  variants: string[];
  sizes: string[];
};
