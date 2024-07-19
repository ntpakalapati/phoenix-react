import { IoMdMenu } from "react-icons/io";
import { Accordion } from "../ui/accordion";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "../ui/sheet";
import { AdminNavApps } from "./AdminNavApps";
import { AdminNavHome } from "./AdminNavHome";
import { AdminNavPages } from "./AdminNavPages";

export function AdminSmNavbar() {
  return (
    <div className="lg:hidden block">
      <Sheet>
        <SheetTrigger className="flex items-center justify-center">
          <IoMdMenu className="text-3xl text-[#3f6ad8ec]" />
        </SheetTrigger>
        <SheetContent side={'left'}>

          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
            </SheetDescription>
          </SheetHeader>
          <nav className='flex flex-col text-[12.8px] leading-[19.008px] whitespace-nowrap font-[600px] text-[#3E465B] pt-2 pb-4' style={{ fontFamily: 'Nunito Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' }}>
            <div className='flex-grow bg-white pr-[1px] py-[1px] overflow-hidden'>
              <div className='overflow-y-auto overflow-x-hidden h-full scrollbar' id="style-1">
                <div>
                  <Accordion type="single" collapsible>
                    <AdminNavHome />
                    <AdminNavApps />
                    <AdminNavPages />
                  </Accordion>
                </div>
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}