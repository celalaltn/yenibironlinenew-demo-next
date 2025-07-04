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
        <Link href={getDashboardUrl()}>
          <i className="feather-home me-2"></i>Kontrol Paneli
        </Link>
        
        {/* Öğrenci menü öğeleri */}
        {userRole === 'Student' && (
          <>
            <Link href="/student-dashboard">
              <i className="feather-book me-2"></i>Kurslarım
            </Link>
            <Link href="/student-dashboard">
              <i className="feather-shopping-bag me-2"></i>Siparişlerim
            </Link>
            <Link href="/student-dashboard">
              <i className="feather-calendar me-2"></i>Etkinliklerim
            </Link>
            <Link href="/student-dashboard">
              <i className="feather-ticket me-2"></i>Biletlerim
            </Link>
            <Link href="/student-dashboard">
              <i className="feather-download me-2"></i>İndirilenler
            </Link>
            <Link href="/student-dashboard">
              <i className="feather-credit-card me-2"></i>Ödeme Yöntemleri
            </Link>
            <Link href="/student-dashboard">
              <i className="feather-map-pin me-2"></i>Adreslerim
            </Link>
          </>
        )}
        
        {/* Eğitmen menü öğeleri */}
        {userRole === 'Instructor' && (
          <>
            <Link href="/instructor-personal-courses">
              <i className="feather-book me-2"></i>Eğitimlerim
            </Link>
            <Link href="/instructor-dashboard">
              <i className="feather-users me-2"></i>Öğrencilerim
            </Link>
            <Link href="/instructor-dashboard">
              <i className="feather-dollar-sign me-2"></i>Kazançlarım
            </Link>
            <Link href="/instructor-reviews">
              <i className="feather-star me-2"></i>Değerlendirmeler
            </Link>
          </>
        )}
        
        {/* Admin menü öğeleri */}
        {(userRole === 'Admin' || userRole === 'SuperAdmin') && (
          <>
            <Link href="/admin-dashboard">
              <i className="feather-settings me-2"></i>Site Ayarları
            </Link>
            <Link href="/admin-dashboard">
              <i className="feather-users me-2"></i>Kullanıcılar
            </Link>
            <Link href="/admin-dashboard">
              <i className="feather-book me-2"></i>Kurslar
            </Link>
            <Link href="/admin-dashboard">
              <i className="feather-bar-chart-2 me-2"></i>Raporlar
            </Link>
          </>
        )}
        
        {/* Moderatör menü öğeleri */}
        {userRole === 'Moderator' && (
          <>
            <Link href="/moderator-dashboard">
              <i className="feather-edit me-2"></i>İçerik Yönetimi
            </Link>
            <Link href={getDashboardUrl()}>
              <i className="feather-message-square me-2"></i>Yorumlar
            </Link>
            <Link href={getDashboardUrl()}>
              <i className="feather-flag me-2"></i>Raporlar
            </Link>
          </>
        )}
        
        {/* Tüm roller için ortak menü öğeleri */}
        <Link href={`${getDashboardUrl()}`}>
          <i className="feather-user me-2"></i>Hesap Bilgilerim
        </Link>
        <Link href={`${getDashboardUrl()}`}>
          <i className="feather-lock me-2"></i>Şifre Değiştir
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
