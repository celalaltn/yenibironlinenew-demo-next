import React, { useState, useEffect } from "react";
import CounterWidget from "./Dashboard-Section/widgets/CounterWidget";
import MyCourses from "./Dashboard-Section/MyCourses";
import { instructorApi } from "../../services/api";
import { useSelector, useDispatch } from "react-redux";
import MyAccount from "../My-Account/MyAccount";
import AccountInfo from "../../data/myAccount.json";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
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
  const dispatch = useDispatch();
  
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
      <div className="rbt-tab-wrapper rbt-dashboard-tabs">
        <div className="rbt-nav-tabs mb--30">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === "dashboard" ? "active" : ""}`}
                onClick={() => setActiveTab("dashboard")}
              >
                <i className="feather-home"></i> Eğitmen Paneli
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === "account" ? "active" : ""}`}
                onClick={() => setActiveTab("account")}
              >
                <i className="feather-user"></i> Hesabım
              </button>
            </li>
          </ul>
        </div>
        
        <div className="tab-content">
          <div className={`tab-pane fade ${activeTab === "dashboard" ? "show active" : ""}`}>
            <div className="rbt-dashboard-content rbt-shadow-box mb--60">
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
                      title="Kayıtlı Kurslar"
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
                      title="Aktif Kurslar"
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
                      title="Tamamlanan Kurslar"
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
                      title="Toplam Öğrenci"
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
                      title="Toplam Değerlendirme"
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
                      title="Toplam Kazanç"
                      value={dashboardData.totalEarnings}
                    />
                  </div>
                </div>
              </div>
            </div>

            <MyCourses />
          </div>
          
          <div className={`tab-pane fade ${activeTab === "account" ? "show active" : ""}`}>
            <MyAccount account={AccountInfo} user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
