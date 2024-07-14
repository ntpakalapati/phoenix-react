import { useState } from 'react';
import { BiSolidGrid } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';
import { HiDotsVertical } from "react-icons/hi";
import { IoIosAnalytics, IoMdNotifications } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
export function AdminSmMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDialogBox = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <button className=" bg-[#3F6AD8] py-2 rounded-md cursor-pointer" onClick={toggleDialogBox} >
                <HiDotsVertical className="text-white text-2xl" />
            </button>
            {/* Dialog Box */}
            {isOpen && (
                <div
                    className="fixed top-24 w-[90%] px-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-3 rounded-full border">
                    <div className='flex justify-between items-center'>
                        <div className='bg-[#F0F0F0] p-3 rounded-full'>
                            <IoSearch className='text-3xl text-[#1D4ED8] rotate-90' />
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-[#EBF0FB] p-3 rounded-full'>
                                    <BiSolidGrid className='text-3xl text-[#1D4ED8]' />
                                </div>
                                <div className='bg-[#FBE9ED] p-2 rounded-full'>
                                    <IoMdNotifications className='text-4xl text-[#D92550]' />
                                </div>
                                <button className='bg-[#ECEBED] p-2 rounded-full'>
                                    <img src={'/language_flog_icon.png'} alt='' className='w-9 h-9 object-contain' />
                                </button>
                                <div className='bg-[#EBF9F2] p-2 rounded-full'>
                                    <IoIosAnalytics className='text-4xl text-[#3AC47D]' />
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border-l pl-3'>
                                <button>
                                    <img src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/1.jpg" alt='' className='w-12 rounded-full' />
                                </button>
                                <FaAngleDown className='text-gray-600'/>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}