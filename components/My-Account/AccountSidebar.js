import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/action/AuthAction";
import { useRouter } from "next/navigation";

const AccountSidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.AuthReducer);
  
  // Kullanıcı rolünü belirle
  const userRole = user?.roles && user.roles.length > 0 ? user.roles[0] : 'Student';
  
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    router.push('/');
  };
  
  // Rol bazlı dashboard URL'i
  const getDashboardUrl = () => {
    switch(userRole) {
      case 'Admin':
      case 'SuperAdmin':
        return '/admin-dashboard';
      case 'Instructor':
        return '/instructor-dashboard';
      case 'Moderator':
        return '/moderator-dashboard';
      case 'Student':
      default:
        return '/student-dashboard';
    }
  };
  
  return (
    <>
      <div className="rbt-my-account-tab-button nav" role="tablist">
        <Link href="#dashboad" className="active" data-bs-toggle="tab">
          <i className="feather-home me-2"></i>Dashboard
        </Link>
        
        {/* Öğrenci menü öğeleri */}
        {userRole === 'Student' && (
          <>
            <Link href="#my-courses" data-bs-toggle="tab">
              <i className="feather-book me-2"></i>Kurslarım
            </Link>
            <Link href="#orders" data-bs-toggle="tab">
              <i className="feather-shopping-bag me-2"></i>Siparişlerim
            </Link>
            <Link href="#my-events" data-bs-toggle="tab">
              <i className="feather-calendar me-2"></i>Etkinliklerim
            </Link>
            <Link href="#my-tickets" data-bs-toggle="tab">
              <i className="feather-ticket me-2"></i>Biletlerim
            </Link>
            <Link href="#download" data-bs-toggle="tab">
              <i className="feather-download me-2"></i>İndirilenler
            </Link>
            <Link href="#payment-method" data-bs-toggle="tab">
              <i className="feather-credit-card me-2"></i>Ödeme Yöntemleri
            </Link>
            <Link href="#address-edit" data-bs-toggle="tab">
              <i className="feather-map-pin me-2"></i>Adreslerim
            </Link>
          </>
        )}
        
        {/* Eğitmen menü öğeleri */}
        {userRole === 'Instructor' && (
          <>
            <Link href="#my-courses" data-bs-toggle="tab">
              <i className="feather-book me-2"></i>Eğitimlerim
            </Link>
            <Link href="#my-students" data-bs-toggle="tab">
              <i className="feather-users me-2"></i>Öğrencilerim
            </Link>
            <Link href="#earnings" data-bs-toggle="tab">
              <i className="feather-dollar-sign me-2"></i>Kazançlarım
            </Link>
            <Link href="#reviews" data-bs-toggle="tab">
              <i className="feather-star me-2"></i>Değerlendirmeler
            </Link>
          </>
        )}
        
        {/* Admin menü öğeleri */}
        {(userRole === 'Admin' || userRole === 'SuperAdmin') && (
          <>
            <Link href="#site-settings" data-bs-toggle="tab">
              <i className="feather-settings me-2"></i>Site Ayarları
            </Link>
            <Link href="#users" data-bs-toggle="tab">
              <i className="feather-users me-2"></i>Kullanıcılar
            </Link>
            <Link href="#courses" data-bs-toggle="tab">
              <i className="feather-book me-2"></i>Kurslar
            </Link>
            <Link href="#reports" data-bs-toggle="tab">
              <i className="feather-bar-chart-2 me-2"></i>Raporlar
            </Link>
          </>
        )}
        
        {/* Moderatör menü öğeleri */}
        {userRole === 'Moderator' && (
          <>
            <Link href="#content" data-bs-toggle="tab">
              <i className="feather-edit me-2"></i>İçerik Yönetimi
            </Link>
            <Link href="#comments" data-bs-toggle="tab">
              <i className="feather-message-square me-2"></i>Yorumlar
            </Link>
            <Link href="#reports" data-bs-toggle="tab">
              <i className="feather-flag me-2"></i>Raporlar
            </Link>
          </>
        )}
        
        {/* Tüm roller için ortak menü öğeleri */}
        <Link href="#account-info" data-bs-toggle="tab">
          <i className="feather-user me-2"></i>Hesap Bilgilerim
        </Link>
        <a href="#" onClick={handleLogout}>
          <i className="feather-log-out me-2"></i>Çıkış Yap
        </a>
        
        {/* Rol bazlı dashboard'a yönlendirme linki */}
        <Link href={getDashboardUrl()} className="rbt-btn btn-sm btn-gradient w-100 text-center mt-4">
          <i className="feather-monitor me-2"></i>Dashboard'a Git
        </Link>
      </div>
    </>
  );
};

export default AccountSidebar;
