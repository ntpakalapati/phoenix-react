import { AdminDashboard } from "./AdminDashboard";
import { AdminHeaderProfile } from "./AdminHeaderProfile";
import { AdminNotification } from "./AdminNotification";
import { AdminSmSearch } from "./AdminSmSearch";

export function AdminProfile() {
  return (
    <div className='flex items-center gap-4'>
      <AdminSmSearch />
      <AdminNotification />
      <AdminDashboard />
      <AdminHeaderProfile />
    </div>
  )
}