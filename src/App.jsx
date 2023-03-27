import React from "react";
import "./App.css";
import {
  AboutUs,
  CaseStudies,
  Footer,
  GetInTouch,
  Hero,
  OurSkills,
  OurTeam,
  PrimaryBlock,
  Testimonial,
  WhatWeOffer,
  Works,
  WorkTogether,
} from "./components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Works />
      <AboutUs />
      <WorkTogether />
      <WhatWeOffer />
      <OurSkills />
      <CaseStudies />
      <Testimonial />
      <GetInTouch />
      <OurTeam />
      <PrimaryBlock />
      <Footer />
    </div>
  );
};

export default App;
