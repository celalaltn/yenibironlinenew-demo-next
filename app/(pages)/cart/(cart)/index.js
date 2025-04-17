"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";


import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import BreadCrumb from "@/components/Common/BreadCrumb";
import CartPage from "@/components/Cart/CartPage";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const CartPageLayout = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
         
          <BreadCrumb title="Cart" text="Cart" />
          <div className="rbt-cart-area  rbt-section-gap">
            <CartPage />
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default CartPageLayout;
