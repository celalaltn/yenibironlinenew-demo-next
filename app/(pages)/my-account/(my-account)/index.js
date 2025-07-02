"use client";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import AccountSidebar from "@/components/My-Account/AccountSidebar";
import MyAccount from "@/components/My-Account/MyAccount";
import Dashboard from "@/components/Admin/Dashboard";
import AdminDashboardSidebar from "@/components/Admin/AdminDashboardSidebar";
import Context from "@/context/Context";
import Store from "@/redux/store";
import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import AccountInfo from "../../../../data/myAccount.json";

const MyAccountContent = () => {
  const { isAuthenticated, user } = useSelector((state) => state.AuthReducer || {});
  const router = useRouter();
  
  // Kullanıcı rolünü belirle
  const userRole = user?.roles && user.roles.length > 0 ? user.roles[0] : 'Student';
  
  useEffect(() => {
    // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
  }, [isAuthenticated, router]);

  // Kullanıcı giriş yapmamışsa içeriği gösterme
  if (!isAuthenticated) {
    return null;
  }
  
  // Admin veya SuperAdmin için admin dashboard göster
  if (userRole === 'Admin' || userRole === 'SuperAdmin') {
    return (
      <>
        <div className="rbt-dashboard-area rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-3">
                <AdminDashboardSidebar />
              </div>
              <div className="col-lg-9">
                <Dashboard />
              </div>
            </div>
          </div>
        </div>
        <Separator />
      </>
    );
  }
  
  // Diğer kullanıcılar için normal hesabım sayfasını göster
  return (
    <>
      <BreadCrumb title="Hesabım" activeText="Hesabım" />
      <div className="rbt-dashboard-area rbt-section-gap bg-color-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <AccountSidebar />
            </div>
            <div className="col-lg-9">
              <MyAccount account={AccountInfo} user={user} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MyAccountPage = () => {
  return (
    <Provider store={Store}>
      <Context>
        <MyAccountContent />
      </Context>
    </Provider>
  );
};

export default MyAccountPage;
