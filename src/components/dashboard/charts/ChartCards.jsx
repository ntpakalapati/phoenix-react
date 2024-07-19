import SampleChart from "./SampleChart";

export function ChartCards() {
  return (
    <div className="xl:flex  block w-full px-[4px] gap-6">
      <div className="bg-white shadow-md rounded-lg  mt-4 xl:w-[65%] w-[100%]">
        <div className="flex justify-between p-4">
          <p className="text-[16px] font-medium text-[#495057] leading-[19.2px]">Revenue</p>
          <div className="flex justify-end space-x-1">
            <button className="p-1 rounded-[4px] text-[12px] font-medium text-[#3577F1] bg-[#E1EBFD] hover:text-white hover:bg-[#3577F1]">ALL</button>
            <button className="p-1 rounded-[4px] text-[12px] font-medium text-[#3577F1] bg-[#E1EBFD] hover:text-white hover:bg-[#3577F1]">1M</button>
            <button className="p-1 rounded-[4px] text-[12px] font-medium text-[#3577F1] bg-[#E1EBFD] hover:text-white hover:bg-[#3577F1]">6M</button>
            <button className="p-1 rounded-[4px] text-[12px] font-medium text-[#405189] bg-[#E2E5ED] hover:text-white hover:bg-[#405189]">1Y</button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 divide-x border-t border-b p-3">
          <div className="text-center">
            <p className="text-2xl font-bold">7,585</p>
            <p className="text-sm text-gray-500">Orders</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">$22.89k</p>
            <p className="text-sm text-gray-500">Earnings</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">367</p>
            <p className="text-sm text-gray-500">Refunds</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">18.92%</p>
            <p className="text-sm text-gray-500">Conversion Ratio</p>
          </div>
        </div>
        <div className="mt-4 p-4">
          <SampleChart />
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg  mt-4 xl:w-[35%] w-[100%]">
        <div className="flex justify-between p-4 border-b">
          <p className="text-[16px] font-medium text-[#495057] leading-[19.2px]">Sales by Locations</p>
          <div className="flex justify-end space-x-2">
            <button className="px-2 py-1 text-[11.3px] leading-[17.06px] text-[#405189] bg-[#E2E5ED] hover:text-white hover:bg-[#405189] rounded-[4px]">Export Report</button>
          </div>
        </div>
        <div className="lg:block flex justify-center">
          <img src="map.png" alt="Logo" className="object-contain p-2" />
        </div>
      </div>
    </div>
  );
}
