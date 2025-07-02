"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
import FooterOne from "@/components/Footer/Footer-One";
import BackToTop from "@/app/backToTop";

const SiteLayout = ({ children }) => {
  return (
    <Provider store={Store}>
      <Context>
        <HeaderStyleNine />
        {children}
        <FooterOne />
        <BackToTop />
      </Context>
    </Provider>
  );
};

export default SiteLayout;
