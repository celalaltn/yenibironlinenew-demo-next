"use client";

import Store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Cart from "@/components/Header/Offcanvas/Cart";
import Context from "@/context/Context";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import AdmissionArea from "@/components/Admission-Guide/AdmissionArea";
import AdmissionContact from "@/components/Admission-Guide/AdmissionContact";

const AdmissionGuidePage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="Admission Guide" text="Admission Guide" />

          <div className="rbt-admission-area  rbt-section-gapTop">
            <div className="container">
              <AdmissionArea />
            </div>
          </div>

          <div className="rbt-conatct-area  pt--60 rbt-section-gapBottom">
            <div className="container">
              <AdmissionContact />
            </div>
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default AdmissionGuidePage;
