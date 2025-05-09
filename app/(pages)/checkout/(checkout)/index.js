"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";


import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Checkout from "@/components/Checkout/Checkout";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const CheckoutPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="Checkout" text="Checkout" />
          <div className="checkout_area  rbt-section-gap">
            <Checkout />
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default CheckoutPage;
