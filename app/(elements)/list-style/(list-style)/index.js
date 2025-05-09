"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import ListStyle from "@/components/ListStyle/List-Style";

const ListStylePage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="List Style" text="List Style" />

          <div className="rbt-list-style-area  rbt-section-gap">
            <ListStyle />
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default ListStylePage;
