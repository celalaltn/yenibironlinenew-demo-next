"use client";

import InstructorDashboardHeader from "@/components/Instructor/InstructorDashboardHeader";
import InstructorDashboardSidebar from "@/components/Instructor/InstructorDashboardSidebar";
import Profile from "@/components/Instructor/Profile";
import React from "react";

const InstructorProfile = () => {
  return (
    <>
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
                  <Profile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorProfile;
