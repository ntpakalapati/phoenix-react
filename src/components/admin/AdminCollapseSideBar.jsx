import React from 'react';
import { LuArrowRightToLine } from "react-icons/lu";
import { LuPieChart } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"


export function AdminCollapseSideBar({ toggleSidebar }) {
    return (
        <div className='h-full w-full flex flex-col'>
            <div className='flex-grow bg-white border-r border-r-black/25 overflow-hidden pr-[1px] py-[1px]'>
                <div className='overflow-y-auto h-full p-2 scrollbar ' id="style-1">
                    <ul className='space-y-4 flex flex-col items-center pt-4'>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <FiPhone className='text-lg' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="absolute left-4 -top-5 w-52" side={'right'}>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                <LuPieChart className='text-lg' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="absolute left-4 -top-5 w-52" side={'right'}>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                <IoCartOutline className='text-lg' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="absolute left-4 -top-5 w-52" side={'right'}>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>


                    </ul>
                </div>
            </div>
            <div className='p-[14px] relative border-t border-t-black/25 border-r border-r-black/25 bg-white'>
                <div onClick={toggleSidebar} className="flex cursor-pointer justify-center gap-1 items-center">
                    <button >
                        <LuArrowRightToLine className="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    )
}

