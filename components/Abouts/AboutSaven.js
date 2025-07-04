"use client";

import Image from "next/image";
import Link from "next/link";

import aboutImg10 from "../../public/images/about/about-10.jpg";

const AboutSaven = () => {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <div className="thumbnail">
          <Image
            src={aboutImg10}
            width={570}
            height={570}
            alt="About Images"
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="inner pl--50 pl_md--0 pl_sm--0">
          <div className="section-title text-start">
            <span className="subtitle bg-primary-opacity">Our Community</span>
            <h2 className="title">
              Join Our Global <br /> Learning Community
            </h2>
          </div>
          <p className="description mt--30">
            When you join our platform, you become part of a global community of learners and educators. Connect with like-minded individuals, share knowledge, and grow together in a supportive environment.
          </p>

          <div className="rbt-feature-wrapper mt--40">
            <div className="rbt-feature feature-style-1">
              <div className="icon bg-primary-opacity">
                <i className="feather-users"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Collaborative Learning</h6>
                <p className="feature-description">
                  Engage with peers and instructors in collaborative learning experiences that enhance understanding.
                </p>
              </div>
            </div>
          </div>

          <div className="rbt-feature-wrapper mt--40">
            <div className="rbt-feature feature-style-1">
              <div className="icon bg-pink-opacity">
                <i className="feather-message-square"></i>
              </div>
              <div className="feature-content">
                <h6 className="feature-title">Discussion Forums</h6>
                <p className="feature-description">
                  Participate in active discussion forums where you can ask questions and share insights.
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
                <span className="btn-text">Join Community</span>
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

export default AboutSaven;
