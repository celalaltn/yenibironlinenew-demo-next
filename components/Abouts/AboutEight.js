"use client";

import Image from "next/image";
import Link from "next/link";

import aboutImg11 from "../../public/images/about/about-11.jpg";

const AboutEight = () => {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6 order-2 order-lg-1">
        <div className="inner pr--50 pr_md--0 pr_sm--0">
          <div className="section-title text-start">
            <span className="subtitle bg-coral-opacity">Our Results</span>
            <h2 className="title">
              Success Stories <br /> From Our Students
            </h2>
          </div>
          <p className="description mt--30">
            Our students have gone on to achieve remarkable success in their careers and personal lives. Their stories inspire us to continue improving our platform and courses to help more learners reach their goals.
          </p>

          <div className="rbt-feature-wrapper mt--40">
            <div className="rbt-feature feature-style-1">
              <div className="icon bg-primary-opacity">
                <i className="feather-briefcase"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Career Advancement</h6>
                <p className="feature-description">
                  Many of our students have secured promotions or new job opportunities after completing our courses.
                </p>
              </div>
            </div>
          </div>

          <div className="rbt-feature-wrapper mt--40">
            <div className="rbt-feature feature-style-1">
              <div className="icon bg-pink-opacity">
                <i className="feather-star"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Personal Growth</h6>
                <p className="feature-description">
                  Our courses help students develop not just professional skills but also personal growth and confidence.
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
                <span className="btn-text">Read Success Stories</span>
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
            src={aboutImg11}
            width={570}
            height={570}
            alt="About Images"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutEight;
