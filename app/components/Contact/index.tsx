import Link from "next/link";
import React from "react";
import FibonacciLines from "@/components/custom/fibonacci-lines";
import { getRoute } from "@/lib/getRoute";

function ContactsSection() {
  return (
    <section id="contact" className="container my-16 relative">
      <div className="relative rounded-xl bg-amber-300 min-h-80 bg-opacity-20 flex flex-col items-center text-center py-12 px-6 overflow-hidden">
        {/* Fibonacci Lines Positioned Absolutely */}
        <FibonacciLines className="absolute justify-end inset-0 pointer-events-none" />

        {/* Content */}
        <h2 className="text-2xl md:text-3xl relative">Get in Touch with Us</h2>
        <p className="text-sm md:text-base text-gray-700 max-w-lg mt-3 relative">
          Have a question or need assistance? We&apos;re here to help! Reach out
          to us for business inquiries, support, or collaborations.
        </p>
        <Link
          className="mt-5 px-6 py-3 bg-primary text-black text-sm md:text-base rounded-lg font-medium inline-block relative"
          href={getRoute("/contact")}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default ContactsSection;
