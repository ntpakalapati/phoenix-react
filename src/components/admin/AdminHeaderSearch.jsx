
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { IoSearch } from 'react-icons/io5';
import { AdminHeaderDropdown } from "./AdminHeaderDropdown";

export function AdminHeaderSearch() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [fade, setFade] = useState('');

    const handleSearchClick = () => {
        setFade('fade-out');
        setTimeout(() => {
            setIsSearchOpen(true);
            setFade('fade-in');
        }, 500);
    };

    const handleCloseClick = () => {
        setFade('fade-out');
        setTimeout(() => {
            setIsSearchOpen(false);
            setFade('fade-in');
        }, 500);
    };
    return (
        <div className={`hidden lg:flex items-center gap-3 ${fade}`}>
            {!isSearchOpen ? (
                <div className="flex items-center gap-4">
                    <div className="bg-gray-200 p-2.5 rounded-full cursor-pointer" onClick={handleSearchClick}>
                        <ImSearch className="rotate-90 text-blue-700 text-xl" />
                    </div>
                    <AdminHeaderDropdown />
                </div>
            ) : (
                <div className="flex items-center gap-2 relative">
                    <IoSearch className='absolute text-xl left-2 text-gray-500 cursor-pointer' />
                    <input type="text" className="border-[2px] focus:outline-none focus:ring py-[4.5px] w-96 focus:border-none rounded-full px-8 border-gray-300" placeholder="Search..." />
                    <FaTimes onClick={handleCloseClick} className="cursor-pointer text-gray-600" />
                </div>
            )}
        </div>
    )
}