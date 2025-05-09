"use client";

import Image from "next/image";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import img from "../../../../public/images/others/header.png";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const HeaderStylePage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="Header" text="Header" />

          <main className="main-wrapper">
            <div className="header-thumbnail">
              <Image className="w-100" src={img} alt="header" />
            </div>
          </main>

          
        </Context>
      </Provider>
    </>
  );
};

export default HeaderStylePage;
