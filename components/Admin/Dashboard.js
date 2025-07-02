"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalInstructors: 0,
    totalStudents: 0,
    totalOrders: 0,
    totalRevenue: 0,
    loading: true
  });

  useEffect(() => {
    // Burada gerçek bir API çağrısı yapılabilir
    // Şimdilik örnek veriler kullanıyoruz
    setTimeout(() => {
      setStats({
        totalUsers: 1250,
        totalCourses: 85,
        totalInstructors: 24,
        totalStudents: 1180,
        totalOrders: 320,
        totalRevenue: 45000,
        loading: false
      });
    }, 1000);
  }, []);

  const CounterWidget = ({ title, value, icon, styleClass, iconClass, numberClass }) => {
    return (
      <div className={`rbt-counterup rbt-hover-03 border-bottom-gradient ${styleClass}`}>
        <div className="inner">
          <div className="rbt-round-icon ${iconClass}">
            <i className={icon}></i>
          </div>
          <div className="content">
            <h3 className={`counter ${numberClass}`}>
              {stats.loading ? (
                <span className="placeholder-wave">
                  <span className="placeholder col-6"></span>
                </span>
              ) : (
                <span>{value}</span>
              )}
            </h3>
            <span className="subtitle">{title}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="rbt-dashboard-content rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Yönetici Paneli</h4>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                styleClass="bg-primary-opacity"
                iconClass="bg-primary-opacity"
                numberClass="color-primary"
                icon="feather-users"
                title="Toplam Kullanıcı"
                value={stats.totalUsers}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                styleClass="bg-secondary-opacity"
                iconClass="bg-secondary-opacity"
                numberClass="color-secondary"
                icon="feather-book"
                title="Toplam Kurs"
                value={stats.totalCourses}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                styleClass="bg-violet-opacity"
                iconClass="bg-violet-opacity"
                numberClass="color-violet"
                icon="feather-user-check"
                title="Toplam Eğitmen"
                value={stats.totalInstructors}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                styleClass="bg-pink-opacity"
                iconClass="bg-pink-opacity"
                numberClass="color-pink"
                icon="feather-user"
                title="Toplam Öğrenci"
                value={stats.totalStudents}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                styleClass="bg-coral-opacity"
                iconClass="bg-coral-opacity"
                numberClass="color-coral"
                icon="feather-shopping-cart"
                title="Toplam Sipariş"
                value={stats.totalOrders}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <CounterWidget
                styleClass="bg-warning-opacity"
                iconClass="bg-warning-opacity"
                numberClass="color-warning"
                icon="feather-dollar-sign"
                title="Toplam Gelir"
                value={stats.totalRevenue}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-dashboard-content rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Son Aktiviteler</h4>
          </div>
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="rbt-dashboard-table table-responsive">
                <table className="rbt-table table table-borderless">
                  <thead>
                    <tr>
                      <th>Tarih</th>
                      <th>Kullanıcı</th>
                      <th>İşlem</th>
                      <th>Durum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.loading ? (
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
                        </tr>
                      ))
                    ) : (
                      <>
                        <tr>
                          <td>01.07.2025</td>
                          <td>Ahmet Yılmaz</td>
                          <td>Yeni kurs kaydı</td>
                          <td><span className="rbt-badge-5 bg-success">Tamamlandı</span></td>
                        </tr>
                        <tr>
                          <td>01.07.2025</td>
                          <td>Mehmet Demir</td>
                          <td>Ödeme</td>
                          <td><span className="rbt-badge-5 bg-success">Tamamlandı</span></td>
                        </tr>
                        <tr>
                          <td>30.06.2025</td>
                          <td>Ayşe Kaya</td>
                          <td>Yeni üyelik</td>
                          <td><span className="rbt-badge-5 bg-success">Tamamlandı</span></td>
                        </tr>
                        <tr>
                          <td>30.06.2025</td>
                          <td>Fatma Şahin</td>
                          <td>Kurs iptali</td>
                          <td><span className="rbt-badge-5 bg-danger">İptal</span></td>
                        </tr>
                        <tr>
                          <td>29.06.2025</td>
                          <td>Ali Yıldız</td>
                          <td>Destek talebi</td>
                          <td><span className="rbt-badge-5 bg-warning">Beklemede</span></td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
