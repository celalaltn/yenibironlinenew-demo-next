"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import logo from "../../../public/images/logo/logo.png";
import logoLight from "../../../public/images/dark/logo/logo-light.png";

import Nav from "../Nav";
import Category from "../Category/Category";
import { useAppContext } from "@/context/Context";
import HeaderTopMidThree from "../Header-Top/HeaderTopMid-Three";

const HeaderSeven = ({
  gapSpaceBetween,
  transparent,
  navigationEnd,
  btnClass,

  isAuthenticated = false,
  user = null,
  headerType,
}) => {
  const { mobile, setMobile, isLightTheme } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Kullanıcı menüsünü dışarıdan tıklandığında kapatmak için
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu && !event.target.closest('.user-dropdown')) {
        setShowUserMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);
  return (
    <>
      <div
        className={`rbt-header-wrapper ${gapSpaceBetween} ${transparent} ${
          isSticky ? "rbt-sticky" : ""
        }`}
        style={{
          position: isSticky ? "fixed" : "relative",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          width: "100%",
          transition: "all 0.3s ease",
          backgroundColor: "white",
          boxShadow: isSticky ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none"
        }}
      >
        {/* TopHeader - Sepet ve Hesap Menüsü */}
        <div className="top-header" style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
          <div className="container">
            <div className="d-flex justify-content-end align-items-center">
              <HeaderTopMidThree flexDirection="row-reverse" />
            </div>
          </div>
        </div>
        
        {/* Ana Header - Logo ve Navigasyon */}
        <div className="container">
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left rbt-header-content">
              <div className="header-info">
                <div className="logo">
                  <Link href="/">
                    {isLightTheme ? (
                      <Image
                        src={logo}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    ) : (
                      <Image
                        src={logoLight}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    )}
                  </Link>
                </div>
              </div>
            </div>

            <div className="rbt-main-navigation d-none d-xl-block">
              <Nav />
            </div>
            <div className="header-right">
              <div className="mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button
                    className="hamberger-button rbt-round-btn"
                    onClick={() => setMobile(!mobile)}
                  >
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSticky && <div style={{ height: "130px" }}></div>}
    </>
  );
};

export default HeaderSeven;
