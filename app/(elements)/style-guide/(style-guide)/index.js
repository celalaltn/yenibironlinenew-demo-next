"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import StyleGuide from "@/components/StyleGuide/StyleGuide";

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
