"use client";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import EnrolledCourses from "@/components/Instructor/Eenrolled-Course";
import InstructorDashboardHeader from "@/components/Instructor/InstructorDashboardHeader";
import InstructorDashboardSidebar from "@/components/Instructor/InstructorDashboardSidebar";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

const EnrolledCoursePage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
         
          <Cart />

          <div className="rbt-page-banner-wrapper">
            <div className="rbt-banner-image" />
          </div>
          <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <InstructorDashboardHeader />

                  <div className="row g-5">
                    <div className="col-lg-3">
                      <InstructorDashboardSidebar />
                    </div>

                    <div className="col-lg-9">
                      <EnrolledCourses />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </Context>
      </Provider>
    </>
  );
};

export default EnrolledCoursePage;
