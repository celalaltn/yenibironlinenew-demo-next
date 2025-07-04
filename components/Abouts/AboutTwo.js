"use client";

import Image from "next/image";
import Link from "next/link";

import AboutData from "../../data/elements/about.json";
import { useParallax } from "react-scroll-parallax";

import aboutImg1 from "../../public/images/about/about-01.jpg";
import aboutImg2 from "../../public/images/about/about-02.jpg";

const AboutTwo = () => {
  const { ref: ref1, style: style1 } = useParallax({
    translateY: [0, -20],
  });

  const { ref: ref2, style: style2 } = useParallax({
    translateY: [0, 20],
  });

  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6 order-2 order-lg-1">
        <div className="inner pr--50 pr_md--0 pr_sm--0">
          <div className="section-title text-start">
            <span className="subtitle bg-pink-opacity">About Us</span>
            <h2 className="title">
              We Provide The <br /> Best Online Education
            </h2>
          </div>
          <p className="description mt--30">
            Education is both the act of teaching knowledge to others and the act of receiving knowledge from someone else. Education also refers to the knowledge received through schooling or instruction and to the institution of teaching as a whole.
          </p>

          <div className="rbt-feature-wrapper mt--40">
            <div className="rbt-feature feature-style-1">
              <div className="icon bg-primary-opacity">
                <i className="feather-book"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Flexible Classes</h6>
                <p className="feature-description">
                  Learn at your own pace with our flexible online courses designed to fit your schedule.
                </p>
              </div>
            </div>
          </div>

          <div className="rbt-feature-wrapper mt--40">
            <div className="rbt-feature feature-style-1">
              <div className="icon bg-pink-opacity">
                <i className="feather-monitor"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Expert Instructors</h6>
                <p className="feature-description">
                  Learn from industry professionals with years of experience in their fields.
                </p>
              </div>
            </div>
          </div>

          <div className="about-btn mt--40">
            <Link
              className="rbt-btn btn-gradient hover-icon-reverse"
              href="#"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Know More</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2">
        <div className="thumbnail">
          <div className="image-group">
            <Image
              ref={ref1}
              style={style1}
              className="image-1"
              src={aboutImg1}
              width={370}
              height={470}
              alt="About Images"
            />
            <Image
              ref={ref2}
              style={style2}
              className="image-2"
              src={aboutImg2}
              width={370}
              height={270}
              alt="About Images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
