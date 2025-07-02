"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

const AdminDashboardHeader = () => {
  const { user } = useSelector((state) => state.AuthReducer || {});
  
  return (
    <>
      <div className="rbt-dashboard-content-wrapper">
        <div className="tutor-bg-photo bg_image bg_image--22 height-350" />
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg">
              <Image
                width={300}
                height={300}
                src="/images/team/avatar.jpg"
                alt="Admin"
              />
            </div>
            <div className="tutor-content">
              <h5 className="title">{user?.firstName || "Admin"} {user?.lastName || ""}</h5>
              <div className="rbt-review">
                <span className="designation">Site Yöneticisi</span>
              </div>
            </div>
          </div>
          <div className="rbt-tutor-information-right">
            <div className="tutor-btn">
              <a className="rbt-btn btn-md hover-icon-reverse" href="/admin-dashboard/settings">
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Site Ayarları</span>
                  <span className="btn-icon">
                    <i className="feather-settings" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-settings" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardHeader;
