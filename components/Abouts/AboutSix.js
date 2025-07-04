"use client";

import Image from "next/image";
import Link from "next/link";

import aboutImg6 from "../../public/images/about/about-06.jpg";

const AboutSix = ({ btnClass, btnText }) => {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6 order-2 order-lg-1">
        <div className="inner pr--50 pr_md--0 pr_sm--0">
          <div className="section-title text-start">
            <span className="subtitle bg-coral-opacity">Our Approach</span>
            <h2 className="title">
              Innovative Learning <br /> For Everyone
            </h2>
          </div>
          <p className="description mt--30">
            Our approach combines innovative teaching methods with cutting-edge technology to create engaging learning experiences. We focus on practical skills that help our students succeed in their careers and personal lives.
          </p>

          <div className="about-feature-list mt--40">
            <div className="row g-5">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="about-feature">
                  <div className="icon">
                    <i className="feather-video"></i>
                  </div>
                  <div className="content">
                    <h6 className="title">Video Lectures</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="about-feature">
                  <div className="icon">
                    <i className="feather-file-text"></i>
                  </div>
                  <div className="content">
                    <h6 className="title">Downloadable Resources</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="about-feature">
                  <div className="icon">
                    <i className="feather-message-circle"></i>
                  </div>
                  <div className="content">
                    <h6 className="title">Community Forums</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="about-feature">
                  <div className="icon">
                    <i className="feather-award"></i>
                  </div>
                  <div className="content">
                    <h6 className="title">Certificates</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-btn mt--40">
            <Link
              className={btnClass || "rbt-btn btn-gradient hover-icon-reverse"}
              href="#"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">{btnText || "Learn More"}</span>
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
          <Image
            src={aboutImg6}
            width={570}
            height={570}
            alt="About Images"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSix;
