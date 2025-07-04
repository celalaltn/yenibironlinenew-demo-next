"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

// Style Guide Component
const StyleGuide = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2 className="title">Style Guide</h2>
            <p className="description mt--20">This is a style guide page with design elements</p>
          </div>
          
          {/* Typography */}
          <div className="rbt-style-guide-section">
            <h3 className="mb--20">Typography</h3>
            <div className="row">
              <div className="col-lg-6">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
              </div>
              <div className="col-lg-6">
                <p className="b1">Body Text 1</p>
                <p className="b2">Body Text 2</p>
                <p className="b3">Body Text 3</p>
                <p><strong>Bold Text</strong></p>
                <p><em>Italic Text</em></p>
              </div>
            </div>
          </div>
          
          {/* Colors */}
          <div className="rbt-style-guide-section mt--50">
            <h3 className="mb--20">Colors</h3>
            <div className="row g-5">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="color-box" style={{ backgroundColor: "var(--color-primary)", height: "100px" }}></div>
                <p className="mt--10">Primary</p>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="color-box" style={{ backgroundColor: "var(--color-secondary)", height: "100px" }}></div>
                <p className="mt--10">Secondary</p>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="color-box" style={{ backgroundColor: "#000000", height: "100px" }}></div>
                <p className="mt--10">Black</p>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="color-box" style={{ backgroundColor: "#ffffff", border: "1px solid #ddd", height: "100px" }}></div>
                <p className="mt--10">White</p>
              </div>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="rbt-style-guide-section mt--50">
            <h3 className="mb--20">Buttons</h3>
            <div className="button-group">
              <button className="rbt-btn btn-primary mr--15 mb--15">Primary Button</button>
              <button className="rbt-btn btn-secondary mr--15 mb--15">Secondary Button</button>
              <button className="rbt-btn btn-border mr--15 mb--15">Border Button</button>
              <button className="rbt-btn btn-white mr--15 mb--15">White Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyleGuidePage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
         
          <BreadCrumb title="Style Guide" text="Style Guide" />

          <div className="rbt-style-guide-area rbt-section-gap">
            <StyleGuide />
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default StyleGuidePage;
