import React from "react";

import { companyName } from "./data";
import FormSection from "./components/FormSection";
import DetailsSection from "./components/DetailsSection";

function ContactPage() {
  return (
    <>
      <header className="my-6 md:my-12 lg:my-16 px-2">
        <h1 className="font-heading text-start text-3xl md:text-6xl md:text-center pt-8">
          Contact & Support
        </h1>
        <div className="flex items-center justify-center">
          <p className="text-sm lg:text-base text-start md:w-2/3 lg:w-1/2 text-pretty md:text-center text-muted-foreground mt-2">
            Have questions about pricing, plans, or {companyName}? Fill out the
            form and our friendly team can get back to you within 24 hours.
          </p>
        </div>
      </header>
      <main className="grid grid-rows-[auto-auto] gap-2 lg:grid-rows-1 lg:grid-cols-2 max-w-[76rem] mx-auto px-2">
        <FormSection />
        <DetailsSection />
      </main>
    </>
  );
}

export default ContactPage;
