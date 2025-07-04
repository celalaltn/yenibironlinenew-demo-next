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

          <div className="rbt-about-area about-style-1 rbt-section-gap">
            <ParallaxProvider>
              <About />
            </ParallaxProvider>
          </div>

          {/* Additional about sections have been temporarily removed 
             because the components don't exist in the project yet */}

          
        </Context>
      </Provider>
    </>
  );
};

export default AboutPage;
