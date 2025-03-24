"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MoveUpRight } from "lucide-react";

function Illustrations() {
  return (
    <div className="w-full h-[1450px] md:h-[1200px] lg:h-[600px] grid grid-rows-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:grid-rows-4 lg:grid-rows-2 *:bg-slate-300 *:rounded-2xl gap-4 *:shrink-0">
      <DataBox
        title="Cutting Blade"
        link="/store?category=cutting-tools"
        id="grid-item-1"
        className="col-span-2 row-span-2 mx-8 order-1 md:col-span-1 md:mx-0 md:order-2 lg:order-3"
      >
        <Image
          src="/illustration/img-cutting-blade.png"
          alt="Image cutting Blade"
          fill
        />
      </DataBox>
      <DataBox
        title="Abrasive wheels"
        link="/store?category=abrasive-wheels"
        id="grid-item-3"
        className="order-2 md:order-1"
      >
        <Image
          src="/illustration/img-cutting-blade-2.png"
          alt="Image cutting Blade 2"
          fill
        />
      </DataBox>
      <DataBox
        title="Manholes"
        link=""
        id="grid-item-2"
        className="order-3 lg:order-2 lg:mt-8"
      >
        <Image src="/illustration/img-manhole.png" alt="Image Manhole" fill />
      </DataBox>
      <DataBox
        title="Adhesives"
        link="/store?category=adhesive-products"
        id="grid-item-4"
        className="order-4 overflow-hidden relative"
      >
        <Image
          src="/illustration/img-adhesives.png"
          alt="Image Hand Tools"
          className="object-cover"
          fill
        />
      </DataBox>
      <DataBox
        title="Fasterers"
        link="/store?category=fasteners"
        id="grid-item-5"
        className="order-5 overflow-hidden relative"
      >
        <Image src="/illustration/img-fasteners.png" alt="Image Screw" fill />
      </DataBox>
      <DataBox
        title="Hand Tools"
        link="/store?category=hand-tools"
        id="grid-item-6"
        className="col-span-2 mx-6 lg:mx-0  order-6 lg:order-7 lg:col-span-2 md:col-span-3  md:mx-52 lg:row-span-1"
      >
        <Image
          src="/illustration/img-hand-tools.png"
          alt="Image Hand Tools"
          fill
        />
      </DataBox>
      <DataBox
        title="Screws"
        link="/store?category=hand-tools"
        id="grid-item-7"
        className="col-span-2 mx-6 lg:mx-0 order-7 lg:order-8 lg:col-span-2 md:col-span-3 md:mx-52 lg:row-span-1"
      >
        <Image src="/illustration/img-screws.png" alt="Image Screws" fill />
      </DataBox>
    </div>
  );
}

const DataBox = ({
  title,
  link,
  id,
  className,
  children,
}: {
  title: string;
  link: string;
  id: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <motion.div
      id={id}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, margin: "100px 0px -120px 0px" }}
      variants={cardVariants}
      onClick={() => router.push(link)}
      className={cn(
        className,
        "relative group overflow-hidden border-2 border-primary cursor-pointer"
      )}
    >
      {children}

      {/* Overlay */}
      <div className="absolute w-full h-full flex flex-col justify-end group-hover:bg-black/60 p-5 transition-all duration-300 items-start">
        <p className="md:text-lg group-hover:translate-y-0 translate-y-9  duration-500 text-secondary font-semibold bg-white px-2 py-1 rounded-full text-xs">
          {title}
        </p>
        <p className="text-sm translate-y-9 group-hover:translate-y-0 flex duration-500 items-center gap-2 text-white px-2">
          Explore <MoveUpRight size={14} />
        </p>
      </div>
    </motion.div>
  );
};

const cardVariants: Variants = {
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeOut",
    },
  },
  offscreen: {
    y: 100,
    opacity: 0,
  },
};
export default Illustrations;
