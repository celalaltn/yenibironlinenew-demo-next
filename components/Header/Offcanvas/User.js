import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/action/AuthAction";
import UserData from "../../../data/user.json";

const User = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.AuthReducer || {});
  
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  
  // Kullanıcı giriş yapmamışsa dropdown menüsünü gösterme
  if (!isAuthenticated) {
    return null;
  }
  
  // Kullanıcının rolünü belirle
  const userRole = user?.roles && user.roles.length > 0 ? user.roles[0] : 'Student';
  
  // Role göre dashboard URL'i
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
  
  // Role göre profil metni
  const getRoleText = () => {
    switch(userRole) {
      case 'Admin':
        return 'Yönetici';
      case 'SuperAdmin':
        return 'Süper Yönetici';
      case 'Instructor':
        return 'Eğitmen';
      case 'Moderator':
        return 'Moderatör';
      case 'Student':
      default:
        return 'Öğrenci';
    }
  };
  
  return (
    <>
      <div className="rbt-user-menu-list-wrapper">
        {UserData &&
          UserData.user.map((person, index) => (
            <div className="inner" key={index}>
              <div className="rbt-admin-profile">
                <div className="admin-thumbnail">
                  <Image
                    src={person.img}
                    width={43}
                    height={43}
                    alt="User Images"
                  />
                </div>
                <div className="admin-info">
                  <span className="name">{user?.firstName || person.name}</span>
                  <span className="role">{getRoleText()}</span>
                  <Link
                    className="rbt-btn-link color-primary"
                    href="/my-account"
                  >
                    Profili Görüntüle
                  </Link>
                </div>
              </div>
              <ul className="user-list-wrapper">
                <li>
                  <Link href="/my-account">
                    <i className="feather-user"></i>
                    <span>Hesabım</span>
                  </Link>
                </li>
                
                {/* Öğrenci ve Eğitmen için kurslar */}
                {(userRole === 'Student' || userRole === 'Instructor') && (
                  <li>
                    <Link href="/my-account#my-courses">
                      <i className="feather-book"></i>
                      <span>{userRole === 'Student' ? 'Kurslarım' : 'Eğitimlerim'}</span>
                    </Link>
                  </li>
                )}
                
                {/* Öğrenci için siparişler */}
                {userRole === 'Student' && (
                  <li>
                    <Link href="/my-account#orders">
                      <i className="feather-shopping-bag"></i>
                      <span>Siparişlerim</span>
                    </Link>
                  </li>
                )}
                
                {/* Öğrenci için etkinlikler */}
                {userRole === 'Student' && (
                  <li>
                    <Link href="/my-account#my-events">
                      <i className="feather-calendar"></i>
                      <span>Etkinliklerim</span>
                    </Link>
                  </li>
                )}
                
                {/* Admin ve SuperAdmin için yönetim */}
                {(userRole === 'Admin' || userRole === 'SuperAdmin') && (
                  <li>
                    <Link href="/admin-dashboard/settings">
                      <i className="feather-settings"></i>
                      <span>Site Yönetimi</span>
                    </Link>
                  </li>
                )}
                
                {/* Moderatör için içerik yönetimi */}
                {userRole === 'Moderator' && (
                  <li>
                    <Link href="/moderator-dashboard/content">
                      <i className="feather-edit"></i>
                      <span>İçerik Yönetimi</span>
                    </Link>
                  </li>
                )}
                
                {/* Eğitmen için kurs yönetimi */}
                {userRole === 'Instructor' && (
                  <li>
                    <Link href="/instructor-dashboard/courses">
                      <i className="feather-edit-3"></i>
                      <span>Kurs Yönetimi</span>
                    </Link>
                  </li>
                )}
                
                <li>
                  <a href="#" onClick={handleLogout}>
                    <i className="feather-log-out"></i>
                    <span>Çıkış Yap</span>
                  </a>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export default User;
