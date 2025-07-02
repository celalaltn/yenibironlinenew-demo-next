import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { studentApi } from "../../services/api";

const StudentDashboardHeader = () => {
  const { user, isAuthenticated } = useSelector((state) => state.AuthReducer);
  const [studentStats, setStudentStats] = useState({
    enrolledCourses: 0,
    certificates: 0
  });
  
  useEffect(() => {
    const fetchStudentStats = async () => {
      if (!isAuthenticated) return;
      
      try {
        // API'den öğrenci istatistiklerini çek
        const dashboardInfo = await studentApi.getDashboardInfo();
        
        setStudentStats({
          enrolledCourses: dashboardInfo.enrolledCoursesCount || 0,
          certificates: dashboardInfo.certificatesCount || 0
        });
      } catch (err) {
        console.error("Öğrenci istatistiklerini çekerken hata oluştu:", err);
      }
    };
    
    fetchStudentStats();
  }, [isAuthenticated]);
  
  return (
    <>
      <div className="rbt-dashboard-content-wrapper">
        <div className="tutor-bg-photo bg_image bg_image--23 height-350" />
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg">
              <Image
                width={300}
                height={300}
                src={user?.profileImage || "/images/team/avatar-2.jpg"}
                alt="Öğrenci Profili"
              />
            </div>
            <div className="tutor-content">
              <h5 className="title">{user ? `${user.firstName} ${user.lastName}` : 'Öğrenci'}</h5>
              <ul className="rbt-meta rbt-meta-white mt--5">
                <li>
                  <i className="feather-book"></i>{studentStats.enrolledCourses} Kayıtlı Kurs
                </li>
                <li>
                  <i className="feather-award"></i>{studentStats.certificates} Sertifika
                </li>
              </ul>
            </div>
          </div>
          <div className="rbt-tutor-information-right">
            <div className="tutor-btn">
              <Link className="rbt-btn btn-md hover-icon-reverse" href="/course-filter-one">
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Kurs Katalogu</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboardHeader;
