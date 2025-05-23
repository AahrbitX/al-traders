import { getRoute } from "@/lib/getRoute";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterSection() {
  return (
    <footer className="bg-slate-800  pt-5 mt-10 relative overflow-hidden">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-20">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href={getRoute("/")} className="flex items-center gap-4 ">
              <Image
                src={
                  "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/medium_scale_enterprises/altraders/general/al-traders.png"
                }
                alt="Al Traders Image"
                width={50}
                height={50}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-primary">
                AL Traders
              </span>
            </Link>
            <p className="text-gray-400 text-sm mt-4 text-balance w-full max-w-md">
              Buy premium hand tools in Tamil Nadu from Kanniyakumari&apos;s
              most trusted retailer. Explore high-quality manual tools, machine
              tool accessories, and brass hardware at the best prices. Limited
              stock—Shop now!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-[0.8fr_0.6fr_0.6fr]">
            <div>
              <h2 className="mb-6 text-sm text-left  font-semibold uppercase text-primary dark:text-white">
                Useful Links
              </h2>
              <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href={getRoute("/")} className="hover:underline ">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={getRoute("/about")} className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={getRoute("/store")} className="hover:underline">
                    Store
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/sitemap.xml" className="hover:underline">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white  text-primary text-left">
                Categories
              </h2>
              <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href={getRoute("/store?category=hand-tools&page=1")}
                    className="hover:underline"
                  >
                    Hand Tools
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={getRoute("/store?category=hammers&page=1")}
                    className="hover:underline"
                  >
                    Hammers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={getRoute("/store?category=cutting-tools&page=1")}
                    className="hover:underline"
                  >
                    Cutting Tools
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={getRoute("/store?category=fasteners&page=1")}
                    className="hover:underline"
                  >
                    Fasteners
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-full md:col-span-1">
              <h2 className="mb-6 text-sm text-left  font-semibold uppercase text-primary dark:text-white">
                Branches
              </h2>
              <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <li className="mb-4">763, M.S. Road, Vadasery, Nagercoil-1</li>
                <li className="mb-4">661-Cape Road, Kottar, Nagercoil-2</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <Link href={getRoute()} className="hover:underline">
              AL Traders
            </Link>
            . All Rights Reserved.
          </span>
          <div className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
            Made by{" "}
            <a href="https://luretechsolutions.in" className="text-emerald-400">
              ♥ Lure Tech Solutions{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
