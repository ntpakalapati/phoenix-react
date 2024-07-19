import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPlusCircle } from 'react-icons/fa';
import { RiCalendar2Line } from 'react-icons/ri';

const formatDate = (date) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

const getStartOfMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
};

const getEndOfMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0);
};

export function Header() {
  const [startDate, setStartDate] = useState(getStartOfMonth());
  const [endDate, setEndDate] = useState(getEndOfMonth());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const formattedDate =
    startDate && endDate
      ? `${formatDate(startDate)} to ${formatDate(endDate)}`
      : "";

  return (
    <div className="flex flex-col md:flex-row items-start justify-between px-4 py-2 space-y-2 md:space-y-0">
      <div>
        <p className="text-[16px] font-medium leading-[19.2px] text-[#495057]">Good Morning, phoenix!</p>
        <p className="text-[13px] mt-1 leading-[19.5px] text-[#878A99]">Here's what's happening with your store today.</p>
      </div>
      <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-2 w-full md:w-auto">
        <div className="flex items-center border rounded-md">
          <input
            type="text"
            readOnly
            value={formattedDate}
            className="py-2 w-full px-4 text-sm md:min-w-[270px] text-gray-700 bg-white border-r rounded-l-md focus:outline-none"
          />
          <button
            className="py-2 px-3 text-white bg-blue-600 rounded-r-md focus:outline-none"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            <RiCalendar2Line className="w-[12.5px] h-[19.5px]" />
          </button>
          {showDatePicker && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-10"
                onClick={() => setShowDatePicker(false)}
              ></div>
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg z-20">
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                />
              </div>
            </>
          )}
        </div>
        <button className="flex items-center w-auto min-w-fit	 px-4 py-2 text-sm font-medium text-[#0AB39C] hover:text-white rounded-md bg-[#DAF4F0] hover:bg-[#0AB39C]">
          <FaPlusCircle className="w-[12.5px] h-[19.5px] mr-1" />
          Add Product
        </button>
      </div>
    </div>
  );
}
