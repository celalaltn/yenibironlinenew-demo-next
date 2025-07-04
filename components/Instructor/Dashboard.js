import React, { useState, useEffect } from "react";
import CounterWidget from "./Dashboard-Section/widgets/CounterWidget";
import MyCourses from "./Dashboard-Section/MyCourses";
import { instructorApi } from "../../services/api";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    totalCourses: 0,
    activeCourses: 0,
    completedCourses: 0,
    totalStudents: 0,
    totalEarnings: 0,
    totalReviews: 0,
    courses: []
  });
  
  const user = useSelector(state => state?.AuthReducer?.user || null);
  
  useEffect(() => {
    const fetchInstructorData = async () => {
      if (!user) return;
      
      setLoading(true);
      try {
        // API'den eğitmen verilerini çek
        const dashboardInfo = await instructorApi.getDashboardInfo().catch(() => ({}));
        const courses = await instructorApi.getCourses().catch(() => ({ courses: [] }));
        
        // Gerçek API yanıtı olmadığı için örnek veriler kullanıyoruz
        setDashboardData({
          totalCourses: courses.courses?.length || 30,
          activeCourses: 10,
          completedCourses: 7,
          totalStudents: 120,
          totalEarnings: 2500,
          totalReviews: 45,
          courses: courses.courses || []
        });
      } catch (err) {
        console.error("Eğitmen verilerini çekerken hata oluştu:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchInstructorData();
  }, [user]);
  
  return (
    <>
      <div className="rbt-dashboard-content  rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Eğitmen Paneli</h4>
            {loading && <div className="rbt-badge-2 ms-2">Yükleniyor...</div>}
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-primary-opacity"
                iconClass="bg-primary-opacity"
                numberClass="color-primary"
                icon="feather-book-open"
                title="Enrolled Courses"
                value={dashboardData.totalCourses}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-secondary-opacity"
                iconClass="bg-secondary-opacity"
                numberClass="color-secondary"
                icon="feather-monitor"
                title="ACTIVE COURSES"
                value={dashboardData.activeCourses}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-violet-opacity"
                iconClass="bg-violet-opacity"
                numberClass="color-violet"
                icon="feather-award"
                title="Completed Courses"
                value={dashboardData.completedCourses}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-pink-opacity"
                iconClass="bg-pink-opacity"
                numberClass="color-pink"
                icon="feather-users"
                title="Total Students"
                value={dashboardData.totalStudents}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-coral-opacity"
                iconClass="bg-coral-opacity"
                numberClass="color-coral"
                icon="feather-gift"
                title="Total Reviews"
                value={dashboardData.totalReviews}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-warning-opacity"
                iconClass="bg-warning-opacity"
                numberClass="color-warning"
                icon="feather-dollar-sign"
                title="Total Earnings"
                value={dashboardData.totalEarnings}
              />
            </div>
          </div>
        </div>
      </div>

      <MyCourses />
    </>
  );
};

export default Dashboard;
