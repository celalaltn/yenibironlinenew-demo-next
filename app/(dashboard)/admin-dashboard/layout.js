"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// Temiz ve basit admin dashboard layout - sadece içerik bölümü
export default function AdminDashboardLayout({ children }) {
  const { isAuthenticated, user } = useSelector((state) => state.AuthReducer || {});
  const router = useRouter();

  useEffect(() => {
    // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    // Kullanıcı Admin veya SuperAdmin değilse ana sayfaya yönlendir
    if (!user?.roles?.includes("Admin") && !user?.roles?.includes("SuperAdmin")) {
      router.push("/");
    }
  }, [isAuthenticated, user, router]);

  // Kullanıcı giriş yapmamışsa veya Admin/SuperAdmin değilse içeriği gösterme
  if (!isAuthenticated || (!user?.roles?.includes("Admin") && !user?.roles?.includes("SuperAdmin"))) {
    return null;
  }

  return children;
}
