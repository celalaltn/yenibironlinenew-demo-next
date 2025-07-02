import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CounterWidget from "../Instructor/Dashboard-Section/widgets/CounterWidget";
import { studentApi } from "../../services/api";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    enrolledCourses: 0,
    activeCourses: 0,
    completedCourses: 0,
    recentCourses: [],
    upcomingLessons: []
  });
  const [error, setError] = useState(null);
  
  const { isAuthenticated, user } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!isAuthenticated) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        // API'den dashboard verilerini çek
        const dashboardInfo = await studentApi.getDashboardInfo();
        
        setDashboardData({
          enrolledCourses: dashboardInfo.enrolledCoursesCount || 0,
          activeCourses: dashboardInfo.activeCoursesCount || 0,
          completedCourses: dashboardInfo.completedCoursesCount || 0,
          recentCourses: dashboardInfo.recentCourses || [],
          upcomingLessons: dashboardInfo.upcomingLessons || []
        });
        
        setError(null);
      } catch (err) {
        console.error("Dashboard verilerini çekerken hata oluştu:", err);
        setError("Dashboard bilgileri yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        
        // Hata durumunda varsayılan değerlerle devam et
        setDashboardData({
          enrolledCourses: 0,
          activeCourses: 0,
          completedCourses: 0,
          recentCourses: [],
          upcomingLessons: []
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, [isAuthenticated]);

  return (
    <>
      <div className="rbt-dashboard-content rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title d-flex justify-content-between align-items-center">
            <h4 className="rbt-title-style-3">Dashboard</h4>
            {loading && <div className="rbt-badge-2 ms-2">Yükleniyor...</div>}
          </div>
          
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          
          <div className="row g-5">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                counterStyle="two"
                styleClass="bg-primary-opacity"
                iconClass="bg-primary-opacity"
                numberClass="color-primary"
                icon="feather-book-open"
                title="Kayıtlı Kurslar"
                value={dashboardData.enrolledCourses}
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
          </div>
          
          {dashboardData.recentCourses.length > 0 && (
            <div className="mt--30">
              <h5 className="rbt-title-style-3 mb--20">Son İzlenen Kurslar</h5>
              <div className="row g-5">
                {dashboardData.recentCourses.map((course, index) => (
                  <div key={index} className="col-lg-6 col-md-6 col-12">
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        {course.thumbnail && (
                          <a href={`/course-details/${course.id}`}>
                            <img src={course.thumbnail} alt={course.title} />
                          </a>
                        )}
                      </div>
                      <div className="rbt-card-body">
                        <h5 className="rbt-card-title">
                          <a href={`/course-details/${course.id}`}>{course.title}</a>
                        </h5>
                        <div className="rbt-card-bottom">
                          <div className="rbt-progress-bar">
                            <div className="rbt-progress-bar-inner" style={{ width: `${course.progress || 0}%` }}></div>
                          </div>
                          <div className="rbt-progress-percentage">{course.progress || 0}% Tamamlandı</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {dashboardData.upcomingLessons.length > 0 && (
            <div className="mt--30">
              <h5 className="rbt-title-style-3 mb--20">Yaklaşan Dersler</h5>
              <div className="rbt-dashboard-table table-responsive">
                <table className="rbt-table table table-borderless">
                  <thead>
                    <tr>
                      <th>Ders</th>
                      <th>Tarih</th>
                      <th>Saat</th>
                      <th>Durum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardData.upcomingLessons.map((lesson, index) => (
                      <tr key={index}>
                        <td>{lesson.title}</td>
                        <td>{new Date(lesson.date).toLocaleDateString('tr-TR')}</td>
                        <td>{lesson.time}</td>
                        <td>
                          <span className={`rbt-badge-5 ${lesson.status === 'scheduled' ? 'bg-primary-opacity' : 'bg-warning-opacity'}`}>
                            {lesson.status === 'scheduled' ? 'Planlandı' : 'Beklemede'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
