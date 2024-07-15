import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMessageTyping } from "react-icons/ti";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "../ui/dropdown-menu";

export function AdminNotification() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                    <IoIosNotificationsOutline className='text-2xl' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3 absolute -left-[13rem] md:-left-[24rem] ">
                <div className="relative w-[320px]  md:w-[420px]  bg-white border ">
                    <div className="absolute top-0 right-0 w-6 h-6 bg-white border overflow-hidden transform rotate-45 border-r-0 border-b-0 -translate-x-[98px] md:-translate-x-6 -translate-y-3"></div>
                    <div>
                        <div className="flex justify-between px-4 pt-4 pb-2 border-b">
                            <h4 className="font-bold">Notifications</h4>
                            <button className="text-blue-600 hover:underline">Mark all as read</button>
                        </div>

                        <div className="scroll-bar-border h-96" id="style-1">

                            <DropdownMenuItem>
                                <div className="flex px-2 py-6 hover:bg-gray-300">
                                    <div className="w-[15%] flex justify-center">
                                        <img src={'/profile_logo.webp'} alt='Logo' className='w-10 h-10 rounded-full' />
                                    </div>
                                    <div className="w-[70%]">
                                        <h4 className="font-bold">Jessie Samson</h4>
                                        <p className="flex items-center"><TiMessageTyping className="text-xl" />Mentioned you in a comment. 10m</p>
                                        <p className=""><span className="font-medium">10:41</span> AM August 7,2021f</p>
                                    </div>
                                    <div className="w-[15%] flex justify-center items-center">
                                        <button className="text-center hover:border px-6 py-2 font-bold rounded-md">...</button>
                                    </div>
                                </div>
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <div className="flex px-2 py-6 border-t bg-[#EFF2F6] hover:bg-gray-300">
                                    <div className="w-[15%] flex justify-center">
                                        <img src={'/profile_logo.webp'} alt='Logo' className='w-10 h-10 rounded-full' />
                                    </div>
                                    <div className="w-[70%]">
                                        <h4 className="font-bold">Jessie Samson</h4>
                                        <p className="flex items-center"><TiMessageTyping className="text-xl" />Mentioned you in a comment. 10m</p>
                                        <p className=""><span className="font-medium">10:41</span> AM August 7,2021f</p>
                                    </div>
                                    <div className="w-[15%] flex justify-center items-center">
                                        <button className="text-center hover:border px-6 py-2 font-bold rounded-md">...</button>
                                    </div>
                                </div>
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <div className="flex px-2 py-6 border-t bg-[#EFF2F6] hover:bg-gray-300">
                                    <div className="w-[15%] flex justify-center">
                                        <img src={'/profile_logo.webp'} alt='Logo' className='w-10 h-10 rounded-full' />
                                    </div>
                                    <div className="w-[70%]">
                                        <h4 className="font-bold">Jessie Samson</h4>
                                        <p className="flex items-center"><TiMessageTyping className="text-xl" />Mentioned you in a comment. 10m</p>
                                        <p className=""><span className="font-medium">10:41</span> AM August 7,2021f</p>
                                    </div>
                                    <div className="w-[15%] flex justify-center items-center">
                                        <button className="text-center hover:border px-6 py-2 font-bold rounded-md">...</button>
                                    </div>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>                                    <div className="flex px-2 py-6 border-t bg-[#EFF2F6] hover:bg-gray-300">
                                <div className="w-[15%] flex justify-center">
                                    <img src={'/profile_logo.webp'} alt='Logo' className='w-10 h-10 rounded-full' />
                                </div>
                                <div className="w-[70%]">
                                    <h4 className="font-bold">Jessie Samson</h4>
                                    <p className="flex items-center"><TiMessageTyping className="text-xl" />Mentioned you in a comment. 10m</p>
                                    <p className=""><span className="font-medium">10:41</span> AM August 7,2021f</p>
                                </div>
                                <div className="w-[15%] flex justify-center items-center">
                                    <button className="text-center hover:border px-6 py-2 font-bold rounded-md">...</button>
                                </div>
                            </div>
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <div className="flex px-2 py-6 border-t bg-[#EFF2F6] hover:bg-gray-300">
                                    <div className="w-[15%] flex justify-center">
                                        <img src={'/profile_logo.webp'} alt='Logo' className='w-10 h-10 rounded-full' />
                                    </div>
                                    <div className="w-[70%]">
                                        <h4 className="font-bold">Jessie Samson</h4>
                                        <p className="flex items-center"><TiMessageTyping className="text-xl" />Mentioned you in a comment. 10m</p>
                                        <p className=""><span className="font-medium">10:41</span> AM August 7,2021f</p>
                                    </div>
                                    <div className="w-[15%] flex justify-center items-center">
                                        <button className="text-center hover:border px-6 py-2 font-bold rounded-md">...</button>
                                    </div>
                                </div>
                            </DropdownMenuItem>
                        </div>
                    </div>
                    <div className="p-2 border-t text-center">
                        <button className="text-blue-800 font-semibold text-sm">Notification History</button>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}