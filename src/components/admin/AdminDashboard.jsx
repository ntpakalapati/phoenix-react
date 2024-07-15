import { LuLayoutGrid } from "react-icons/lu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "../ui/dropdown-menu";
import { TiGlobeOutline } from "react-icons/ti";
import { TbPigMoney } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { RxLapTimer } from "react-icons/rx";
import { BsRadioactive } from "react-icons/bs";

export function AdminDashboard() {
    const headerDashboard = [
        { title: 'Automation', iconName: <TiGlobeOutline className="text-4xl md:text-6xl" /> },
        { title: 'Reports', iconName: <TbPigMoney className="text-4xl md:text-6xl" /> },
        { title: 'Settings', iconName: <IoIosSettings className="text-4xl md:text-6xl" /> },
        { title: 'Content', iconName: <RiPagesLine className="text-4xl md:text-6xl" /> },
        { title: 'Activity', iconName: <RxLapTimer className="text-4xl md:text-6xl" /> },
        { title: 'Contacts', iconName: <BsRadioactive className="text-4xl md:text-6xl" /> }
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                    <LuLayoutGrid className='text-2xl' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" absolute -left-[16rem] md:-left-[23rem] mt-2 ">
                <div className=" w-[330px] md:w-[380px] bg-white rounded-md">
                    <div className="text-center px-4 py-6 bg-[#8873B7] rounded-t-md">
                        <h2 className="text-xl md:text-2xl text-white  font-medium">Grid Dashboard</h2>
                        <p className="text-gray-100 text-base md:text-lg">Easy grid navigation inside dropdowns</p>
                    </div>
                    <div className="grid grid-cols-3">
                        {
                            headerDashboard.map((data, index) =>
                                <DropdownMenuItem key={index} className="flex hover:bg-gray-300 hover:text-blue-600 dashboard-border p-6 justify-center items-center">
                                    <div>
                                        <span className="flex items-center justify-center">{data.iconName}</span>
                                        <h2>{data.title}</h2>
                                    </div>
                                </DropdownMenuItem>
                            )
                        }
                    </div>
                    <div className="text-center py-4 border-t">
                        <DropdownMenuItem>
                            <button className="py-2 px-6 text-xs md:text-sm font-medium bg-blue-600 text-white rounded-md">Follow-ups</button>
                        </DropdownMenuItem>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}