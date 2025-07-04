"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import AdvanceTab from "@/components/AdvanceTab/AdvanceTab";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

// Advanced Tab Components
const AdvancetabTwo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2 className="title">Advanced Tab Style Two</h2>
            <p className="description mt--20">This is the second tab style variation</p>
          </div>
          <div className="advance-tab-content mt--40">
            <div className="tab-content">
              <div className="tab-pane fade show active">
                <div className="content-wrapper">
                  <p>Advanced Tab Two Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvanceTabThree = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2 className="title">Advanced Tab Style Three</h2>
            <p className="description mt--20">This is the third tab style variation</p>
          </div>
          <div className="advance-tab-content mt--40">
            <div className="tab-content">
              <div className="tab-pane fade show active">
                <div className="content-wrapper">
                  <p>Advanced Tab Three Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvanceTabFour = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2 className="title">Advanced Tab Style Four</h2>
            <p className="description mt--20">This is the fourth tab style variation</p>
          </div>
          <div className="advance-tab-content mt--40">
            <div className="tab-content">
              <div className="tab-pane fade show active">
                <div className="content-wrapper">
                  <p>Advanced Tab Four Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvanceTabFive = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2 className="title">Advanced Tab Style Five</h2>
            <p className="description mt--20">This is the fifth tab style variation</p>
          </div>
          <div className="advance-tab-content mt--40">
            <div className="tab-content">
              <div className="tab-pane fade show active">
                <div className="content-wrapper">
                  <p>Advanced Tab Five Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvanceTabPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="Advance Tab" text="Advance Tab" />

          <div className="rbt-advance-tab-area rbt-section-gap ">
            <AdvanceTab
              tag="YOU CAN CUSTOMIZE ALL"
              title="Advance Tab Style One."
            />
          </div>

          <div className="rbt-advance-tab-area rbt-section-gap bg-color-extra2">
            <AdvancetabTwo />
          </div>

          <div className="rbt-advance-tab-area rbt-section-gap ">
            <AdvanceTabThree />
          </div>

          <div className="rbt-advance-tab-area rbt-section-gap bg-color-extra2">
            <AdvanceTabFour />
          </div>

          <div className="rbt-tab-area  rbt-section-gap">
            <AdvanceTabFive />
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default AdvanceTabPage;
