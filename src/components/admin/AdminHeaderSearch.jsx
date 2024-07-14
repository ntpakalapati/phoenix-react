import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { headerDropdown } from "../../lib/admin";
import { FaAngleDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';
import { useState } from "react";
import { ImSearch } from "react-icons/im";

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
                <>
                    <div className="bg-gray-200 p-2.5 rounded-full cursor-pointer" onClick={handleSearchClick}>
                        <ImSearch className="rotate-90 text-blue-700 text-xl" />
                    </div>
                    <div className="flex gap-3">
                        {headerDropdown.map((headerData, index) =>
                            <DropdownMenu key={index}>
                                <DropdownMenuTrigger asChild>
                                    <h2 className="flex cursor-pointer text-sm items-center gap-1 font-medium">
                                        {headerData.itemIcon}
                                        <span className="flex items-center">
                                            {headerData.itemName}
                                            <FaAngleDown className="mt-[3px]" />
                                        </span>
                                    </h2>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <div>
                                        <div className="bg-black rounded-t-md text-white p-2 text-center px-4">
                                            <h2 className="font-bold text-lg">{headerData.cardData.title}</h2>
                                            <p className="text-base">{headerData.cardData.des}</p>
                                        </div>
                                        <div className="p-4">
                                            <ul className="space-y-4 text-sm font-semibold">
                                                {headerData.cardData.list.map((listItem, index) =>
                                                    <li key={index}>{listItem}</li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="p-4 border-t">
                                            <button className="p-1 rounded-md px-6 font-medium text-white bg-rose-600">Cancel</button>
                                        </div>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>
                </>
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