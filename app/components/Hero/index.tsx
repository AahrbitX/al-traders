import React from "react";
import Illustrations from "./illustrations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderImages from "./header-images";

function HeroSection() {
  return (
    <header className="mt-20 first-section container">
      <div className="grid grid-rows-[max-content_max-content-max-content] md:grid-rows-[max-content_auto] md:grid-cols-[1fr_0.8fr] h-full py-5 md:gap-y-10">
        <div className="row-start-2 md:row-start-1 flex flex-col justify-center gap-4 lg:py-[100px] py-[60px]">
          <h1 className="text-4xl text-balance md:text-5xl lg:text-6xl font-semibold font-dmsans text-center md:text-left">
            Build your <span className="text-secondary">brand</span>, sell
            online all in <span className="text-secondary">one place</span>
          </h1>
          <p className="text-muted-foreground text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            nesciunt corporis accusantium doloribus labore assumenda a dolor cum
            reiciendis dolorem.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-5 mt-8">
            <Button asChild className="">
              <Link href="/about">About us</Link>
            </Button>
            <Button>
              <Link href="/brand">Bulls Brand</Link>
            </Button>
          </div>
        </div>
        <div className="row-start-1 flex items-center justify-center w-full h-full">
          <HeaderImages img="al" height={500} width={500} />
        </div>
        <div className="md:col-span-2 relative">
          <Illustrations />
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
