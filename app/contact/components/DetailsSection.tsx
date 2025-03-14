import React from "react";
import { ContactInfo } from "../data";
import ContactCard from "./contactCard";

function DetailsSection() {
  return (
    <section className="order-1 lg:order-2 px-2 md:px-4 lg:px-5 py-3">
      {ContactInfo.map((info, idx) => (
        <ContactCard key={`contact-info-${idx}`} {...info} />
      ))}
    </section>
  );
}

export default DetailsSection;
