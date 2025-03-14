import React from "react";
import {
  ModernBookCover,
  BookHeader,
  BookTitle,
  BookDescription,
} from "@/components/custom/book";
import { Book } from "lucide-react";

function Catalogue() {
  return (
    <>
      <ModernBookCover
        size="sm"
        color="red"
        isStatic
        className="scale-75 md:scale-90 lg:scale-100"
        cover={{ src: "/al-traders.png", alt: "Al-traders book cover image" }}
      >
        <BookHeader>
          <Book size={20} />
        </BookHeader>
        <BookTitle>AL Traders</BookTitle>
        <BookDescription>Our Products List</BookDescription>
      </ModernBookCover>
      <ModernBookCover
        size="sm"
        color="slate"
        isStatic
        className="scale-75 md:scale-90 lg:scale-100"
        cover={{ alt: "Bulls brand cover image", src: "/bulls.png" }}
      >
        <BookHeader>
          <Book size={20} />
        </BookHeader>
        <BookTitle>Bulls Brand</BookTitle>
        <BookDescription>Our Catalogues</BookDescription>
      </ModernBookCover>
    </>
  );
}

export default Catalogue;
