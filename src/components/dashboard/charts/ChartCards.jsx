import SampleChart from "./SampleChart";

export function ChartCards() {
  return (
    <div className="lg:flex  block w-full px-[4px] gap-6">
      <div className="bg-white shadow-md rounded-lg  mt-4 lg:w-[65%] w-[100%]">
        <div className="flex justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <div className="flex justify-end space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-md">ALL</button>
            <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-md">1M</button>
            <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-md">6M</button>
            <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-md">1Y</button>
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
      <div className="bg-white shadow-md rounded-lg  mt-4 lg:w-[35%] w-[100%]">
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700">Sales by Locations</h2>
          <div className="flex justify-end space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-md">Export Report</button>
            </div>
        </div>
        <img src="map.png" alt="Logo" className="object-contain p-2" />
      </div>
    </div>
  );
}
