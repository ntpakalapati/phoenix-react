import { ImSearch } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuLayoutGrid } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AdminHeaderSearch } from "./AdminHeaderSearch";
import { AdminSmNavbar } from "./AdminSmNavbar";

export function AdminHeader() {

    return (
        <div className="bg-white  border-b border-b-black/25 py-3 px-3 md:px-6 fixed top-0 w-full flex justify-between items-center">
            <div className="flex gap-1.5 items-center">
                <AdminSmNavbar/>
                <Link to="/" className="flex items-center gap-1">
                    <img src="phoenix_logo.png" alt="Logo" className="w-8 object-contain" />
                    <h2 className="hidden lg:block font-medium text-[28px] text-gray-500 -mt-2">phoenix</h2>
                </Link>
            </div>
            <AdminHeaderSearch />
            <div className='flex items-center gap-2'>
                <div className="bg-gray-200 p-2 rounded-full lg:hidden block">
                    <ImSearch className="rotate-90 text-blue-700 text-lg" />
                </div>
                <div>
                    <IoIosNotificationsOutline className='text-2xl' />
                </div>
                <div>
                    <LuLayoutGrid className='text-2xl' />
                </div>
                <div>
                    <img src={'/profile_logo.webp'} alt='Logo' className='w-10 h-10 rounded-full' />
                </div>
            </div>
        </div>
    );
}
