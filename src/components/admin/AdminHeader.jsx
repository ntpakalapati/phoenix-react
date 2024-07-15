import { useState } from 'react';
import { BiSolidGrid } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';
import { HiDotsVertical } from "react-icons/hi";
import { IoIosAnalytics, IoMdNotifications } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { ImSearch } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuLayoutGrid } from "react-icons/lu";
import { AdminSmMenu } from "./AdminSmMenu";
import { Link } from "react-router-dom";
import { AdminHeaderSearch } from "./AdminHeaderSearch";
import { AdminSmNavbar } from "./AdminSmNavbar";
import { AdminProfile } from "./AdminProfile";
export function AdminHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDialogBox = () => {
        setIsOpen(!isOpen);
    };

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
                    {/* Dialog Box */}
                    {isOpen && (
                        <div className="fixed top-24 w-[98%] mx-auto md:w-[85%] px-2 md:px-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg py-2.5 md:py-3 rounded-full border ">
                            <div className='flex gap-0 md:gap-2'>
                                <div className='w-[15%] md:w-[37%] flex justify-center md:justify-start items-center'>
                                    <div className='bg-[#F0F0F0] p-2 w-11 h-11 md:w-12 md:h-12 rounded-full'>
                                        <IoSearch className='w-full h-full text-[#1D4ED8] rotate-90' />
                                    </div>
                                </div>
                                <div className='w-[70%] md:w-[45] flex items-center justify-center md:justify-end border-r border-r-gray-700'>
                                    <div className='flex items-center gap-3 md:gap-6 pe-0 md:pe-4'>
                                        <div className='bg-[#EBF0FB] p-2 w-11 h-11 md:w-12 md:h-12 rounded-full'>
                                            <BiSolidGrid className='w-full h-full text-[#1D4ED8]' />
                                        </div>
                                        <div className='bg-[#FBE9ED] p-2 w-11 h-11 md:w-12 md:h-12 rounded-full'>
                                            <IoMdNotifications className='w-full h-full text-[#D92550]' />
                                        </div>
                                        <button className='bg-[#ECEBED] p-1.5 rounded-full w-11 h-11 md:w-12 md:h-12'>
                                            <img src={'/language_flog_icon.png'} width={20} alt='' className='object-contain w-full h-full' />
                                        </button>
                                        <div className='bg-[#EBF9F2] p-2 w-[46px] h-[46px] md:w-[49px] md:h-[49px] rounded-full'>
                                            <IoIosAnalytics className='w-full h-full text-[#3AC47D]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[15%] md:w-[18%] flex items-center justify-center'>
                                    <div className='flex flex-col md:flex-row items-center gap-1 md:gap-2'>
                                        <button className='w-9 h-9 md:w-11 md:h-11'>
                                            <img src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/1.jpg" alt='' className='w-full h-full rounded-full' />
                                        </button>
                                        <FaAngleDown className='text-gray-600' />
                                    </div>
                                </div>
                            </div>

                        </div>

                    )}
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2'>
                <AdminProfile />
            </div>
        </div>
    );
}
