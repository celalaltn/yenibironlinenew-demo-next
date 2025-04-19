"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BrandOne from "@/components/Brand/Brand-One";
import BrandThree from "@/components/Brand/Brand-Three";
import BrandTwo from "@/components/Brand/Brand-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

const BrandPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="Brand" text="Brand" />

          <div className="rbt-brand-area  rbt-section-gap">
            <div className="container">
              <BrandOne />
            </div>
          </div>

          <div className="rbt-brand-area bg-color-extra2 rbt-section-gap">
            <BrandTwo />
          </div>

          <div className="rbt-brand-area  rbt-section-gap">
            <BrandThree />
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default BrandPage;
