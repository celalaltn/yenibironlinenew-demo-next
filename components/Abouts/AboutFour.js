"use client";

import Image from "next/image";
import Link from "next/link";

import aboutImg4 from "../../public/images/about/about-04.jpg";

const AboutFour = () => {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6 order-2 order-lg-1">
        <div className="inner pr--50 pr_md--0 pr_sm--0">
          <div className="section-title text-start">
            <span className="subtitle bg-primary-opacity">Our Mission</span>
            <h2 className="title">
              Empowering Through <br /> Quality Education
            </h2>
          </div>
          <p className="description mt--30">
            We believe that education should be accessible to everyone. Our mission is to provide high-quality learning experiences that help students achieve their goals and transform their lives.
          </p>

          <div className="about-feature-list mt--40">
            <div className="row g-5">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="about-feature">
                  <div className="icon">
                    <i className="feather-award"></i>
                  </div>
                  <div className="content">
                    <h6 className="title">High Quality Courses</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="about-feature">
                  <div className="icon">
                    <i className="feather-users"></i>
                  </div>
                  <div className="content">
                    <h6 className="title">Expert Instructors</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="about-feature">
                  <div className="icon">
                    <i className="feather-globe"></i>
                  </div>
                  <div className="content">
                    <h6 className="title">Global Community</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="about-feature">
                  <div className="icon">
                    <i className="feather-clock"></i>
                  </div>
                  <div className="content">
                    <h6 className="title">Lifetime Access</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-btn mt--40">
            <Link
              className="rbt-btn btn-gradient hover-icon-reverse"
              href="#"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Learn More</span>
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
            src={aboutImg4}
            width={570}
            height={570}
            alt="About Images"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
