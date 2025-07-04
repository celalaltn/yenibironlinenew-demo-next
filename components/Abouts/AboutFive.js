"use client";

import Image from "next/image";
import Link from "next/link";

import aboutImg5 from "../../public/images/about/about-05.jpg";

const AboutFive = () => {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <div className="thumbnail">
          <Image
            src={aboutImg5}
            width={570}
            height={570}
            alt="About Images"
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="inner pl--50 pl_md--0 pl_sm--0">
          <div className="section-title text-start">
            <span className="subtitle bg-pink-opacity">Our Vision</span>
            <h2 className="title">
              Transforming Lives <br /> Through Education
            </h2>
          </div>
          <p className="description mt--30">
            We envision a world where quality education is accessible to everyone, regardless of their background or circumstances. Our platform is designed to break down barriers and create opportunities for lifelong learning.
          </p>

          <div className="rbt-feature-wrapper mt--40">
            <div className="rbt-feature feature-style-1">
              <div className="icon bg-primary-opacity">
                <i className="feather-shield"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Quality Assurance</h6>
                <p className="feature-description">
                  All our courses undergo rigorous quality checks to ensure the best learning experience.
                </p>
              </div>
            </div>
          </div>

          <div className="rbt-feature-wrapper mt--40">
            <div className="rbt-feature feature-style-1">
              <div className="icon bg-pink-opacity">
                <i className="feather-headphones"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Dedicated Support</h6>
                <p className="feature-description">
                  Our support team is available to help you with any questions or issues you may have.
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
                <span className="btn-text">Discover More</span>
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

export default AboutFive;
