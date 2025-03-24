"use client";

import React from "react";
import {
  ModernBookCover,
  BookHeader,
  BookTitle,
  BookDescription,
} from "@/components/custom/book";
import { Book } from "lucide-react";

function Catalogue() {
  const handleDownload = (catalogueName: string, pdfUrl: string) => {
    if (window.confirm(`Do you want to download the ${catalogueName} PDF?`)) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `${catalogueName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex items-center gap-6 md:gap-8 lg:gap-16">
      <div
        onClick={() =>
          handleDownload("AL Traders Catalogue", "/al_traders_catalogue.pdf")
        }
        className="flex-col items-center inline-flex"
      >
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
      </div>

      <div
        onClick={() =>
          handleDownload("Bulls Products Catalogue", "/bulls_catalogue.pdf")
        }
        className="flex-col items-center inline-flex"
      >
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
      </div>
    </div>
  );
}

export default Catalogue;
