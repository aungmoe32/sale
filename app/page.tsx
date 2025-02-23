import QuickStats from "./components/QuickStats";
import RecentActivity from "./components/RecentActivity";
import DeliveryTracking from "./components/DeliveryTracking";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Warehouse Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivity />
        <DeliveryTracking />
      </div>
    </div>
  );
}
