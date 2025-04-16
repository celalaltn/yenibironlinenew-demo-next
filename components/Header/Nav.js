"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            className={`${activeMenuItem === "home" ? "open" : ""}`}
            onClick={() => toggleMenuItem("home")}
            href="/"
          >
            Ana Sayfa
          </Link>
       
        </li>

        <li className="with-megamenu has-menu-child-item">
          <Link
            className={`${activeMenuItem === "courses" ? "open" : ""}`}
            href="/courses"
            onClick={() => toggleMenuItem("courses")}
          >
            Kurslar
          </Link>

         
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={`${activeMenuItem === "dashboard" ? "open" : ""}`}
            href="/faqs"
            onClick={() => toggleMenuItem("dashboard")}
          >
            Sıkça Sorulan Sorular
          </Link>
       
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="/shop"
            className={`${activeMenuItem === "pages" ? "open" : ""}`}
            onClick={() => toggleMenuItem("pages")}
          >
            Mağaza
          </Link>
        
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="/events"
            className={`${activeMenuItem === "elements" ? "open" : ""}`}
            onClick={() => toggleMenuItem("elements")}
          >
            Etkinlikler
          </Link>
         
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="/blog"
            className={`${activeMenuItem === "blog" ? "open" : ""}`}
            onClick={() => toggleMenuItem("blog")}
          >
            Blog
          </Link>
         
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="/about-us"
            className={`${activeMenuItem === "blog" ? "open" : ""}`}
            onClick={() => toggleMenuItem("blog")}
          >
            Hakkımızda
          </Link>
          
        </li> <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="/contact"
            className={`${activeMenuItem === "blog" ? "open" : ""}`}
            onClick={() => toggleMenuItem("blog")}
          >
            İletişim
          </Link>
          
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
