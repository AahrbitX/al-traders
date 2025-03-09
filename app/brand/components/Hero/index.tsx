import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeaderImages from "@/app/components/Hero/header-images";
import { TextAnimate } from "@/components/custom/text-animate";

function BrandHeroSection() {
  return (
    <div className="w-full container py-12">
      <div className="grid grid-rows-[max-content_max-content-max-content] md:grid-rows-[max-content_auto] md:grid-cols-[1fr_0.8fr] h-full py-5 md:gap-y-10">
        <div className="row-start-2 md:row-start-1 flex flex-col justify-center gap-4 lg:py-[80px] py-[60px]">
          <TextAnimate
            as="h1"
            startOnView={false}
            animation="blurInUp"
            className="text-4xl text-balance md:text-5xl lg:text-6xl font-semibold font-dmsans text-center md:text-left"
            highlightText={["Hard", "Bulls", "Brand"]}
          >
            Tools That Work as Hard as You Do - Bulls Brand Quality!
          </TextAnimate>
          <p className="text-muted-foreground text-balance text-center lg:text-left">
            We provide strong and long-lasting tools, accessories, and hardware
            for everyday tasks and professional use. Ideal for both home
            projects and industrial work.
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
          <HeaderImages img="bull" height={500} width={500} />
        </div>
      </div>
    </div>
  );
}

export default BrandHeroSection;
