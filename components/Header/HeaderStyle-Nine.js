import HeaderTopMidThree from "./Header-Top/HeaderTopMid-Three";
import HeaderSeven from "./Headers/Header-Seven";
import DarkSwitch from "./dark-switch";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderStyleNine = () => {
  // Context hatası olduğu için isLightTheme ve toggleTheme kaldırıldı
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useSelector(state => state.AuthReducer || {});

  // Client-side rendering için hydration sorunu çözümü
  useEffect(() => {
    setMounted(true);
  }, []);

  


  return (
    <>
      {/* <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} /> */}
      <header className="rbt-header rbt-header-9">
        <div className="rbt-sticky-placeholder"></div>

        {/* <div className="rbt-header-middle position-relative bg-color-white rbt-header-mid-1  rbt-border-bottom">
          <HeaderTopMidThree flexDirection="" />
        </div> */}

        <HeaderSeven
          transparent="header-not-transparent header-sticky"
          gapSpaceBetween=""
          navigationEnd="rbt-navigation-end"
          btnClass="rbt-switch-btn btn-gradient btn-sm hover-transform-none"
       
          isAuthenticated={isAuthenticated}
          user={user}
        />
      </header>
    </>
  );
};

export default HeaderStyleNine;
