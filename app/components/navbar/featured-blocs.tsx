import ModernBookCover, {
  BookDescription,
  BookHeader,
  BookTitle,
} from "@/components/custom/book";
import { Book } from "lucide-react";
import React from "react";

function GetCatalogueBlock() {
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
    <div
      onClick={() =>
        handleDownload("AL Traders Catalogue", "/al_traders_catalogue.pdf")
      }
      className="border p-2 border-zinc-600 rounded-md bg-slate-600 "
    >
      <div className="absolute -right-6 bottom-14">
        <ModernBookCover size="sm" isStatic color="red" className="scale-[0.4]">
          <BookHeader>
            <Book size={20} />
          </BookHeader>
          <BookTitle>AL Traders</BookTitle>
          <BookDescription>Our Products Catalogue</BookDescription>
        </ModernBookCover>
      </div>
      <p className="font-bold text-gray-200">Product Catalogue</p>
      <p className="text-xs text-gray-300 w-2/3">
        Browse through our extensive product catalogue, and find the perfect fit
        for your needs.
      </p>
    </div>
  );
}

export default GetCatalogueBlock;
