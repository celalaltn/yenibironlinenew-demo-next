"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Social from "@/components/Socials/Social";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const SocialPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="Social Share" text="Social Share" />

          <Social
            classOne="rbt-social-area  rbt-section-gap"
            classList="social-icon social-default"
          />

          <Social
            classOne="rbt-social-area bg-color-extra2 rbt-section-gap"
            classList="social-icon social-default transparent-with-border"
          />

          <Social
            classOne="rbt-social-area  rbt-section-gap"
            classList="social-icon social-default with-gradient"
          />

          <Social
            classOne="rbt-social-area bg-color-extra2 rbt-section-gap"
            classList="social-icon social-default with-bg-primary"
          />

          <Social
            classOne="rbt-social-area  rbt-section-gap"
            classList="social-icon social-default icon-naked"
          />

          
        </Context>
      </Provider>
    </>
  );
};

export default SocialPage;
