import React from "react";
import Illustrations from "./illustrations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderImages from "./header-images";
import { TextAnimate } from "@/components/custom/text-animate";
import { getBrandRoute, getRoute } from "@/lib/getRoute";

function HeroSection() {
  return (
    <header className="mt-20 first-section container">
      <div className="grid grid-rows-[max-content_max-content] md:grid-rows-[max-content_auto] md:grid-cols-[1fr_0.7fr] h-full py-5 md:gap-y-10">
        <div className="row-start-2 md:row-start-1 flex flex-col justify-center gap-4 lg:py-[100px] md:py-[60px] py-[40px]">
          <TextAnimate
            animation="blurInUp"
            as="h1"
            startOnView={false}
            duration={0.9}
            highlightText={["Tools,", "Work", "Bulls", "Brand!"]}
            className="text-4xl text-balance md:text-5xl font-semibold font-dmsans text-center md:text-left"
          >
            Stronger Tools, Smarter Work - Elevate Your Craft with Bulls Brand!
          </TextAnimate>
          <p className="text-muted-foreground text-balance text-center md:text-left">
            We offer durable manual tools, machine tool accessories, and
            hardware designed for precision and reliability. Explore our
            collection for industrial and home use.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-5 mt-8">
            <Button asChild className="">
              <Link href={getRoute("/about")}>About us</Link>
            </Button>
            <Button>
              <Link href={getBrandRoute()}>Bulls Brand</Link>
            </Button>
          </div>
        </div>
        <div className="row-start-1 flex items-center justify-center w-full h-full">
          <HeaderImages img="al" height={304} width={386} />
        </div>
        <div className="md:col-span-2 relative">
          <Illustrations />
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
