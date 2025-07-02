"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const Settings = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  const [activeTab, setActiveTab] = useState("general");
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
            <h4 className="rbt-title-style-3">Site Ayarları</h4>
          </div>
          
          <div className="rbt-dashboard-tab-content">
            <div className="rbt-dashboard-tab-content-inner">
              <div className="rbt-dashboard-tab-nav mb--30">
                <nav className="rbt-tab-nav-1">
                  <div className="nav" role="tablist">
                    <button 
                      className={`nav-link ${activeTab === "general" ? "active" : ""}`} 
                      onClick={() => setActiveTab("general")}
                    >
                      <i className="feather-settings"></i> Genel Ayarlar
                    </button>
                    <button 
                      className={`nav-link ${activeTab === "appearance" ? "active" : ""}`} 
                      onClick={() => setActiveTab("appearance")}
                    >
                      <i className="feather-layout"></i> Görünüm
                    </button>
                    <button 
                      className={`nav-link ${activeTab === "email" ? "active" : ""}`} 
                      onClick={() => setActiveTab("email")}
                    >
                      <i className="feather-mail"></i> E-posta Ayarları
                    </button>
                    <button 
                      className={`nav-link ${activeTab === "payment" ? "active" : ""}`} 
                      onClick={() => setActiveTab("payment")}
                    >
                      <i className="feather-credit-card"></i> Ödeme Ayarları
                    </button>
                  </div>
                </nav>
              </div>
              
              <div className="tab-content">
                {/* Genel Ayarlar */}
                {activeTab === "general" && (
                  <div className="tab-pane fade show active">
                    <form onSubmit={handleSave} className="rbt-profile-row rbt-default-form row row--15">
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="siteName">Site Adı</label>
                          <input id="siteName" type="text" defaultValue="Yeni Bir Online" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="siteDescription">Site Açıklaması</label>
                          <textarea id="siteDescription" rows="4" defaultValue="Online eğitim platformu"></textarea>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="contactEmail">İletişim E-posta</label>
                          <input id="contactEmail" type="email" defaultValue="info@yenibironline.com" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="contactPhone">İletişim Telefon</label>
                          <input id="contactPhone" type="text" defaultValue="+90 212 123 4567" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="contactAddress">İletişim Adresi</label>
                          <textarea id="contactAddress" rows="3" defaultValue="İstanbul, Türkiye"></textarea>
                        </div>
                      </div>
                      
                      <div className="col-12 mt--20">
                        <div className="rbt-form-group">
                          <button 
                            className="rbt-btn btn-gradient" 
                            type="submit"
                            disabled={saving}
                          >
                            {saving ? "Kaydediliyor..." : "Kaydet"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* Görünüm Ayarları */}
                {activeTab === "appearance" && (
                  <div className="tab-pane fade show active">
                    <form onSubmit={handleSave} className="rbt-profile-row rbt-default-form row row--15">
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="logo">Site Logo</label>
                          <input id="logo" type="file" />
                          <small>Önerilen boyut: 200x60 px</small>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="favicon">Favicon</label>
                          <input id="favicon" type="file" />
                          <small>Önerilen boyut: 32x32 px</small>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="primaryColor">Ana Renk</label>
                          <input id="primaryColor" type="color" defaultValue="#3e8fff" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="secondaryColor">İkincil Renk</label>
                          <input id="secondaryColor" type="color" defaultValue="#ff5b5c" />
                        </div>
                      </div>
                      
                      <div className="col-12 mt--20">
                        <div className="rbt-form-group">
                          <button 
                            className="rbt-btn btn-gradient" 
                            type="submit"
                            disabled={saving}
                          >
                            {saving ? "Kaydediliyor..." : "Kaydet"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* E-posta Ayarları */}
                {activeTab === "email" && (
                  <div className="tab-pane fade show active">
                    <form onSubmit={handleSave} className="rbt-profile-row rbt-default-form row row--15">
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="smtpServer">SMTP Sunucu</label>
                          <input id="smtpServer" type="text" defaultValue="smtp.example.com" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="smtpPort">SMTP Port</label>
                          <input id="smtpPort" type="number" defaultValue="587" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="smtpUsername">SMTP Kullanıcı Adı</label>
                          <input id="smtpUsername" type="text" defaultValue="info@yenibironline.com" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="smtpPassword">SMTP Şifre</label>
                          <input id="smtpPassword" type="password" defaultValue="********" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="senderEmail">Gönderen E-posta</label>
                          <input id="senderEmail" type="email" defaultValue="noreply@yenibironline.com" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="senderName">Gönderen Adı</label>
                          <input id="senderName" type="text" defaultValue="Yeni Bir Online" />
                        </div>
                      </div>
                      
                      <div className="col-12 mt--20">
                        <div className="rbt-form-group">
                          <button 
                            className="rbt-btn btn-gradient" 
                            type="submit"
                            disabled={saving}
                          >
                            {saving ? "Kaydediliyor..." : "Kaydet"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                
                {/* Ödeme Ayarları */}
                {activeTab === "payment" && (
                  <div className="tab-pane fade show active">
                    <form onSubmit={handleSave} className="rbt-profile-row rbt-default-form row row--15">
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label>Ödeme Yöntemleri</label>
                          <div className="rbt-checkbox-group">
                            <div className="rbt-checkbox">
                              <input id="paymentCreditCard" type="checkbox" defaultChecked />
                              <label htmlFor="paymentCreditCard">Kredi Kartı</label>
                            </div>
                            <div className="rbt-checkbox">
                              <input id="paymentBankTransfer" type="checkbox" defaultChecked />
                              <label htmlFor="paymentBankTransfer">Banka Havalesi</label>
                            </div>
                            <div className="rbt-checkbox">
                              <input id="paymentPaypal" type="checkbox" />
                              <label htmlFor="paymentPaypal">PayPal</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="currency">Para Birimi</label>
                          <select id="currency" defaultValue="TRY">
                            <option value="TRY">Türk Lirası (₺)</option>
                            <option value="USD">Amerikan Doları ($)</option>
                            <option value="EUR">Euro (€)</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="paymentApiKey">API Anahtarı</label>
                          <input id="paymentApiKey" type="text" defaultValue="sk_test_123456789" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="rbt-form-group">
                          <label htmlFor="paymentSecretKey">Gizli Anahtar</label>
                          <input id="paymentSecretKey" type="password" defaultValue="********" />
                        </div>
                      </div>
                      
                      <div className="col-12 mt--20">
                        <div className="rbt-form-group">
                          <button 
                            className="rbt-btn btn-gradient" 
                            type="submit"
                            disabled={saving}
                          >
                            {saving ? "Kaydediliyor..." : "Kaydet"}
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

export default Settings;
