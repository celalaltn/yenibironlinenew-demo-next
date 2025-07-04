import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/action/AuthAction";
import { useRouter } from "next/navigation";
import AccountForm from "./AccountForm";
import { studentApi } from "../../services/api";

const MyAccount = ({ account, user }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState({
    enrolledCourses: [],
    orders: [],
    events: [],
    tickets: []
  });
  
  useEffect(() => {
    const fetchStudentData = async () => {
      if (!user) return;
      
      setLoading(true);
      try {
        // API'den öğrenci verilerini çek
        const dashboardInfo = await studentApi.getDashboardInfo();
        const enrolledCourses = await studentApi.getEnrolledCourses();
        const orders = await studentApi.getOrders();
        
        setStudentData({
          enrolledCourses: enrolledCourses.courses || [],
          orders: orders.orders || [],
          events: dashboardInfo.events || [],
          tickets: dashboardInfo.tickets || []
        });
      } catch (err) {
        console.error("Öğrenci verilerini çekerken hata oluştu:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStudentData();
  }, [user]);
  
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    router.push('/');
  };
  
  return (
    <>
      <div className="tab-content" id="myaccountContent">
        <div
          className="tab-pane fade active show"
          id="dashboad"
          role="tabpanel"
        >
          {account && account.dashboard && account.dashboard.map ? account.dashboard.map((info, index) => (
            <div className="rbt-my-account-inner" key={index}>
              <h3>Dashboard</h3>
              
              {loading && <div className="rbt-badge-2 ms-2">Yükleniyor...</div>}

              <div className="about-address mb--20">
                <p>
                  Merhaba, <strong>{user?.firstName || info.name}</strong> (Değilseniz
                  <a href="#" onClick={handleLogout} className="logout ms-2">
                    Çıkış Yap
                  </a>
                  )
                </p>
              </div>

              <p>{info.desc}</p>
              
              <div className="row g-5 mt--20">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                    <div className="inner">
                      <div className="icon">
                        <i className="feather-book-open"></i>
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">{studentData.enrolledCourses.length}</span>
                        </h3>
                        <span className="subtitle">Kayıtlı Kurslar</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                    <div className="inner">
                      <div className="icon">
                        <i className="feather-calendar"></i>
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">{studentData.events.length}</span>
                        </h3>
                        <span className="subtitle">Etkinlikler</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                    <div className="inner">
                      <div className="icon">
                        <i className="feather-shopping-bag"></i>
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">{studentData.orders.length}</span>
                        </h3>
                        <span className="subtitle">Siparişler</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="rbt-my-account-inner">
              <h3>Dashboard</h3>
              <p>Hoş geldiniz! Hesap bilgileriniz yükleniyor...</p>
              
              <div className="row g-5 mt--20">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                    <div className="inner">
                      <div className="icon">
                        <i className="feather-book-open"></i>
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">{studentData.enrolledCourses.length}</span>
                        </h3>
                        <span className="subtitle">Kayıtlı Kurslar</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                    <div className="inner">
                      <div className="icon">
                        <i className="feather-calendar"></i>
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">{studentData.events.length}</span>
                        </h3>
                        <span className="subtitle">Etkinlikler</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                    <div className="inner">
                      <div className="icon">
                        <i className="feather-shopping-bag"></i>
                      </div>
                      <div className="content">
                        <h3 className="counter">
                          <span className="odometer">{studentData.orders.length}</span>
                        </h3>
                        <span className="subtitle">Siparişler</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="tab-pane fade" id="my-courses" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Kurslarım</h3>
            
            {loading ? (
              <div className="rbt-badge-2 ms-2">Yükleniyor...</div>
            ) : studentData.enrolledCourses.length > 0 ? (
              <div className="row g-5">
                {studentData.enrolledCourses.map((course, index) => (
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
                        <div className="rbt-card-bottom mt--20">
                          <a href={`/course-details/${course.id}`} className="rbt-btn btn-sm btn-border">Kursa Git</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Henüz kayıtlı kursunuz bulunmamaktadır.</p>
            )}
          </div>
        </div>

        <div className="tab-pane fade" id="orders" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Siparişlerim</h3>
            
            {loading ? (
              <div className="rbt-badge-2 ms-2">Yükleniyor...</div>
            ) : studentData.orders.length > 0 ? (
              <div className="rbt-my-account-table table-responsive text-center">
                <table className="table table-bordered">
                  <thead className="thead-light">
                    <tr>
                      <th>Sipariş No</th>
                      <th>Ürün</th>
                      <th>Tarih</th>
                      <th>Durum</th>
                      <th>Toplam</th>
                      <th>İşlem</th>
                    </tr>
                  </thead>

                  <tbody>
                    {studentData.orders.map((order, index) => (
                      <tr key={index}>
                        <td>{order.id}</td>
                        <td>{order.name}</td>
                        <td>{new Date(order.date).toLocaleDateString('tr-TR')}</td>
                        <td>
                          <span className={`rbt-badge-5 ${
                            order.status === 'completed' ? 'bg-success-opacity' : 
                            order.status === 'pending' ? 'bg-warning-opacity' : 
                            'bg-primary-opacity'
                          }`}>
                            {order.status === 'completed' ? 'Tamamlandı' : 
                             order.status === 'pending' ? 'Beklemede' : 
                             order.status === 'processing' ? 'İşleniyor' : 
                             order.status}
                          </span>
                        </td>
                        <td>{order.price} TL</td>
                        <td>
                          <Link className="rbt-btn btn-gradient btn-sm" href={`/order-details/${order.id}`}>
                            Detaylar
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>Henüz siparişiniz bulunmamaktadır.</p>
            )}
          </div>
        </div>
        
        <div className="tab-pane fade" id="my-events" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Etkinliklerim</h3>
            
            {loading ? (
              <div className="rbt-badge-2 ms-2">Yükleniyor...</div>
            ) : studentData.events.length > 0 ? (
              <div className="row g-5">
                {studentData.events.map((event, index) => (
                  <div key={index} className="col-lg-6 col-md-6 col-12">
                    <div className="rbt-card event-grid-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        {event.thumbnail && (
                          <a href={`/event-details/${event.id}`}>
                            <img src={event.thumbnail} alt={event.title} />
                          </a>
                        )}
                        <div className="rbt-badge-3 bg-white">
                          <span>{new Date(event.date).toLocaleDateString('tr-TR')}</span>
                        </div>
                      </div>
                      <div className="rbt-card-body">
                        <h5 className="rbt-card-title">
                          <a href={`/event-details/${event.id}`}>{event.title}</a>
                        </h5>
                        <div className="rbt-card-bottom">
                          <a href={`/event-details/${event.id}`} className="rbt-btn btn-border btn-sm">Detaylar</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Henüz kayıtlı olduğunuz etkinlik bulunmamaktadır.</p>
            )}
          </div>
        </div>
        
        <div className="tab-pane fade" id="my-tickets" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Biletlerim</h3>
            
            {loading ? (
              <div className="rbt-badge-2 ms-2">Yükleniyor...</div>
            ) : studentData.tickets.length > 0 ? (
              <div className="rbt-my-account-table table-responsive text-center">
                <table className="table table-bordered">
                  <thead className="thead-light">
                    <tr>
                      <th>Bilet No</th>
                      <th>Etkinlik</th>
                      <th>Tarih</th>
                      <th>Saat</th>
                      <th>Durum</th>
                      <th>İşlem</th>
                    </tr>
                  </thead>

                  <tbody>
                    {studentData.tickets.map((ticket, index) => (
                      <tr key={index}>
                        <td>{ticket.id}</td>
                        <td>{ticket.eventName}</td>
                        <td>{new Date(ticket.date).toLocaleDateString('tr-TR')}</td>
                        <td>{ticket.time}</td>
                        <td>
                          <span className={`rbt-badge-5 ${
                            ticket.status === 'active' ? 'bg-success-opacity' : 
                            ticket.status === 'expired' ? 'bg-danger-opacity' : 
                            'bg-primary-opacity'
                          }`}>
                            {ticket.status === 'active' ? 'Aktif' : 
                             ticket.status === 'expired' ? 'Süresi Doldu' : 
                             ticket.status === 'upcoming' ? 'Yaklaşan' : 
                             ticket.status}
                          </span>
                        </td>
                        <td>
                          <Link className="rbt-btn btn-gradient btn-sm" href={`/ticket-details/${ticket.id}`}>
                            Görüntüle
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>Henüz biletiniz bulunmamaktadır.</p>
            )}
          </div>
        </div>

        <div className="tab-pane fade" id="download" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Downloads</h3>

            <div className="rbt-my-account-table table-responsive text-center">
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Expire</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {account && account.downloads && account.downloads.map ? account.downloads.map((info, index) => (
                    <tr key={index}>
                      <td>{info.name}</td>
                      <td>{info.date}</td>
                      <td>{info.expire ? "Yes" : "Never"}</td>
                      <td>
                        <Link className="rbt-btn btn-gradient btn-sm" href="#">
                          Download File
                        </Link>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="4">İndirilebilir içerik bulunamadı.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="payment-method" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Payment Method</h3>

            <p className="rbt-saved-message">
              You Can&apos;t Saved Your Payment Method yet.
            </p>
          </div>
        </div>

        <div className="tab-pane fade" id="address-edit" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Billing Address</h3>

            <address>
              <p>
                <strong>Banani, Dhaka</strong>
              </p>
              <p>
                1205 Supper Market
                <br />
                Dhaka, Bangladesh
              </p>
              <p>Mobile: 01911111111</p>
            </address>

            <div className="rbt-link-hover">
              <Link href="#" className="d-inline-block">
                <i className="fa fa-edit mr--5"></i>Edit Address
              </Link>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="account-info" role="tabpanel">
          <div className="rbt-my-account-inner">
            <h3>Account Details</h3>
            <AccountForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
