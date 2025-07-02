import AdminDashboardLayout from "../layout";
import AdminDashboardSidebar from "@/components/Admin/AdminDashboardSidebar";
import Messages from "@/components/Admin/Messages";

export default function AdminMessagesPage() {
  return (
    <AdminDashboardLayout>
      <div className="rbt-dashboard-area rbt-section-gap bg-color-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <AdminDashboardSidebar />
            </div>
            <div className="col-lg-9">
              <Messages />
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}
