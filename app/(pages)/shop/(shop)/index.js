"use client";


import Separator from "@/components/Common/Separator";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Shop from "@/components/Shop/Shop";
import FooterOne from "@/components/Footer/Footer-One";

const ShopPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          

          <Shop />

         </Context>
      </Provider>
    </>
  );
};

export default ShopPage;
