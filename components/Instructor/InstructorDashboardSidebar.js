"use client";

import { usePathname } from "next/navigation";
import SidebarData from "../../data/dashboard/instructor/siderbar.json";
import Link from "next/link";
import { useSelector } from "react-redux";

const InstructorDashboardSidebar = () => {
  const pathname = usePathname();
  const user = useSelector(state => state?.AuthReducer?.user || null);

  return (
    <>
      <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
                <h6 className="rbt-title-style-2">Hoş Geldiniz, {user ? `${user.firstName}` : 'Kullanıcı'}</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list nav-tabs">
                  {SidebarData &&
                    SidebarData.siderbar.slice(0, 7).map((data, index) => (
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
                <h6 className="rbt-title-style-2">Eğitmen Paneli</h6>
              </div>

              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  {SidebarData &&
                    SidebarData.siderbar.slice(7, 10).map((data, index) => (
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
                <h6 className="rbt-title-style-2">Hesap Ayarları</h6>
              </div>

              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  {SidebarData &&
                    SidebarData.siderbar.slice(10, 12).map((data, index) => (
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

export default InstructorDashboardSidebar;
