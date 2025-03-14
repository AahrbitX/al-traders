"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function HeaderImages({
  img,
  height,
  width,
}: {
  img: "al" | "bull";
  height: number | `${number}` | undefined;
  width: number | `${number}` | undefined;
}) {
  return (
    <motion.div
      className="p-3 md:p-6 lg:p-10"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Image
        src={img === "bull" ? "/bulls.png" : "/al-traders.png"}
        alt="bulls image"
        height={height}
        width={width}
      />
    </motion.div>
  );
}

export default HeaderImages;
