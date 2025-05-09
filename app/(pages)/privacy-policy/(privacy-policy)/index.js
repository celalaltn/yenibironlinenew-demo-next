"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Instagram from "@/components/Instagram/Instagram";
import PrivacyPolicy from "@/components/Privacy-Policy/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
       
         

          <PrivacyPolicy />
          <Instagram />

         
        </Context>
      </Provider>
    </>
  );
};

export default PrivacyPolicyPage;
