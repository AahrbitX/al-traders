import { TextAnimate } from "@/components/custom/text-animate";
import Image from "next/image";
import React from "react";

function AboutHeader() {
  return (
    <section className="container relative grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 md:grid-cols-[0.5fr_1fr] max-w-7xl">
      <div>
        <TextAnimate
          as="h1"
          startOnView={false}
          animation="slideDown"
          highlightText={["&"]}
          className="text-5xl md:text-6xl lg:text-7xl font-bold font-dmsans [text-shadow:20px_12px_60px_#fff] max-w-[30rem] text-start sticky top-20 h-fit"
        >
          AL Traders &amp; Bulls Brand
        </TextAnimate>
      </div>
      <div className="flex flex-col lg:pt-0 pt-20 items-end justify-end max-w-[68rem]">
        <div className="lg:max-w-3xl ">
          <Image
            width={768}
            height={512}
            className="rounded-2xl"
            src="/discussion.webp"
            alt="company discussion"
          />
          <p className=" text-base text-justify xl:text-xl text-muted-foreground mt-6">
            Al Traders is a trusted supplier specializing in high-quality hand
            tools and accessories, carefully sourced from reputable
            manufacturers. With a strong focus on durability, accuracy, and
            performance, we cater to both professionals and DIY users who seek
            reliability in every task.
          </p>
          <p className=" text-base text-justify xl:text-xl text-muted-foreground mt-2">
            Beyond distribution, we add value through expert selection, ensuring
            our product range meets diverse industry standards. Whether
            it&apos;s manual tools, machine accessories, or general hardware,
            customers trust us for consistency, support, and lasting
            performance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;
