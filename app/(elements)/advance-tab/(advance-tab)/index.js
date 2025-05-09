"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import AdvanceTab from "@/components/AdvanceTab/AdvanceTab";
import AdvanceTabFive from "@/components/AdvanceTab/AdvanceTab-Five";
import AdvanceTabFour from "@/components/AdvanceTab/AdvanceTab-Four";
import AdvanceTabThree from "@/components/AdvanceTab/AdvanceTab-Three";
import AdvancetabTwo from "@/components/AdvanceTab/AdvanceTab-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

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
