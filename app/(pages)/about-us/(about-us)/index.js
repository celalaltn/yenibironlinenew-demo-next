"use client";

import Context from "@/context/Context";
import Link from "next/link";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";
import Store from "@/redux/store";

import Teacher from "@/components/About-Us-01/Teacher";
import About from "@/components/Abouts/About";

import SplitTwo from "@/components/Split/Split-Two";
import TestimonialSix from "@/components/Testimonials/Testimonial-Six";
import BreadCrumb from "@/components/Common/BreadCrumb";

const AboutUsPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
         

        <BreadCrumb title="About Us" text="About Us" />

          <div className="rbt-about-area about-style-1  rbt-section-gapTop">
            <ParallaxProvider>
              <About />
            </ParallaxProvider>
          </div>
          <div className="rbt-video-area rbt-section-gapBottom pt--50 ">
            <div className="container">
              <SplitTwo isImg={false} />
            </div>
          </div>
          <div className="rbt-testimonial-area  rbt-section-gapBottom overflow-hidden">
            <div className="container-fluid">
              <div className="row g-5 align-items-center">
                <div className="col-xl-3">
                  <div className="section-title pl--100 pl_md--30 pl_sm--0">
                    <span className="subtitle bg-pink-opacity">
                      Learners Feedback
                    </span>
                    <h2 className="title">What Our Learners Say</h2>
                    <p className="description mt--20">
                      Learning communicate to global world and build a bright
                      future with our histudy.
                    </p>
                    <div className="veiw-more-btn mt--20">
                      <Link
                        className="rbt-btn btn-gradient rbt-marquee-btn marquee-text-y"
                        href="#"
                      >
                        <span data-text="Marquee Y">Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <TestimonialSix />
              </div>
            </div>
          </div>
          <Teacher />
         

        </Context>
      </Provider>
    </>
  );
};

export default AboutUsPage;
