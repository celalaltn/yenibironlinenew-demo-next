"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Financial = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("monthly");
  
  const [financialData, setFinancialData] = useState({
    overview: {
      totalRevenue: 0,
      totalExpenses: 0,
      netProfit: 0,
      pendingPayouts: 0
    },
    transactions: [],
    payouts: []
  });
  
  useEffect(() => {
    // Burada gerçek bir API çağrısı yapılabilir
    // Şimdilik örnek veriler kullanıyoruz
    setTimeout(() => {
      setFinancialData({
        overview: {
          totalRevenue: 45000,
          totalExpenses: 12500,
          netProfit: 32500,
          pendingPayouts: 8500
        },
        transactions: [
          { 
            id: "TRX-2025-001", 
            date: "2025-06-28", 
            description: "Kurs satışı: React ile Modern Web Geliştirme", 
            amount: 299, 
            type: "income",
            status: "completed"
          },
          { 
            id: "TRX-2025-002", 
            date: "2025-06-27", 
            description: "Kurs satışı: Python ile Veri Bilimi", 
            amount: 349, 
            type: "income",
            status: "completed"
          },
          { 
            id: "TRX-2025-003", 
            date: "2025-06-26", 
            description: "Eğitmen ödemesi: Ahmet Yılmaz", 
            amount: 1250, 
            type: "expense",
            status: "completed"
          },
          { 
            id: "TRX-2025-004", 
            date: "2025-06-25", 
            description: "Kurs satışı: JavaScript Temelleri", 
            amount: 199, 
            type: "income",
            status: "completed"
          },
          { 
            id: "TRX-2025-005", 
            date: "2025-06-24", 
            description: "Platform bakım maliyeti", 
            amount: 500, 
            type: "expense",
            status: "completed"
          },
          { 
            id: "TRX-2025-006", 
            date: "2025-06-23", 
            description: "Kurs satışı: Unity ile Oyun Geliştirme", 
            amount: 399, 
            type: "income",
            status: "pending"
          },
          { 
            id: "TRX-2025-007", 
            date: "2025-06-22", 
            description: "Kurs satışı: SQL ve Veritabanı Yönetimi", 
            amount: 249, 
            type: "income",
            status: "completed"
          },
        ],
        payouts: [
          {
            id: "PAY-2025-001",
            instructor: "Ahmet Yılmaz",
            date: "2025-06-26",
            amount: 1250,
            status: "completed"
          },
          {
            id: "PAY-2025-002",
            instructor: "Mehmet Demir",
            date: "2025-06-20",
            amount: 980,
            status: "completed"
          },
          {
            id: "PAY-2025-003",
            instructor: "Ayşe Kaya",
            date: "2025-06-15",
            amount: 750,
            status: "completed"
          },
          {
            id: "PAY-2025-004",
            instructor: "Fatma Şahin",
            date: "2025-07-05",
            amount: 1100,
            status: "pending"
          },
          {
            id: "PAY-2025-005",
            instructor: "Ali Yıldız",
            date: "2025-07-10",
            amount: 850,
            status: "pending"
          }
        ]
      });
      setLoading(false);
    }, 1000);
  }, [period]);
  
  // İşlem durumuna göre badge sınıfı
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case "completed":
        return "bg-success";
      case "pending":
        return "bg-warning";
      case "failed":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  // İşlem durumu Türkçe çevirisi
  const getStatusText = (status) => {
    switch(status) {
      case "completed":
        return "Tamamlandı";
      case "pending":
        return "Beklemede";
      case "failed":
        return "Başarısız";
      default:
        return status;
    }
  };
  
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title d-flex justify-content-between align-items-center">
            <h4 className="rbt-title-style-3">Finansal Yönetim</h4>
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
                      className={`nav-link ${activeTab === "overview" ? "active" : ""}`} 
                      onClick={() => setActiveTab("overview")}
                    >
                      <i className="feather-pie-chart"></i> Genel Bakış
                    </button>
                    <button 
                      className={`nav-link ${activeTab === "transactions" ? "active" : ""}`} 
                      onClick={() => setActiveTab("transactions")}
                    >
                      <i className="feather-credit-card"></i> İşlemler
                    </button>
                    <button 
                      className={`nav-link ${activeTab === "payouts" ? "active" : ""}`} 
                      onClick={() => setActiveTab("payouts")}
                    >
                      <i className="feather-dollar-sign"></i> Eğitmen Ödemeleri
                    </button>
                  </div>
                </nav>
              </div>
              
              <div className="tab-content">
                {/* Genel Bakış */}
                {activeTab === "overview" && (
                  <div className="tab-pane fade show active">
                    <div className="row g-5">
                      <div className="col-lg-3 col-md-6">
                        <div className="rbt-counterup rbt-hover-03 border-bottom-gradient bg-primary-opacity">
                          <div className="inner">
                            <div className="rbt-round-icon bg-primary-opacity">
                              <i className="feather-trending-up"></i>
                            </div>
                            <div className="content">
                              <h3 className="counter color-primary">
                                {loading ? (
                                  <span className="placeholder-wave">
                                    <span className="placeholder col-6"></span>
                                  </span>
                                ) : (
                                  <span>{financialData.overview.totalRevenue} ₺</span>
                                )}
                              </h3>
                              <span className="subtitle">Toplam Gelir</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-3 col-md-6">
                        <div className="rbt-counterup rbt-hover-03 border-bottom-gradient bg-secondary-opacity">
                          <div className="inner">
                            <div className="rbt-round-icon bg-secondary-opacity">
                              <i className="feather-trending-down"></i>
                            </div>
                            <div className="content">
                              <h3 className="counter color-secondary">
                                {loading ? (
                                  <span className="placeholder-wave">
                                    <span className="placeholder col-6"></span>
                                  </span>
                                ) : (
                                  <span>{financialData.overview.totalExpenses} ₺</span>
                                )}
                              </h3>
                              <span className="subtitle">Toplam Gider</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-3 col-md-6">
                        <div className="rbt-counterup rbt-hover-03 border-bottom-gradient bg-violet-opacity">
                          <div className="inner">
                            <div className="rbt-round-icon bg-violet-opacity">
                              <i className="feather-bar-chart-2"></i>
                            </div>
                            <div className="content">
                              <h3 className="counter color-violet">
                                {loading ? (
                                  <span className="placeholder-wave">
                                    <span className="placeholder col-6"></span>
                                  </span>
                                ) : (
                                  <span>{financialData.overview.netProfit} ₺</span>
                                )}
                              </h3>
                              <span className="subtitle">Net Kar</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-3 col-md-6">
                        <div className="rbt-counterup rbt-hover-03 border-bottom-gradient bg-pink-opacity">
                          <div className="inner">
                            <div className="rbt-round-icon bg-pink-opacity">
                              <i className="feather-clock"></i>
                            </div>
                            <div className="content">
                              <h3 className="counter color-pink">
                                {loading ? (
                                  <span className="placeholder-wave">
                                    <span className="placeholder col-6"></span>
                                  </span>
                                ) : (
                                  <span>{financialData.overview.pendingPayouts} ₺</span>
                                )}
                              </h3>
                              <span className="subtitle">Bekleyen Ödemeler</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row mt--40">
                      <div className="col-12">
                        <div className="section-title mb--20">
                          <h5>Son İşlemler</h5>
                        </div>
                        <div className="rbt-dashboard-table table-responsive">
                          <table className="rbt-table table table-borderless">
                            <thead>
                              <tr>
                                <th>İşlem No</th>
                                <th>Tarih</th>
                                <th>Açıklama</th>
                                <th>Tutar</th>
                                <th>Durum</th>
                              </tr>
                            </thead>
                            <tbody>
                              {loading ? (
                                Array(3).fill().map((_, index) => (
                                  <tr key={index}>
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
                                        <span className="placeholder col-8"></span>
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
                                  </tr>
                                ))
                              ) : (
                                financialData.transactions.slice(0, 5).map(transaction => (
                                  <tr key={transaction.id}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.description}</td>
                                    <td className={transaction.type === "income" ? "text-success" : "text-danger"}>
                                      {transaction.type === "income" ? "+" : "-"}{transaction.amount} ₺
                                    </td>
                                    <td>
                                      <span className={`rbt-badge-5 ${getStatusBadgeClass(transaction.status)}`}>
                                        {getStatusText(transaction.status)}
                                      </span>
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
                
                {/* İşlemler */}
                {activeTab === "transactions" && (
                  <div className="tab-pane fade show active">
                    <div className="row g-5">
                      <div className="col-12">
                        <div className="rbt-dashboard-table table-responsive">
                          <table className="rbt-table table table-borderless">
                            <thead>
                              <tr>
                                <th>İşlem No</th>
                                <th>Tarih</th>
                                <th>Açıklama</th>
                                <th>Tutar</th>
                                <th>Tür</th>
                                <th>Durum</th>
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
                                        <span className="placeholder col-6"></span>
                                      </span>
                                    </td>
                                    <td>
                                      <span className="placeholder-wave">
                                        <span className="placeholder col-8"></span>
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
                                  </tr>
                                ))
                              ) : (
                                financialData.transactions.map(transaction => (
                                  <tr key={transaction.id}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.description}</td>
                                    <td>{transaction.amount} ₺</td>
                                    <td>
                                      <span className={`rbt-badge-5 ${transaction.type === "income" ? "bg-success" : "bg-danger"}`}>
                                        {transaction.type === "income" ? "Gelir" : "Gider"}
                                      </span>
                                    </td>
                                    <td>
                                      <span className={`rbt-badge-5 ${getStatusBadgeClass(transaction.status)}`}>
                                        {getStatusText(transaction.status)}
                                      </span>
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                        
                        {!loading && financialData.transactions.length > 0 && (
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
                  </div>
                )}
                
                {/* Eğitmen Ödemeleri */}
                {activeTab === "payouts" && (
                  <div className="tab-pane fade show active">
                    <div className="row g-5">
                      <div className="col-12">
                        <div className="d-flex justify-content-end mb--20">
                          <button className="rbt-btn btn-sm btn-gradient">
                            <i className="feather-plus"></i> Yeni Ödeme
                          </button>
                        </div>
                        
                        <div className="rbt-dashboard-table table-responsive">
                          <table className="rbt-table table table-borderless">
                            <thead>
                              <tr>
                                <th>Ödeme No</th>
                                <th>Eğitmen</th>
                                <th>Tarih</th>
                                <th>Tutar</th>
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
                                financialData.payouts.map(payout => (
                                  <tr key={payout.id}>
                                    <td>{payout.id}</td>
                                    <td>{payout.instructor}</td>
                                    <td>{payout.date}</td>
                                    <td>{payout.amount} ₺</td>
                                    <td>
                                      <span className={`rbt-badge-5 ${getStatusBadgeClass(payout.status)}`}>
                                        {getStatusText(payout.status)}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="rbt-button-group">
                                        <button className="rbt-btn btn-xs btn-info" title="Detaylar">
                                          <i className="feather-eye"></i>
                                        </button>
                                        {payout.status === "pending" && (
                                          <>
                                            <button className="rbt-btn btn-xs btn-success" title="Onayla">
                                              <i className="feather-check"></i>
                                            </button>
                                            <button className="rbt-btn btn-xs btn-danger" title="İptal Et">
                                              <i className="feather-x"></i>
                                            </button>
                                          </>
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                        
                        {!loading && financialData.payouts.length > 0 && (
                          <div className="rbt-pagination mt--30">
                            <ul className="page-list">
                              <li><a href="#"><i className="feather-chevron-left"></i></a></li>
                              <li><a href="#" className="active">1</a></li>
                              <li><a href="#">2</a></li>
                              <li><a href="#"><i className="feather-chevron-right"></i></a></li>
                            </ul>
                          </div>
                        )}
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

export default Financial;
