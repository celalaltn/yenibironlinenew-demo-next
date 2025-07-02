"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import sal from "sal.js";

import About from "@/components/Abouts/About";
import BreadCrumb from "@/components/Common/BreadCrumb";

import MobileMenu from "@/components/Header/MobileMenu";

const AboutPage = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>

      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="About" text="About" />

          <div className="rbt-about-area about-style-1  rbt-section-gap">
            <ParallaxProvider>
              <About />
            </ParallaxProvider>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <ParallaxProvider>
                <AboutTwo />
              </ParallaxProvider>
            </div>
          </div>

          <div className="rbt-about-area about-style-1  rbt-section-gap">
            <div className="container">
              <AboutThree />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutFour />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutFive />
            </div>
          </div>

          <div className="rbt-about-area about-style-1  rbt-section-gap">
            <div className="container">
              <AboutSix
                btnClass="radius rbt-marquee-btn marquee-text-y"
                btnText="Learn More"
              />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutSaven />
            </div>
          </div>

          <div className="rbt-about-area about-style-1  rbt-section-gap">
            <div className="container">
              <AboutEight />
            </div>
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default AboutPage;
