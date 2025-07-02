"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  useEffect(() => {
    // Burada gerçek bir API çağrısı yapılabilir
    // Şimdilik örnek veriler kullanıyoruz
    setTimeout(() => {
      const mockUsers = [
        { id: 1, firstName: "Ahmet", lastName: "Yılmaz", email: "ahmet@example.com", roles: ["Student"], createdAt: "2025-06-01" },
        { id: 2, firstName: "Mehmet", lastName: "Demir", email: "mehmet@example.com", roles: ["Instructor"], createdAt: "2025-06-05" },
        { id: 3, firstName: "Ayşe", lastName: "Kaya", email: "ayse@example.com", roles: ["Student"], createdAt: "2025-06-10" },
        { id: 4, firstName: "Fatma", lastName: "Şahin", email: "fatma@example.com", roles: ["Moderator"], createdAt: "2025-06-15" },
        { id: 5, firstName: "Ali", lastName: "Yıldız", email: "ali@example.com", roles: ["Admin"], createdAt: "2025-06-20" },
        { id: 6, firstName: "Zeynep", lastName: "Öztürk", email: "zeynep@example.com", roles: ["Student"], createdAt: "2025-06-25" },
        { id: 7, firstName: "Mustafa", lastName: "Çelik", email: "mustafa@example.com", roles: ["Instructor"], createdAt: "2025-06-30" },
      ];
      setUsers(mockUsers);
      setLoading(false);
    }, 1000);
  }, []);

  // Kullanıcıları filtrele
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === "all" || user.roles.includes(roleFilter);
    
    return matchesSearch && matchesRole;
  });

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title d-flex justify-content-between align-items-center">
            <h4 className="rbt-title-style-3">Kullanıcı Yönetimi</h4>
            <button className="rbt-btn btn-sm btn-gradient">
              <i className="feather-plus"></i> Yeni Kullanıcı
            </button>
          </div>
          
          <div className="row g-4 mb--30">
            <div className="col-lg-6">
              <div className="rbt-form-group">
                <input 
                  type="text" 
                  placeholder="Kullanıcı ara..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rbt-form-group">
                <select 
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                >
                  <option value="all">Tüm Roller</option>
                  <option value="Student">Öğrenci</option>
                  <option value="Instructor">Eğitmen</option>
                  <option value="Moderator">Moderatör</option>
                  <option value="Admin">Admin</option>
                  <option value="SuperAdmin">Süper Admin</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="rbt-dashboard-table table-responsive">
            <table className="rbt-table table table-borderless">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ad Soyad</th>
                  <th>E-posta</th>
                  <th>Rol</th>
                  <th>Kayıt Tarihi</th>
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
                  filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.email}</td>
                        <td>
                          {user.roles.map(role => {
                            let badgeClass = "rbt-badge-5";
                            switch(role) {
                              case "Admin":
                                badgeClass += " bg-danger";
                                break;
                              case "SuperAdmin":
                                badgeClass += " bg-danger";
                                break;
                              case "Instructor":
                                badgeClass += " bg-primary";
                                break;
                              case "Moderator":
                                badgeClass += " bg-warning";
                                break;
                              default:
                                badgeClass += " bg-success";
                            }
                            return (
                              <span key={role} className={badgeClass} style={{marginRight: "5px"}}>
                                {role === "Student" ? "Öğrenci" : 
                                 role === "Instructor" ? "Eğitmen" : 
                                 role === "Moderator" ? "Moderatör" : 
                                 role === "Admin" ? "Admin" : 
                                 role === "SuperAdmin" ? "Süper Admin" : role}
                              </span>
                            );
                          })}
                        </td>
                        <td>{user.createdAt}</td>
                        <td>
                          <div className="rbt-button-group">
                            <button className="rbt-btn btn-xs btn-primary" title="Düzenle">
                              <i className="feather-edit-2"></i>
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
                      <td colSpan="6" className="text-center">Kullanıcı bulunamadı</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          
          {!loading && filteredUsers.length > 0 && (
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

export default Users;
