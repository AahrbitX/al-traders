import Link from "next/link";
import React from "react";

function FooterSection() {
  return (
    <footer className="bg-slate-800  pt-5 mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-primary">
                AL Traders
              </span>
            </Link>
            <p className="text-gray-400 text-sm mt-4 text-balance max-w-lg">
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
                  <Link href="/" className="hover:underline ">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/brand" className="hover:underline">
                    Brand
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/store" className="hover:underline">
                    Store
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
                    href="/store?category=hand-tools&page=1"
                    className="hover:underline"
                  >
                    Hand Tools
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/store?category=hammers&page=1"
                    className="hover:underline"
                  >
                    Hammers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/store?category=cutting-tools&page=1"
                    className="hover:underline"
                  >
                    Cutting Tools
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/store?category=fasteners&page=1"
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
                <li className="mb-4">661-Cape Road, Kottar, Nagerkoil-2</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <Link href="/" className="hover:underline">
              AL Traders
            </Link>
            . All Rights Reserved.
          </span>
          <div className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
            Made by{" "}
            <span className="text-emerald-400">♥ Lure Tech Solutions </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
