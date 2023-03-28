import React, { useEffect, useState } from "react";
import "./App.css";
import {
  AboutUs,
  CaseStudies,
  Footer,
  GetInTouch,
  Hero,
  Loading,
  OurSkills,
  OurTeam,
  PrimaryBlock,
  ScrollToTop,
  Testimonial,
  WhatWeOffer,
  Works,
  WorkTogether,
} from "./components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {isLoading && <Loading />}
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

      <ScrollToTop showBtn={showBtn} />
    </div>
  );
};

export default App;
