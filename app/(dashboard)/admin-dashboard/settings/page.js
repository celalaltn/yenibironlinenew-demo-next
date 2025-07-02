import AdminDashboardLayout from "../layout";
import AdminDashboardSidebar from "@/components/Admin/AdminDashboardSidebar";
import Settings from "@/components/Admin/Settings";

export default function AdminSettingsPage() {
  return (
    <AdminDashboardLayout>
      <div className="rbt-dashboard-area rbt-section-gap bg-color-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <AdminDashboardSidebar />
            </div>
            <div className="col-lg-9">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}
