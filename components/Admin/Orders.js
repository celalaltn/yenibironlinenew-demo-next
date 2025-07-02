"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    // Burada gerçek bir API çağrısı yapılabilir
    // Şimdilik örnek veriler kullanıyoruz
    setTimeout(() => {
      const mockOrders = [
        { 
          id: "ORD-2025-001", 
          user: "Ahmet Yılmaz", 
          email: "ahmet@example.com", 
          date: "2025-06-28", 
          amount: 299, 
          status: "completed",
          items: [
            { id: 1, name: "React ile Modern Web Geliştirme", price: 299 }
          ]
        },
        { 
          id: "ORD-2025-002", 
          user: "Mehmet Demir", 
          email: "mehmet@example.com", 
          date: "2025-06-27", 
          amount: 349, 
          status: "completed",
          items: [
            { id: 2, name: "Python ile Veri Bilimi", price: 349 }
          ]
        },
        { 
          id: "ORD-2025-003", 
          user: "Ayşe Kaya", 
          email: "ayse@example.com", 
          date: "2025-06-26", 
          amount: 279, 
          status: "processing",
          items: [
            { id: 3, name: "Flutter ile Mobil Uygulama Geliştirme", price: 279 }
          ]
        },
        { 
          id: "ORD-2025-004", 
          user: "Fatma Şahin", 
          email: "fatma@example.com", 
          date: "2025-06-25", 
          amount: 199, 
          status: "completed",
          items: [
            { id: 4, name: "JavaScript Temelleri", price: 199 }
          ]
        },
        { 
          id: "ORD-2025-005", 
          user: "Ali Yıldız", 
          email: "ali@example.com", 
          date: "2025-06-24", 
          amount: 329, 
          status: "cancelled",
          items: [
            { id: 5, name: "Node.js ile Backend Geliştirme", price: 329 }
          ]
        },
        { 
          id: "ORD-2025-006", 
          user: "Zeynep Öztürk", 
          email: "zeynep@example.com", 
          date: "2025-06-23", 
          amount: 399, 
          status: "pending",
          items: [
            { id: 6, name: "Unity ile Oyun Geliştirme", price: 399 }
          ]
        },
        { 
          id: "ORD-2025-007", 
          user: "Mustafa Çelik", 
          email: "mustafa@example.com", 
          date: "2025-06-22", 
          amount: 498, 
          status: "completed",
          items: [
            { id: 4, name: "JavaScript Temelleri", price: 199 },
            { id: 7, name: "SQL ve Veritabanı Yönetimi", price: 299 }
          ]
        },
      ];
      setOrders(mockOrders);
      setLoading(false);
    }, 1000);
  }, []);

  // Siparişleri filtrele
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Sipariş durumuna göre badge sınıfı
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case "completed":
        return "bg-success";
      case "processing":
        return "bg-primary";
      case "pending":
        return "bg-warning";
      case "cancelled":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  // Sipariş durumu Türkçe çevirisi
  const getStatusText = (status) => {
    switch(status) {
      case "completed":
        return "Tamamlandı";
      case "processing":
        return "İşleniyor";
      case "pending":
        return "Beklemede";
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
            <h4 className="rbt-title-style-3">Sipariş Yönetimi</h4>
          </div>
          
          <div className="row g-4 mb--30">
            <div className="col-lg-6">
              <div className="rbt-form-group">
                <input 
                  type="text" 
                  placeholder="Sipariş ara..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rbt-form-group">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">Tüm Durumlar</option>
                  <option value="completed">Tamamlandı</option>
                  <option value="processing">İşleniyor</option>
                  <option value="pending">Beklemede</option>
                  <option value="cancelled">İptal Edildi</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="rbt-dashboard-table table-responsive">
            <table className="rbt-table table table-borderless">
              <thead>
                <tr>
                  <th>Sipariş No</th>
                  <th>Müşteri</th>
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
                  filteredOrders.length > 0 ? (
                    filteredOrders.map(order => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>
                          <div>
                            <strong>{order.user}</strong>
                          </div>
                          <div className="small text-muted">{order.email}</div>
                        </td>
                        <td>{order.date}</td>
                        <td>{order.amount} ₺</td>
                        <td>
                          <span className={`rbt-badge-5 ${getStatusBadgeClass(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </td>
                        <td>
                          <div className="rbt-button-group">
                            <button className="rbt-btn btn-xs btn-info" title="Detaylar" data-bs-toggle="modal" data-bs-target={`#orderModal-${order.id}`}>
                              <i className="feather-eye"></i>
                            </button>
                            <button className="rbt-btn btn-xs btn-primary" title="Düzenle">
                              <i className="feather-edit-2"></i>
                            </button>
                            <button className="rbt-btn btn-xs btn-danger" title="İptal Et">
                              <i className="feather-x"></i>
                            </button>
                          </div>
                          
                          {/* Sipariş Detay Modal */}
                          <div className="modal fade" id={`orderModal-${order.id}`} tabIndex="-1" aria-labelledby={`orderModalLabel-${order.id}`} aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id={`orderModalLabel-${order.id}`}>Sipariş Detayı - {order.id}</h5>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                  <div className="order-details">
                                    <div className="row mb-3">
                                      <div className="col-6">
                                        <strong>Müşteri:</strong> {order.user}
                                      </div>
                                      <div className="col-6">
                                        <strong>E-posta:</strong> {order.email}
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <div className="col-6">
                                        <strong>Tarih:</strong> {order.date}
                                      </div>
                                      <div className="col-6">
                                        <strong>Durum:</strong> <span className={`rbt-badge-5 ${getStatusBadgeClass(order.status)}`}>{getStatusText(order.status)}</span>
                                      </div>
                                    </div>
                                    <hr />
                                    <h6>Sipariş Öğeleri</h6>
                                    <table className="table table-sm">
                                      <thead>
                                        <tr>
                                          <th>Ürün</th>
                                          <th className="text-end">Fiyat</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {order.items.map((item, idx) => (
                                          <tr key={idx}>
                                            <td>{item.name}</td>
                                            <td className="text-end">{item.price} ₺</td>
                                          </tr>
                                        ))}
                                        <tr>
                                          <td className="text-end"><strong>Toplam:</strong></td>
                                          <td className="text-end"><strong>{order.amount} ₺</strong></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="rbt-btn btn-sm" data-bs-dismiss="modal">Kapat</button>
                                  <button type="button" className="rbt-btn btn-gradient btn-sm">Fatura İndir</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">Sipariş bulunamadı</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          
          {!loading && filteredOrders.length > 0 && (
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

export default Orders;
