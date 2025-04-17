"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Categories from "@/components/Category/Categories";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
const CategoriesPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
         
          <BreadCrumb title="Categories" text="Categories" />

          <Categories />

          
        </Context>
      </Provider>
    </>
  );
};

export default CategoriesPage;
