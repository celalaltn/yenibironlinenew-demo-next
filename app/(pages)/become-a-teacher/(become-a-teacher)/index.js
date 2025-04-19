"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";


import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import BreadCrumb from "@/components/Common/BreadCrumb";
import BecomeATeacher from "@/components/Become-a-Teacher/BecomeATeacher";
import TeacherGallery from "@/components/Become-a-Teacher/TeacherGallery";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const TeacherPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          
          <MobileMenu />
         
          <BreadCrumb title="Become a Teacher" text="Become a Teacher" />

          <div className="rbt-become-area  rbt-section-gap">
            <BecomeATeacher />
          </div>

          <div className="thumb-wrapper  rbt-section-gapBottom">
            <TeacherGallery />
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default TeacherPage;
