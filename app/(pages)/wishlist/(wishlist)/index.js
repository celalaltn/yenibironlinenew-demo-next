"use client";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import FooterOne from "@/components/Footer/Footer-One";
import Wishlist from "@/components/wishlist/Wishlist";

const WishlistPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <Cart />

          <Wishlist />

        
        </Context>
      </Provider>
    </>
  );
};

export default WishlistPage;
