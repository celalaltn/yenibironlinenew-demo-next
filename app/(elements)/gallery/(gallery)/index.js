"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import Cart from "@/components/Header/Offcanvas/Cart";
import MobileMenu from "@/components/Header/MobileMenu";

import BreadCrumb from "@/components/Common/BreadCrumb";
import FooterOne from "@/components/Footer/Footer-One";
import Gallery from "@/components/Gallery/Gallery";


const GalleryPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="Gallery" text="Gallery" />

          <Gallery />

          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default GalleryPage;
