import React from "react";
import {
  ModernBookCover,
  BookHeader,
  BookTitle,
  BookDescription,
} from "@/components/custom/book";
import { Book } from "lucide-react";

function StoreHeroSection() {
  return (
    <div className="mb-10 container rounded-2xl min-h-[20rem] p-4">
      <h1 className="text-secondary text-center font-bold font-dmsans text-4xl">
        Welcome to AL Traders Store
      </h1>
      <div id="books" className="flex items-center justify-evenly w-full my-10">
        <ModernBookCover size="sm" color="red">
          <BookHeader>
            <Book size={20} />
          </BookHeader>
          <BookTitle>AL Traders</BookTitle>
          <BookDescription>Our Products List</BookDescription>
        </ModernBookCover>
        <ModernBookCover size="sm" color="zinc">
          <BookHeader>
            <Book size={20} />
          </BookHeader>
          <BookTitle>Bulls Brand</BookTitle>
          <BookDescription>Our Catalogs</BookDescription>
        </ModernBookCover>
      </div>
    </div>
  );
}

export default StoreHeroSection;
