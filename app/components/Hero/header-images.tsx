import Image from "next/image";
import React from "react";

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
    <div className="p-10 md:p-0">
      {img === "bull" ? (
        <Image
          src="/bulls.svg"
          alt="bulls image"
          height={height}
          width={width}
        />
      ) : (
        <Image
          src="/al-traders.svg"
          alt="bulls image"
          height={height}
          width={width}
        />
      )}
    </div>
  );
}

export default HeaderImages;
