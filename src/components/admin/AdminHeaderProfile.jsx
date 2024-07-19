import { FaSignOutAlt } from "react-icons/fa";
import { IoMdHelpCircleOutline, IoMdSettings } from "react-icons/io";
import { LuPieChart } from "react-icons/lu";
import { MdLock, MdPerson, MdPersonAddAlt } from "react-icons/md";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function AdminHeaderProfile() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                    <img src={'/profile_logo.webp'} alt='Logo' className='w-10 h-10 rounded-full' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3 absolute -left-[19rem] ">
                <div className="relative w-[330px]  bg-white border  rounded-md">
                    <div className="absolute top-0 right-0 w-6 h-6 bg-white border overflow-hidden transform rotate-45 border-r-0 border-b-0 -translate-x-6 -translate-y-3"></div>
                    <div>
                        <div className="flex flex-col justify-center items-center pt-6 pb-4">
                            <img src={'/profile_logo.webp'} alt='Logo' className='w-12 h-12 rounded-full' />
                            <h2 className="font-semibold mt-1">Jerry Seinfeld</h2>
                            <input type="text" className="border w-[92%] mx-auto rounded-md py-1.5 focus:outline-none px-2 font-semibold mt-4 placeholder:text-sm placeholder:font-normal" placeholder="Update your status" />
                        </div>
                        <div className=" space-y-2 border-b pb-4">
                            <DropdownMenuItem>
                                <button className="hover:bg-gray-400 w-full text-start hover:text-gray-50 px-6 py-1 flex items-center gap-1"><MdPerson />Profile</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className="hover:bg-gray-400 w-full text-start hover:text-gray-50 px-6 py-1 flex items-center gap-1"><LuPieChart />Dashboard</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className="hover:bg-gray-400 w-full text-start hover:text-gray-50 px-6 py-1 flex items-center gap-1"><MdLock /> Posts & Activity</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className="hover:bg-gray-400 w-full text-start hover:text-gray-50 px-6 py-1 flex items-center gap-1"><IoMdSettings /> Settings & Privacy</button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button className="hover:bg-gray-400 w-full text-start hover:text-gray-50 px-6 py-1 flex items-center gap-1"><IoMdHelpCircleOutline /> Helper Center</button>
                            </DropdownMenuItem>
                        </div>
                        <div className="py-4">
                            <DropdownMenuItem>
                                <button className="hover:bg-gray-400 w-full text-start hover:text-gray-50 px-6 py-1 flex items-center gap-1"><MdPersonAddAlt /> Add Another Account</button>
                            </DropdownMenuItem>
                        </div>
                        <div className="px-4 py-4 border-t">
                            <DropdownMenuItem>
                                <button className="text-center p-2 rounded-md bg-gray-100 w-full flex items-center gap-1 justify-center"><FaSignOutAlt /> Sign out</button>
                            </DropdownMenuItem>
                            <ul className="list-disc text-xs text-gray-700 flex flex-row mt-2 justify-center items-center gap-6">
                                <li>Privacy policy</li>
                                <li>Terms</li>
                                <li>Cookies</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}