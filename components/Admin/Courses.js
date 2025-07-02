"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Courses = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    // Burada gerçek bir API çağrısı yapılabilir
    // Şimdilik örnek veriler kullanıyoruz
    setTimeout(() => {
      const mockCourses = [
        { 
          id: 1, 
          title: "React ile Modern Web Geliştirme", 
          instructor: "Ahmet Yılmaz", 
          category: "Web Geliştirme", 
          price: 299, 
          students: 120, 
          rating: 4.8,
          status: "published"
        },
        { 
          id: 2, 
          title: "Python ile Veri Bilimi", 
          instructor: "Mehmet Demir", 
          category: "Veri Bilimi", 
          price: 349, 
          students: 85, 
          rating: 4.6,
          status: "published"
        },
        { 
          id: 3, 
          title: "Flutter ile Mobil Uygulama Geliştirme", 
          instructor: "Ayşe Kaya", 
          category: "Mobil Geliştirme", 
          price: 279, 
          students: 65, 
          rating: 4.5,
          status: "published"
        },
        { 
          id: 4, 
          title: "JavaScript Temelleri", 
          instructor: "Fatma Şahin", 
          category: "Web Geliştirme", 
          price: 199, 
          students: 210, 
          rating: 4.7,
          status: "published"
        },
        { 
          id: 5, 
          title: "Node.js ile Backend Geliştirme", 
          instructor: "Ali Yıldız", 
          category: "Web Geliştirme", 
          price: 329, 
          students: 75, 
          rating: 4.4,
          status: "draft"
        },
        { 
          id: 6, 
          title: "Unity ile Oyun Geliştirme", 
          instructor: "Zeynep Öztürk", 
          category: "Oyun Geliştirme", 
          price: 399, 
          students: 45, 
          rating: 4.3,
          status: "published"
        },
        { 
          id: 7, 
          title: "SQL ve Veritabanı Yönetimi", 
          instructor: "Mustafa Çelik", 
          category: "Veritabanı", 
          price: 249, 
          students: 95, 
          rating: 4.5,
          status: "draft"
        },
      ];
      setCourses(mockCourses);
      setLoading(false);
    }, 1000);
  }, []);

  // Kursları filtrele
  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Kategorileri al
  const categories = [...new Set(courses.map(course => course.category))];

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title d-flex justify-content-between align-items-center">
            <h4 className="rbt-title-style-3">Kurs Yönetimi</h4>
            <button className="rbt-btn btn-sm btn-gradient">
              <i className="feather-plus"></i> Yeni Kurs
            </button>
          </div>
          
          <div className="row g-4 mb--30">
            <div className="col-lg-6">
              <div className="rbt-form-group">
                <input 
                  type="text" 
                  placeholder="Kurs ara..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rbt-form-group">
                <select 
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">Tüm Kategoriler</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="rbt-dashboard-table table-responsive">
            <table className="rbt-table table table-borderless">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Kurs Adı</th>
                  <th>Eğitmen</th>
                  <th>Kategori</th>
                  <th>Fiyat</th>
                  <th>Öğrenci</th>
                  <th>Puan</th>
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
                          <span className="placeholder col-4"></span>
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
                          <span className="placeholder col-4"></span>
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
                  filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                      <tr key={course.id}>
                        <td>{course.id}</td>
                        <td>{course.title}</td>
                        <td>{course.instructor}</td>
                        <td>{course.category}</td>
                        <td>{course.price} ₺</td>
                        <td>{course.students}</td>
                        <td>
                          <div className="rating">
                            <i className="fas fa-star"></i> {course.rating}
                          </div>
                        </td>
                        <td>
                          <span className={`rbt-badge-5 ${course.status === 'published' ? 'bg-success' : 'bg-warning'}`}>
                            {course.status === 'published' ? 'Yayında' : 'Taslak'}
                          </span>
                        </td>
                        <td>
                          <div className="rbt-button-group">
                            <button className="rbt-btn btn-xs btn-primary" title="Düzenle">
                              <i className="feather-edit-2"></i>
                            </button>
                            <button className="rbt-btn btn-xs btn-info" title="Görüntüle">
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
                      <td colSpan="9" className="text-center">Kurs bulunamadı</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          
          {!loading && filteredCourses.length > 0 && (
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

export default Courses;
