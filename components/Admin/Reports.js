"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Reports = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  const [activeTab, setActiveTab] = useState("sales");
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("monthly");
  
  const [reportData, setReportData] = useState({
    sales: {
      total: 0,
      growth: 0,
      data: []
    },
    users: {
      total: 0,
      growth: 0,
      data: []
    },
    courses: {
      total: 0,
      growth: 0,
      data: []
    }
  });
  
  useEffect(() => {
    // Burada gerçek bir API çağrısı yapılabilir
    // Şimdilik örnek veriler kullanıyoruz
    setTimeout(() => {
      setReportData({
        sales: {
          total: 45000,
          growth: 12.5,
          data: [
            { label: "Ocak", value: 3200 },
            { label: "Şubat", value: 3800 },
            { label: "Mart", value: 4100 },
            { label: "Nisan", value: 3900 },
            { label: "Mayıs", value: 4500 },
            { label: "Haziran", value: 5200 },
            { label: "Temmuz", value: 5800 }
          ]
        },
        users: {
          total: 1250,
          growth: 8.3,
          data: [
            { label: "Ocak", value: 120 },
            { label: "Şubat", value: 145 },
            { label: "Mart", value: 165 },
            { label: "Nisan", value: 180 },
            { label: "Mayıs", value: 195 },
            { label: "Haziran", value: 210 },
            { label: "Temmuz", value: 235 }
          ]
        },
        courses: {
          total: 85,
          growth: 5.2,
          data: [
            { label: "Ocak", value: 8 },
            { label: "Şubat", value: 10 },
            { label: "Mart", value: 12 },
            { label: "Nisan", value: 14 },
            { label: "Mayıs", value: 15 },
            { label: "Haziran", value: 13 },
            { label: "Temmuz", value: 13 }
          ]
        }
      });
      setLoading(false);
    }, 1000);
  }, [period]);
  
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title d-flex justify-content-between align-items-center">
            <h4 className="rbt-title-style-3">Raporlar</h4>
            <div className="rbt-form-group mb-0">
              <select 
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="form-select"
              >
                <option value="weekly">Haftalık</option>
                <option value="monthly">Aylık</option>
                <option value="yearly">Yıllık</option>
              </select>
            </div>
          </div>
          
          <div className="rbt-dashboard-tab-content">
            <div className="rbt-dashboard-tab-content-inner">
              <div className="rbt-dashboard-tab-nav mb--30">
                <nav className="rbt-tab-nav-1">
                  <div className="nav" role="tablist">
                    <button 
                      className={`nav-link ${activeTab === "sales" ? "active" : ""}`} 
                      onClick={() => setActiveTab("sales")}
                    >
                      <i className="feather-dollar-sign"></i> Satış Raporları
                    </button>
                    <button 
                      className={`nav-link ${activeTab === "users" ? "active" : ""}`} 
                      onClick={() => setActiveTab("users")}
                    >
                      <i className="feather-users"></i> Kullanıcı Raporları
                    </button>
                    <button 
                      className={`nav-link ${activeTab === "courses" ? "active" : ""}`} 
                      onClick={() => setActiveTab("courses")}
                    >
                      <i className="feather-book"></i> Kurs Raporları
                    </button>
                  </div>
                </nav>
              </div>
              
              <div className="tab-content">
                {/* Satış Raporları */}
                {activeTab === "sales" && (
                  <div className="tab-pane fade show active">
                    <div className="row g-5">
                      <div className="col-lg-4 col-md-6">
                        <div className="rbt-counterup rbt-hover-03 border-bottom-gradient bg-primary-opacity">
                          <div className="inner">
                            <div className="rbt-round-icon bg-primary-opacity">
                              <i className="feather-dollar-sign"></i>
                            </div>
                            <div className="content">
                              <h3 className="counter color-primary">
                                {loading ? (
                                  <span className="placeholder-wave">
                                    <span className="placeholder col-6"></span>
                                  </span>
                                ) : (
                                  <span>{reportData.sales.total} ₺</span>
                                )}
                              </h3>
                              <span className="subtitle">Toplam Satış</span>
                              {!loading && (
                                <span className={`growth ${reportData.sales.growth >= 0 ? 'text-success' : 'text-danger'}`}>
                                  <i className={`feather-${reportData.sales.growth >= 0 ? 'trending-up' : 'trending-down'}`}></i>
                                  {reportData.sales.growth}%
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-8">
                        <div className="rbt-dashboard-table table-responsive">
                          <table className="rbt-table table table-borderless">
                            <thead>
                              <tr>
                                <th>Dönem</th>
                                <th>Satış Tutarı</th>
                                <th>Oran</th>
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
                                        <span className="placeholder col-6"></span>
                                      </span>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                reportData.sales.data.map((item, index) => (
                                  <tr key={index}>
                                    <td>{item.label}</td>
                                    <td>{item.value} ₺</td>
                                    <td>
                                      <div className="progress">
                                        <div 
                                          className="progress-bar bg-primary" 
                                          role="progressbar" 
                                          style={{width: `${(item.value / Math.max(...reportData.sales.data.map(d => d.value))) * 100}%`}} 
                                          aria-valuenow={(item.value / Math.max(...reportData.sales.data.map(d => d.value))) * 100} 
                                          aria-valuemin="0" 
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Kullanıcı Raporları */}
                {activeTab === "users" && (
                  <div className="tab-pane fade show active">
                    <div className="row g-5">
                      <div className="col-lg-4 col-md-6">
                        <div className="rbt-counterup rbt-hover-03 border-bottom-gradient bg-secondary-opacity">
                          <div className="inner">
                            <div className="rbt-round-icon bg-secondary-opacity">
                              <i className="feather-users"></i>
                            </div>
                            <div className="content">
                              <h3 className="counter color-secondary">
                                {loading ? (
                                  <span className="placeholder-wave">
                                    <span className="placeholder col-6"></span>
                                  </span>
                                ) : (
                                  <span>{reportData.users.total}</span>
                                )}
                              </h3>
                              <span className="subtitle">Toplam Kullanıcı</span>
                              {!loading && (
                                <span className={`growth ${reportData.users.growth >= 0 ? 'text-success' : 'text-danger'}`}>
                                  <i className={`feather-${reportData.users.growth >= 0 ? 'trending-up' : 'trending-down'}`}></i>
                                  {reportData.users.growth}%
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-8">
                        <div className="rbt-dashboard-table table-responsive">
                          <table className="rbt-table table table-borderless">
                            <thead>
                              <tr>
                                <th>Dönem</th>
                                <th>Yeni Kullanıcı</th>
                                <th>Oran</th>
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
                                        <span className="placeholder col-6"></span>
                                      </span>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                reportData.users.data.map((item, index) => (
                                  <tr key={index}>
                                    <td>{item.label}</td>
                                    <td>{item.value}</td>
                                    <td>
                                      <div className="progress">
                                        <div 
                                          className="progress-bar bg-secondary" 
                                          role="progressbar" 
                                          style={{width: `${(item.value / Math.max(...reportData.users.data.map(d => d.value))) * 100}%`}} 
                                          aria-valuenow={(item.value / Math.max(...reportData.users.data.map(d => d.value))) * 100} 
                                          aria-valuemin="0" 
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Kurs Raporları */}
                {activeTab === "courses" && (
                  <div className="tab-pane fade show active">
                    <div className="row g-5">
                      <div className="col-lg-4 col-md-6">
                        <div className="rbt-counterup rbt-hover-03 border-bottom-gradient bg-violet-opacity">
                          <div className="inner">
                            <div className="rbt-round-icon bg-violet-opacity">
                              <i className="feather-book"></i>
                            </div>
                            <div className="content">
                              <h3 className="counter color-violet">
                                {loading ? (
                                  <span className="placeholder-wave">
                                    <span className="placeholder col-6"></span>
                                  </span>
                                ) : (
                                  <span>{reportData.courses.total}</span>
                                )}
                              </h3>
                              <span className="subtitle">Toplam Kurs</span>
                              {!loading && (
                                <span className={`growth ${reportData.courses.growth >= 0 ? 'text-success' : 'text-danger'}`}>
                                  <i className={`feather-${reportData.courses.growth >= 0 ? 'trending-up' : 'trending-down'}`}></i>
                                  {reportData.courses.growth}%
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-8">
                        <div className="rbt-dashboard-table table-responsive">
                          <table className="rbt-table table table-borderless">
                            <thead>
                              <tr>
                                <th>Dönem</th>
                                <th>Yeni Kurs</th>
                                <th>Oran</th>
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
                                        <span className="placeholder col-6"></span>
                                      </span>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                reportData.courses.data.map((item, index) => (
                                  <tr key={index}>
                                    <td>{item.label}</td>
                                    <td>{item.value}</td>
                                    <td>
                                      <div className="progress">
                                        <div 
                                          className="progress-bar bg-violet" 
                                          role="progressbar" 
                                          style={{width: `${(item.value / Math.max(...reportData.courses.data.map(d => d.value))) * 100}%`}} 
                                          aria-valuenow={(item.value / Math.max(...reportData.courses.data.map(d => d.value))) * 100} 
                                          aria-valuemin="0" 
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
