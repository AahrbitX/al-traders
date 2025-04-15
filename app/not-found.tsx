import React from "react";
import HeaderImages from "./components/Hero/header-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getRoute } from "@/lib/getRoute";

function NotFoundPage() {
  return (
    <section className="container min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <HeaderImages img="al" height={304} width={386} />
        <div>
          <h1 className="text-5xl text-center text-pretty font-bold font-dmsans my-14 max-w-xl">
            The Page You are looking for is not found
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Button asChild>
              <Link href={getRoute("/")}>Go Home</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href={getRoute("/store")}>Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
