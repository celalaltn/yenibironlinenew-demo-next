"use client";

import Image from "next/image";
import Link from "next/link";

import aboutImg3 from "../../public/images/about/about-03.jpg";

const AboutThree = () => {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <div className="thumbnail">
          <Image
            src={aboutImg3}
            width={570}
            height={570}
            alt="About Images"
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="inner pl--50 pl_md--0 pl_sm--0">
          <div className="section-title text-start">
            <span className="subtitle bg-coral-opacity">Why Choose Us</span>
            <h2 className="title">
              Learn & Grow Your <br /> Skills From Anywhere
            </h2>
          </div>
          <p className="description mt--30">
            Our online platform offers a wide range of courses taught by expert instructors. Learn at your own pace and advance your career with our flexible learning options.
          </p>

          <div className="rbt-feature-wrapper mt--30">
            <div className="rbt-feature feature-style-2">
              <div className="icon bg-primary-opacity">
                <i className="feather-check"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Expert Instructors</h6>
              </div>
            </div>
            <div className="rbt-feature feature-style-2">
              <div className="icon bg-primary-opacity">
                <i className="feather-check"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Quality Video Lectures</h6>
              </div>
            </div>
            <div className="rbt-feature feature-style-2">
              <div className="icon bg-primary-opacity">
                <i className="feather-check"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Lifetime Access</h6>
              </div>
            </div>
            <div className="rbt-feature feature-style-2">
              <div className="icon bg-primary-opacity">
                <i className="feather-check"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Flexible Learning</h6>
              </div>
            </div>
          </div>

          <div className="about-btn mt--40">
            <Link
              className="rbt-btn btn-gradient hover-icon-reverse"
              href="#"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Get Started Today</span>
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
    </div>
  );
};

export default AboutThree;
