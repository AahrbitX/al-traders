"use client";

import React, { memo, Suspense } from "react";
import ProductCard from "@/components/custom/product-card";
import { useStore } from "@/store/useStore";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PRODUCTS_PER_PAGE = 8;

function StoreProductsSection() {
  const { products } = useStore();
  const searchParams = useSearchParams();
  const router = useRouter();

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const page = Number(searchParams.get("page")) || 1;

  const paginatedProducts = products.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    router.push(`?page=${newPage}`);
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="container">
        <div className="flex flex-wrap gap-6 justify-center">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Component */}
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={`?page=${page - 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page - 1);
                  }}
                />
              </PaginationItem>

              {/* First Page */}
              {page > 2 && (
                <PaginationItem>
                  <PaginationLink
                    href="?page=1"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(1);
                    }}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
              )}

              {/* Ellipsis Before Current Page */}
              {page > 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Previous Page (if exists) */}
              {page > 1 && (
                <PaginationItem>
                  <PaginationLink
                    href={`?page=${page - 1}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page - 1);
                    }}
                  >
                    {page - 1}
                  </PaginationLink>
                </PaginationItem>
              )}

              {/* Current Page */}
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  {page}
                </PaginationLink>
              </PaginationItem>

              {/* Next Page (if exists) */}
              {page < totalPages && (
                <PaginationItem>
                  <PaginationLink
                    href={`?page=${page + 1}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page + 1);
                    }}
                  >
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              )}

              {/* Ellipsis After Current Page */}
              {page < totalPages - 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Last Page */}
              {page < totalPages - 1 && (
                <PaginationItem>
                  <PaginationLink
                    href={`?page=${totalPages}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(totalPages);
                    }}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  href={`?page=${page + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </Suspense>
  );
}

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-64">
    <p className="text-gray-500">Loading products...</p>
  </div>
);

export default memo(StoreProductsSection);
