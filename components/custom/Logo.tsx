import { getRoute } from "@/lib/getRoute";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

interface LogoProps {
  logoText?: string;
  className?: string;
}

const Logo: FC<LogoProps> = ({ logoText = "YourLogo", className }) => {
  return (
    <Link
      href={getRoute()}
      className={`text-2xl font-bold flex items-center gap-4 ${className}`}
    >
      <Image
        src={"/al-traders.png"}
        alt="Al Traders Image"
        width={50}
        height={50}
      />
      {logoText}
    </Link>
  );
};

export default Logo;
