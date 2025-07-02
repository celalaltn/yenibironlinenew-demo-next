"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const Events = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid veya list

  useEffect(() => {
    // Burada gerçek bir API çağrısı yapılabilir
    // Şimdilik örnek veriler kullanıyoruz
    setTimeout(() => {
      const mockEvents = [
        { 
          id: 1, 
          title: "React Geliştirici Buluşması", 
          description: "React ekosistemindeki son gelişmeleri konuşacağımız, deneyimli geliştiricilerle buluşacağımız etkinlik.",
          image: "/images/course/course-01.jpg", 
          date: "2025-07-15", 
          time: "14:00 - 17:00",
          location: "Online Zoom Webinar",
          organizer: "Ahmet Yılmaz",
          attendees: 120,
          status: "upcoming"
        },
        { 
          id: 2, 
          title: "Python ile Veri Bilimi Workshop", 
          description: "Python kullanarak veri analizi ve görselleştirme tekniklerini öğreneceğimiz uygulamalı workshop.",
          image: "/images/course/course-02.jpg", 
          date: "2025-07-20", 
          time: "10:00 - 16:00",
          location: "İstanbul Teknoloji Merkezi",
          organizer: "Mehmet Demir",
          attendees: 45,
          status: "upcoming"
        },
        { 
          id: 3, 
          title: "Mobil Uygulama Geliştirme Günleri", 
          description: "Flutter ve React Native ile mobil uygulama geliştirme süreçlerini ve best practice'leri konuşacağımız etkinlik.",
          image: "/images/course/course-03.jpg", 
          date: "2025-07-25", 
          time: "13:00 - 18:00",
          location: "Ankara Yazılım Vadisi",
          organizer: "Ayşe Kaya",
          attendees: 85,
          status: "upcoming"
        },
        { 
          id: 4, 
          title: "JavaScript Temelleri Eğitimi", 
          description: "JavaScript'in temel yapılarını, modern özellikleri ve framework'lere geçiş için gerekli bilgileri içeren eğitim.",
          image: "/images/course/course-04.jpg", 
          date: "2025-06-10", 
          time: "09:00 - 17:00",
          location: "Online Zoom Webinar",
          organizer: "Fatma Şahin",
          attendees: 210,
          status: "completed"
        },
        { 
          id: 5, 
          title: "Backend Geliştirme Konferansı", 
          description: "Node.js, Django, Laravel gibi popüler backend teknolojilerinin konuşulacağı, uzman konuşmacıların katılacağı konferans.",
          image: "/images/course/course-05.jpg", 
          date: "2025-06-05", 
          time: "10:00 - 18:00",
          location: "İzmir Dijital Kampüs",
          organizer: "Ali Yıldız",
          attendees: 150,
          status: "completed"
        },
        { 
          id: 6, 
          title: "Oyun Geliştirme Atölyesi", 
          description: "Unity ile 2D ve 3D oyun geliştirme tekniklerini öğreneceğimiz, uygulamalı projeler yapacağımız atölye çalışması.",
          image: "/images/course/course-06.jpg", 
          date: "2025-08-05", 
          time: "11:00 - 17:00",
          location: "İstanbul Game Studio",
          organizer: "Zeynep Öztürk",
          attendees: 60,
          status: "upcoming"
        },
        { 
          id: 7, 
          title: "Veritabanı Optimizasyon Semineri", 
          description: "SQL veritabanlarında performans optimizasyonu, indeksleme ve sorgu iyileştirme teknikleri hakkında seminer.",
          image: "/images/course/course-07.jpg", 
          date: "2025-05-20", 
          time: "14:00 - 16:00",
          location: "Online Zoom Webinar",
          organizer: "Mustafa Çelik",
          attendees: 95,
          status: "completed"
        },
      ];
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  // Etkinlikleri filtrele
  const filteredEvents = events.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || event.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Etkinlik durumuna göre badge sınıfı
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case "upcoming":
        return "bg-primary";
      case "completed":
        return "bg-success";
      case "cancelled":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  // Etkinlik durumu Türkçe çevirisi
  const getStatusText = (status) => {
    switch(status) {
      case "upcoming":
        return "Yaklaşan";
      case "completed":
        return "Tamamlandı";
      case "cancelled":
        return "İptal Edildi";
      default:
        return status;
    }
  };

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title d-flex justify-content-between align-items-center">
            <h4 className="rbt-title-style-3">Etkinlik Yönetimi</h4>
            <button className="rbt-btn btn-sm btn-gradient">
              <i className="feather-plus"></i> Yeni Etkinlik
            </button>
          </div>
          
          <div className="row g-4 mb--30">
            <div className="col-lg-4">
              <div className="rbt-form-group">
                <input 
                  type="text" 
                  placeholder="Etkinlik ara..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rbt-form-group">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">Tüm Durumlar</option>
                  <option value="upcoming">Yaklaşan</option>
                  <option value="completed">Tamamlandı</option>
                  <option value="cancelled">İptal Edildi</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rbt-form-group d-flex justify-content-end">
                <div className="view-mode-buttons">
                  <button 
                    className={`rbt-btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-border'}`} 
                    onClick={() => setViewMode('grid')}
                    title="Grid View"
                  >
                    <i className="feather-grid"></i>
                  </button>
                  <button 
                    className={`rbt-btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-border'}`} 
                    onClick={() => setViewMode('list')}
                    title="List View"
                    style={{marginLeft: "10px"}}
                  >
                    <i className="feather-list"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="row g-5">
              {loading ? (
                Array(6).fill().map((_, index) => (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <div className="placeholder-wave">
                          <div className="placeholder" style={{height: "200px"}}></div>
                        </div>
                      </div>
                      <div className="rbt-card-body">
                        <div className="placeholder-wave">
                          <div className="placeholder col-8 mb-3"></div>
                          <div className="placeholder col-12 mb-2"></div>
                          <div className="placeholder col-12 mb-2"></div>
                          <div className="placeholder col-6 mb-3"></div>
                          <div className="placeholder col-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                filteredEvents.length > 0 ? (
                  filteredEvents.map(event => (
                    <div className="col-lg-4 col-md-6 col-12" key={event.id}>
                      <div className="rbt-card variation-01 rbt-hover">
                        <div className="rbt-card-img">
                          <Image 
                            src={event.image} 
                            alt={event.title}
                            width={400}
                            height={200}
                            style={{objectFit: "cover", height: "200px", width: "100%"}}
                          />
                          <div className="rbt-badge-3 bg-white">
                            <span>{event.date}</span>
                          </div>
                        </div>
                        <div className="rbt-card-body">
                          <h5 className="rbt-card-title">
                            <a href="#">{event.title}</a>
                          </h5>
                          <p className="rbt-card-text">
                            {event.description.length > 100 ? event.description.substring(0, 100) + '...' : event.description}
                          </p>
                          <div className="rbt-card-bottom">
                            <div className="rbt-card-information">
                              <div className="event-information">
                                <i className="feather-map-pin"></i> {event.location}
                              </div>
                              <div className="event-information">
                                <i className="feather-clock"></i> {event.time}
                              </div>
                              <div className="event-information">
                                <i className="feather-user"></i> {event.attendees} Katılımcı
                              </div>
                            </div>
                            <div className="rbt-status-badge">
                              <span className={`rbt-badge-5 ${getStatusBadgeClass(event.status)}`}>
                                {getStatusText(event.status)}
                              </span>
                            </div>
                          </div>
                          <div className="rbt-card-actions mt-3">
                            <button className="rbt-btn btn-xs btn-primary" title="Düzenle">
                              <i className="feather-edit-2"></i> Düzenle
                            </button>
                            <button className="rbt-btn btn-xs btn-info ms-2" title="Detaylar">
                              <i className="feather-eye"></i> Detaylar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <div className="text-center py-5">
                      <h5>Etkinlik bulunamadı</h5>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
          
          {/* List View */}
          {viewMode === 'list' && (
            <div className="rbt-dashboard-table table-responsive">
              <table className="rbt-table table table-borderless">
                <thead>
                  <tr>
                    <th>Etkinlik Adı</th>
                    <th>Tarih & Saat</th>
                    <th>Konum</th>
                    <th>Organizatör</th>
                    <th>Katılımcı</th>
                    <th>Durum</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    Array(5).fill().map((_, index) => (
                      <tr key={index}>
                        <td>
                          <span className="placeholder-wave">
                            <span className="placeholder col-8"></span>
                          </span>
                        </td>
                        <td>
                          <span className="placeholder-wave">
                            <span className="placeholder col-8"></span>
                          </span>
                        </td>
                        <td>
                          <span className="placeholder-wave">
                            <span className="placeholder col-8"></span>
                          </span>
                        </td>
                        <td>
                          <span className="placeholder-wave">
                            <span className="placeholder col-6"></span>
                          </span>
                        </td>
                        <td>
                          <span className="placeholder-wave">
                            <span className="placeholder col-4"></span>
                          </span>
                        </td>
                        <td>
                          <span className="placeholder-wave">
                            <span className="placeholder col-6"></span>
                          </span>
                        </td>
                        <td>
                          <span className="placeholder-wave">
                            <span className="placeholder col-6"></span>
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    filteredEvents.length > 0 ? (
                      filteredEvents.map(event => (
                        <tr key={event.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="event-thumbnail me-3">
                                <Image 
                                  src={event.image} 
                                  alt={event.title}
                                  width={60}
                                  height={40}
                                  style={{objectFit: "cover", borderRadius: "4px"}}
                                />
                              </div>
                              <div>
                                <h6 className="mb-0">{event.title}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              <div><i className="feather-calendar"></i> {event.date}</div>
                              <div><i className="feather-clock"></i> {event.time}</div>
                            </div>
                          </td>
                          <td>{event.location}</td>
                          <td>{event.organizer}</td>
                          <td>{event.attendees}</td>
                          <td>
                            <span className={`rbt-badge-5 ${getStatusBadgeClass(event.status)}`}>
                              {getStatusText(event.status)}
                            </span>
                          </td>
                          <td>
                            <div className="rbt-button-group">
                              <button className="rbt-btn btn-xs btn-primary" title="Düzenle">
                                <i className="feather-edit-2"></i>
                              </button>
                              <button className="rbt-btn btn-xs btn-info" title="Detaylar">
                                <i className="feather-eye"></i>
                              </button>
                              <button className="rbt-btn btn-xs btn-danger" title="Sil">
                                <i className="feather-trash-2"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">Etkinlik bulunamadı</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
          
          {!loading && filteredEvents.length > 0 && (
            <div className="rbt-pagination mt--30">
              <ul className="page-list">
                <li><a href="#"><i className="feather-chevron-left"></i></a></li>
                <li><a href="#" className="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="feather-chevron-right"></i></a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
