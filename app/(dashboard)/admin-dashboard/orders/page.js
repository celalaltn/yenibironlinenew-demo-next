import AdminDashboardLayout from "../layout";
import AdminDashboardSidebar from "@/components/Admin/AdminDashboardSidebar";
import Orders from "@/components/Admin/Orders";

export default function AdminOrdersPage() {
  return (
    <AdminDashboardLayout>
      <div className="rbt-dashboard-area rbt-section-gap bg-color-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <AdminDashboardSidebar />
            </div>
            <div className="col-lg-9">
              <Orders />
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}
