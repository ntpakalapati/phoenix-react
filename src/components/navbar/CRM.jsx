import React, { useState } from 'react';
import { FaCartArrowDown, FaSearch, FaTimes } from "react-icons/fa";

export function CRM() {
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
        <div className="p-10">
            <div className="border p-4 border-black flex justify-between items-center">
                <div>
                    <FaCartArrowDown />
                </div>
                <div className={`flex items-center gap-2 ${fade}`}>
                    {!isSearchOpen ? (
                        <>
                            <FaSearch onClick={handleSearchClick} className="cursor-pointer" />
                            <div>
                                <button>MegaMenu</button>
                                <button>Settings</button>
                                <button>Projects</button>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <input type="text" className="border p-[0.1px]" placeholder="Search..." />
                            <FaTimes onClick={handleCloseClick} className="cursor-pointer" />
                        </div>
                    )}
                </div>
                <div>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    );
}
