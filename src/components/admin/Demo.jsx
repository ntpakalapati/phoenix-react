import React from 'react';
import { LuArrowRightToLine } from "react-icons/lu";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, } from "../ui/dropdown-menu"
import { collapseData } from '../../lib/admin';

export function AdminCollapseSideBar({ toggleSidebar }) {
    return (
        <div className='h-full w-full flex flex-col'>
            <div className='flex-grow overflow-hidden pr-[1px] py-[1px]'>
                <div className='overflow-y-auto h-full p-2 scrollbar navbar-scrollbar-content ' id="style-1">
                    <ul className='flex flex-col items-center pt-4'>
                        {
                            collapseData.map((data, index) =>
                                <li key={index}>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className={`p-3 hover:rounded-md ${data.hoverCls}`}>
                                                <span>{data.IconName}</span>
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="absolute left-9 -top-8 " side={'right'}>
                                            <div className="relative w-64 h-fit bg-white border  border-black/45 rounded-md">
                                                <div className="absolute top-0 left-0 w-[18px] h-[18px] bg-white border  border-black/45  overflow-hidden transform rotate-45 border-r-0 border-t-0 -translate-x-[10px] translate-y-6"></div>
                                                <div>
                                                    <div className='pt-4 pb-2 border-b'>
                                                        <DropdownMenuLabel className="px-6">My Account</DropdownMenuLabel>
                                                    </div>
                                                    <div className='pb-4 pt-2.5 bg-white rounded-b-md'>
                                                        {
                                                            data.MenuItem.map((list =>
                                                                <DropdownMenuItem className="px-5 py-1.5 hover:bg-blue-50" key={list}>{list}</DropdownMenuItem>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className='p-[15.5px] relative bg-[#fafbfcbd]'>
                <div onClick={toggleSidebar} className="flex cursor-pointer justify-center gap-1 items-center">
                    <button >
                        <LuArrowRightToLine className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    )
}

