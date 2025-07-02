"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const Profile = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  const [activeTab, setActiveTab] = useState("profile");
  const [saving, setSaving] = useState(false);
  
  const handleSave = (e) => {
    e.preventDefault();
    setSaving(true);
    
    // Burada gerçek bir API çağrısı yapılabilir
    setTimeout(() => {
      setSaving(false);
      // Başarılı kayıt mesajı gösterilebilir
    }, 1000);
  };
  
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Profil Bilgileri</h4>
          </div>
          
          <div className="rbt-dashboard-tab-content">
            <div className="rbt-dashboard-tab-content-inner">
              <div className="rbt-dashboard-tab-nav mb--30">
                <nav className="rbt-tab-nav-1">
                  <div className="nav" role="tablist">
                    <button 
                      className={`nav-link ${activeTab === "profile" ? "active" : ""}`} 
                      onClick={() => setActiveTab("profile")}
                    >
                      <i className="feather-user"></i> Profil Bilgileri
                    </button>
                    <button 
                      className={`nav-link ${activeTab === "password" ? "active" : ""}`} 
                      onClick={() => setActiveTab("password")}
                    >
                      <i className="feather-lock"></i> Şifre Değiştir
                    </button>
                    <button 
                      className={`nav-link ${activeTab === "notifications" ? "active" : ""}`} 
                      onClick={() => setActiveTab("notifications")}
                    >
                      <i className="feather-bell"></i> Bildirim Ayarları
                    </button>
                  </div>
                </nav>
              </div>
              
              <div className="tab-content">
                {/* Profil Bilgileri */}
                {activeTab === "profile" && (
                  <div className="tab-pane fade show active">
                    <form onSubmit={handleSave} className="rbt-profile-row rbt-default-form row row--15">
                      <div className="col-12 mb--20">
                        <div className="rbt-profile-wrapper">
                          <div className="rbt-profile-content">
                            <div className="rbt-profile-avatar">
                              <Image
                                width={120}
                                height={120}
                                src="/images/team/avatar.jpg"
                                alt="Admin Avatar"
                              />
                            </div>
                            <div className="rbt-profile-info">
                              <h5 className="title">{user?.firstName || "Admin"} {user?.lastName || ""}</h5>
                              <span className="subtitle">Site Yöneticisi</span>
                              <div className="rbt-profile-actions mt--20">
                                <button className="rbt-btn btn-sm btn-border">Fotoğrafı Değiştir</button>
                                <button className="rbt-btn btn-sm btn-border">Kaldır</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-6">
                        <div className="rbt-form-group">
                          <label htmlFor="firstName">Ad</label>
                          <input id="firstName" type="text" defaultValue={user?.firstName || "Admin"} />
                        </div>
                      </div>
                      
                      <div className="col-lg-6">
                        <div className="rbt-form-group">
                          <label htmlFor="lastName">Soyad</label>
                          <input id="lastName" type="text" defaultValue={user?.lastName || ""} />
                        </div>
                      </div>
                      
                      <div className="col-lg-6">
                        <div className="rbt-form-group">
                          <label htmlFor="email">E-posta</label>
                          <input id="email" type="email" defaultValue={user?.email || "admin@yenibironline.com"} />
                        </div>
                      </div>
                      
                      <div className="col-lg-6">
                        <div className="rbt-form-group">
                          <label htmlFor="phone">Telefon</label>
                          <input id="phone" type="text" defaultValue={user?.phone || ""} />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="bio">Biyografi</label>
                          <textarea id="bio" rows="4" defaultValue={user?.bio || ""}></textarea>
                        </div>
                      </div>
                      
                      <div className="col-12 mt--20">
                        <div className="rbt-form-group">
                          <button 
                            className="rbt-btn btn-gradient" 
                            type="submit"
                            disabled={saving}
                          >
                            {saving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* Şifre Değiştir */}
                {activeTab === "password" && (
                  <div className="tab-pane fade show active">
                    <form onSubmit={handleSave} className="rbt-profile-row rbt-default-form row row--15">
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="currentPassword">Mevcut Şifre</label>
                          <input id="currentPassword" type="password" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="newPassword">Yeni Şifre</label>
                          <input id="newPassword" type="password" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="confirmPassword">Yeni Şifre (Tekrar)</label>
                          <input id="confirmPassword" type="password" />
                        </div>
                      </div>
                      
                      <div className="col-12 mt--20">
                        <div className="rbt-form-group">
                          <button 
                            className="rbt-btn btn-gradient" 
                            type="submit"
                            disabled={saving}
                          >
                            {saving ? "Kaydediliyor..." : "Şifreyi Değiştir"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* Bildirim Ayarları */}
                {activeTab === "notifications" && (
                  <div className="tab-pane fade show active">
                    <form onSubmit={handleSave} className="rbt-profile-row rbt-default-form row row--15">
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label className="form-label">E-posta Bildirimleri</label>
                          <div className="rbt-checkbox-group">
                            <div className="rbt-checkbox">
                              <input id="emailNewUser" type="checkbox" defaultChecked />
                              <label htmlFor="emailNewUser">Yeni kullanıcı kaydı</label>
                            </div>
                            <div className="rbt-checkbox">
                              <input id="emailNewOrder" type="checkbox" defaultChecked />
                              <label htmlFor="emailNewOrder">Yeni sipariş</label>
                            </div>
                            <div className="rbt-checkbox">
                              <input id="emailNewCourse" type="checkbox" defaultChecked />
                              <label htmlFor="emailNewCourse">Yeni kurs ekleme</label>
                            </div>
                            <div className="rbt-checkbox">
                              <input id="emailSupport" type="checkbox" defaultChecked />
                              <label htmlFor="emailSupport">Destek talepleri</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label className="form-label">Sistem Bildirimleri</label>
                          <div className="rbt-checkbox-group">
                            <div className="rbt-checkbox">
                              <input id="systemNewUser" type="checkbox" defaultChecked />
                              <label htmlFor="systemNewUser">Yeni kullanıcı kaydı</label>
                            </div>
                            <div className="rbt-checkbox">
                              <input id="systemNewOrder" type="checkbox" defaultChecked />
                              <label htmlFor="systemNewOrder">Yeni sipariş</label>
                            </div>
                            <div className="rbt-checkbox">
                              <input id="systemNewCourse" type="checkbox" defaultChecked />
                              <label htmlFor="systemNewCourse">Yeni kurs ekleme</label>
                            </div>
                            <div className="rbt-checkbox">
                              <input id="systemSupport" type="checkbox" defaultChecked />
                              <label htmlFor="systemSupport">Destek talepleri</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-12 mt--20">
                        <div className="rbt-form-group">
                          <button 
                            className="rbt-btn btn-gradient" 
                            type="submit"
                            disabled={saving}
                          >
                            {saving ? "Kaydediliyor..." : "Ayarları Kaydet"}
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Profile;
