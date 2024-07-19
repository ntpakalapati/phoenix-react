import { CiGift } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { headerDropdown, headerMegaMenu } from "../../lib/admin";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function AdminHeaderDropdown() {
  return (
    <div className="flex gap-8">
      {/* Mega Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <h2 className="flex cursor-pointer text-sm items-center gap-1 font-medium">
            <CiGift className="w-4 h-4 text-blue-300" />
            <span className="flex items-center">
              Mega Menu
              <FaAngleDown className="mt-[3px]" />
            </span>
          </h2>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" mt-3 absolute -left-[18rem] ">
          <div className="relative w-[800px]  bg-white border rounded ">
            <div className="absolute top-0 right-0 w-6 h-6 bg-white border overflow-hidden transform rotate-45 border-r-0 border-b-0 -translate-x-[33rem] -translate-y-3"></div>
            <div>
              <div className="p-4 bg-[#ffffff] shadow-md rounded ">
                <div className="grid grid-cols-3">
                  {
                    headerMegaMenu.map((megaData, index) =>
                      <div key={index} className={megaData.border_style}>
                        <DropdownMenuLabel className="text-base">{megaData.Title}</DropdownMenuLabel>
                        {
                          megaData.listData.map(data =>
                            <DropdownMenuItem className="px-2 py-1.5" key={data.list} asChild>
                              <div className="flex text-[14.5px] items-center gap-1 cursor-pointer hover:text-blue-800">
                                {data.IconName} <span className="text-black">{data.list}</span>
                              </div>
                            </DropdownMenuItem>
                          )
                        }
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex gap-8">
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
            <DropdownMenuContent className=" absolute -left-[8rem] mt-2 ">
              <div className=" w-[280px]">
                <div className="bg-black rounded-t-md text-white p-2 text-center px-4">
                  <h2 className="font-bold text-lg">{headerData.cardData.title}</h2>
                  <p className="text-base">{headerData.cardData.des}</p>
                </div>
                <div className="bg-white py-3">
                  {headerData.cardData.list.map((listItem, index) =>
                    <DropdownMenuItem className="px-6 py-2 hover:bg-blue-200" key={index} asChild>
                      <div className="flex font-semibold items-center gap-1 cursor-pointer">
                        {listItem}
                      </div>
                    </DropdownMenuItem>
                  )}
                </div>
                <div className="p-4 border-t bg-white">
                  <DropdownMenuItem asChild>
                    <button className="p-1 rounded-md px-4 text-sm font-medium text-white bg-rose-600">Cancel</button>
                  </DropdownMenuItem>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}