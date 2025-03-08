import React from "react";
import AboutHeader from "./components/AboutHeader";
import AboutTimeLine from "./components/AboutTimeLine";

function AboutPage() {
  return (
    <div className="mt-24 min-h-screen">
      <AboutHeader />
      <AboutTimeLine />
    </div>
  );
}

export default AboutPage;
