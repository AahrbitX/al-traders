import React from "react";
import AboutHeader from "./components/AboutHeader";
// import AboutTimeLine from "./components/AboutTimeLine";
import ContactsSection from "../components/Contact";

function AboutPage() {
  return (
    <div className="mt-24 min-h-screen">
      <AboutHeader />
      {/* <AboutTimeLine /> */}
      <ContactsSection />
    </div>
  );
}

export default AboutPage;
