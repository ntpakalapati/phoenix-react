import { AdminSmSearch } from "./AdminSmSearch";
import { AdminNotification } from "./AdminNotification";
import { AdminDashboard } from "./AdminDashboard";
import { AdminHeaderProfile } from "./AdminHeaderProfile";
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