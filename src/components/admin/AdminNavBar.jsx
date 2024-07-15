import { LuArrowLeftToLine } from "react-icons/lu";
import { AdminNavHome } from "./AdminNavHome";
import { Accordion } from "../ui/accordion";
import { AdminNavApps } from "./AdminNavApps";
import { AdminNavPages } from "./AdminNavPages";

export function AdminNavBar({ toggleSidebar }) {
    return (
        <nav className='h-full w-full flex flex-col text-[12.8px] leading-[19.008px] whitespace-nowrap font-[600px] text-[#3E465B]' style={{ fontFamily: 'Nunito Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' }}>
            <div className='flex-grow bg-white pr-[1px] py-[1px] overflow-hidden border-r border-r-black/25'>
                <div className='overflow-y-auto overflow-x-hidden h-full p-3 scrollbar navbar-scrollbar-content' id="style-1">
                    <div>
                        <Accordion type="single" collapsible>
                            <AdminNavHome />
                            <AdminNavApps />
                            <AdminNavPages/>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className='p-[16px] relative border-t border-t-black/25 border-r border-r-black/25 bg-white'>
                <div onClick={toggleSidebar} className="flex cursor-pointer justify-center gap-1 items-center">
                    <LuArrowLeftToLine /> <h2>Collapsed View</h2>
                </div>
            </div>
        </nav>
    );
}
