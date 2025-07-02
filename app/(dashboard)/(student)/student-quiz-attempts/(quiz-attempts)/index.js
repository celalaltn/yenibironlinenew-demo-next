"use client";

import QuizAttempts from "@/components/Student/QuizAttempts";
import StudentDashboardHeader from "@/components/Student/StudentDashboardHeader";
import StudentDashboardSidebar from "@/components/Student/StudentDashboardSidebar";

const StudentQuiz = () => {
  return (
    <>
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
                  <QuizAttempts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentQuiz;
