"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
import FooterOne from "@/components/Footer/Footer-One";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/app/backToTop";

// Tüm dashboard sayfaları için ortak layout
export default function DashboardLayout({ children }) {
  return (
    <Provider store={Store}>
      <Context>
      
        {children}

      </Context>
    </Provider>
  );
}
