import AdminDashboardLayout from "../layout";
import AdminDashboardSidebar from "@/components/Admin/AdminDashboardSidebar";
import Users from "@/components/Admin/Users";

export default function AdminUsersPage() {
  return (
    <AdminDashboardLayout>
      <div className="rbt-dashboard-area rbt-section-gap bg-color-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <AdminDashboardSidebar />
            </div>
            <div className="col-lg-9">
              <Users />
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}
