"use client";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

const NewsletterPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="Newsletter" text="Newsletter" />

          

          
        </Context>
      </Provider>
    </>
  );
};

export default NewsletterPage;
