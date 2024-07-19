import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AdminHeaderSearch } from "./AdminHeaderSearch";
import { AdminProfile } from "./AdminProfile";
import { AdminSmNavbar } from "./AdminSmNavbar";
export function AdminHeader({ isOpen, toggleDialogBox }) {
  return (
    <div className="bg-white  border-b border-b-black/25 py-3 px-4 md:px-6 fixed top-0 w-full flex justify-between items-center">
      <AdminSmNavbar />
      <div>
        <Link to="/" className="flex items-center gap-1">
          <img src="phoenix_logo.png" alt="Logo" className="w-8 object-contain" />
          <h2 className="font-medium text-[28px] text-gray-500 -mt-2">phoenix</h2>
        </Link>
      </div>
      <AdminHeaderSearch />
      <div className="block lg:hidden">
        <div>
          <button className=" bg-[#3F6AD8] py-2 rounded-md cursor-pointer" onClick={toggleDialogBox} >
            <HiDotsVertical className="text-white text-2xl" />
          </button>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2'>
        <AdminProfile />
      </div>
    </div>
  );
}
