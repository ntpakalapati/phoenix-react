import { FaPlusCircle } from 'react-icons/fa';
import { RiCalendar2Line, RiPulseLine } from 'react-icons/ri';

export function Header() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between px-4 py-2 space-y-2 md:space-y-0">
      <div>
        <p className="text-[16px] font-medium leading-[19.2px] text-[#495057]">Good Morning, phoenix!</p>
        <p className="text-[13px] mt-1 leading-[19.5px] text-[#878A99]">Here's what's happening with your store today.</p>
      </div>
      <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-2 w-full md:w-auto">
        <div className="flex items-center border rounded-md w-full md:w-auto">
          <input
            type="text"
            readOnly
            value="01 Jan, 2024 to 31 Jan, 2024"
            className="py-2 w-full px-3 text-sm text-gray-700 bg-white border-r rounded-l-md focus:outline-none"
          />
          <button className="py-2 px-3 text-white bg-blue-600 rounded-r-md focus:outline-none">
            <RiCalendar2Line className="w-[12.5px] h-[19.5px]" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center w-full min-w-fit	 px-4 py-2 text-sm font-medium text-[#0AB39C] hover:text-white rounded-md bg-[#DAF4F0] hover:bg-[#0AB39C]">
            <FaPlusCircle className="w-[12.5px] h-[19.5px] mr-1" />
            Add Product
          </button>
          <button className="flex items-center justify-center w-[37.5px] h-[37.5px] text-[#299CDB] bg-[#DAF4F0] hover:bg-[#299CDB] hover:text-white rounded-md">
            <RiPulseLine className="w-[12.5px] h-[19.5px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
