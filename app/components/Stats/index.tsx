import { NumberTicker } from "@/components/custom/number-ticker";
import React from "react";

function StatsSection() {
  const stats = [
    {
      data: 35,
      suffix: "K",
      title: "Customers",
    },
    {
      data: 100,
      suffix: "K+",
      title: "Sales",
    },
    {
      data: 300,
      suffix: "+",
      title: "Employees",
    },
    {
      data: 30,
      suffix: "+",
      title: "Partners",
    },
  ];

  return (
    <section className="test-section my-10">
      <h2 className="mb-2">Our Brand</h2>
      <div className="">
        <div className="max-w-screen-2xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Our Customers are Always Happy
            </h3>
            <p className="text-sm md:text-base mt-3">
              We are leading in tools sales services with our own products and
              re-selling business
            </p>
          </div>
          <div className="mt-4 md:mt-12">
            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x gap-4">
              {stats.map((item, idx) => (
                <li key={idx} className="text-center px-10 md:px-12">
                  <NumberTicker
                    value={item.data}
                    className="text-2xl md:text-4xl text-primary font-semibold"
                  />
                  <span className="text-2xl md:text-4xl text-primary font-semibold">
                    {item.suffix}
                  </span>
                  <p className="text-sm md:text-base mt-1 md:mt-3 font-medium">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
