"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";

const AdminDashboardSidebar = () => {
  const pathname = usePathname();
  const { user } = useSelector((state) => state.AuthReducer || {});

  // Admin sidebar menü öğeleri
  const sidebarData = {
    siderbar: [
      {
        id: 1,
        icon: "feather-home",
        text: "Dashboard",
        link: "/admin-dashboard",
      },
      {
        id: 2,
        icon: "feather-users",
        text: "Kullanıcılar",
        link: "/admin-dashboard/users",
      },
      {
        id: 3,
        icon: "feather-book",
        text: "Kurslar",
        link: "/admin-dashboard/courses",
      },
      {
        id: 4,
        icon: "feather-calendar",
        text: "Etkinlikler",
        link: "/admin-dashboard/events",
      },
      {
        id: 5,
        icon: "feather-shopping-cart",
        text: "Siparişler",
        link: "/admin-dashboard/orders",
      },
      {
        id: 6,
        icon: "feather-message-square",
        text: "Mesajlar",
        link: "/admin-dashboard/messages",
      },
      {
        id: 7,
        icon: "feather-dollar-sign",
        text: "Finansal",
        link: "/admin-dashboard/financial",
      },
      {
        id: 8,
        icon: "feather-settings",
        text: "Site Ayarları",
        link: "/admin-dashboard/settings",
      },
      {
        id: 9,
        icon: "feather-bar-chart-2",
        text: "Raporlar",
        link: "/admin-dashboard/reports",
      },
      {
        id: 10,
        icon: "feather-user",
        text: "Profil",
        link: "/admin-dashboard/profile",
      },
    ]
  };

  return (
    <>
      <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
                <h6 className="rbt-title-style-2">Hoşgeldiniz, {user?.firstName || "Admin"}</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list nav-tabs">
                  {sidebarData.siderbar.slice(0, 7).map((data, index) => (
                    <li className="nav-item" key={index} role="presentation">
                      <Link
                        className={`${
                          pathname === data.link ? "active" : ""
                        }`}
                        href={data.link}
                      >
                        <i className={data.icon} />
                        <span>{data.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="section-title mt--40 mb--20">
                <h6 className="rbt-title-style-2">Yönetim</h6>
              </div>

              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  {sidebarData.siderbar.slice(7, 9).map((data, index) => (
                    <li key={index}>
                      <Link
                        href={data.link}
                        className={`${
                          pathname === data.link ? "active" : ""
                        }`}
                      >
                        <i className={data.icon} />
                        <span>{data.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="section-title mt--40 mb--20">
                <h6 className="rbt-title-style-2">Kullanıcı</h6>
              </div>

              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  {sidebarData.siderbar.slice(9, 10).map((data, index) => (
                    <li key={index}>
                      <Link
                        href={data.link}
                        className={`${
                          pathname === data.link ? "active" : ""
                        }`}
                      >
                        <i className={data.icon} />
                        <span>{data.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardSidebar;
