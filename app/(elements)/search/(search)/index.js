"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Search from "@/components/Search/Search";
import SearchThree from "@/components/Search/Search-Three";
import SearchTwo from "@/components/Search/Search-Two";
import Cart from "@/components/Header/Offcanvas/Cart";

const SearchPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <BreadCrumb title="Search" text="Search" />
          <div className="rbt-elements-area  rbt-section-gap">
            <Search />
          </div>
          <div className="rbt-elements-area bg-color-extra2 rbt-section-gap">
            <SearchTwo />
          </div>
          <div className="rbt-elements-area bg-color-darker rbt-section-gap">
            <SearchThree />
          </div>
          <MobileMenu />
          
        </Context>
      </Provider>
    </>
  );
};

export default SearchPage;
