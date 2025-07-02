import AdminDashboardLayout from "./layout";
import AdminDashboardSidebar from "@/components/Admin/AdminDashboardSidebar";
import Dashboard from "@/components/Admin/Dashboard";

export default function AdminDashboardPage() {
  return (
    <AdminDashboardLayout>
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
    </AdminDashboardLayout>
  );
}
