import { TextAnimate } from "@/components/custom/text-animate";
import Image from "next/image";
import React from "react";

function AboutHeader() {
  return (
    <section className="container relative">
      <TextAnimate
        as="h1"
        startOnView={false}
        animation="slideDown"
        className="absolute text-5xl md:text-6xl lg:text-7xl font-bold font-dmsans lg:top-6 lg:left-10 [text-shadow:20px_12px_60px_#fff] max-w-[30rem]"
      >
        AL Traders &amp; Bulls Brand
      </TextAnimate>
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
            Al Traders offers premium hand tools from China, built for
            durability, accuracy, and reliability. From manual tools to machine
            tool accessories and hardware, our products are designed to meet the
            needs of both professionals and home users, ensuring top performance
            in every task.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;
