"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Badge from "@/components/Badge/Badge";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

const BadgePage = () => {
  return (
    <>

      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="Welcome to Histudy Badge" text="Badge" />

          <div className="rbt-badge-area rbt-section-gap  position-relative">
            <Badge />
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default BadgePage;
