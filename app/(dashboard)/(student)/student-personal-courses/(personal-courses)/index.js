"use client";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import MyCourses from "@/components/Student/MyCourses";
import StudentDashboardHeader from "@/components/Student/StudentDashboardHeader";
import StudentDashboardSidebar from "@/components/Student/StudentDashboardSidebar";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

const PersonalCoursesPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
         
         

          <div className="rbt-page-banner-wrapper">
            <div className="rbt-banner-image" />
          </div>
          <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <StudentDashboardHeader />

                  <div className="row g-5">
                    <div className="col-lg-3">
                      <StudentDashboardSidebar />
                    </div>

                    <div className="col-lg-9">
                      <MyCourses />
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

export default PersonalCoursesPage;
