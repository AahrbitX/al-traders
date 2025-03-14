import React from "react";
import ContactForm from "./form";

const Checkboxes = [
  { label: "Products", value: "products" },
  { label: "Services", value: "services" },
  { label: "Support", value: "support" },
  { label: "Pricing", value: "pricing" },
  { label: "Reviews", value: "reviews" },
  { label: "Careers", value: "careers" },
];

function FormSection() {
  return (
    <section className="bg-slate-100 px-2 md:px-4 lg:px-5 py-3 md:py-5 rounded-2xl min-h-55 order-2 lg:order-1">
      <h2 className="text-xl font-heading">Contact Our Sales Team</h2>
      <ContactForm checkboxes={Checkboxes} />
    </section>
  );
}

export default FormSection;
