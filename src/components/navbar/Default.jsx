import { ChartCards } from "../dashboard/charts/ChartCards";
import { Header } from "../dashboard/Header";
import { SummaryCards } from "../dashboard/SummaryCards";
import { BestProducts } from "../dashboard/products/BestProducts";
import { TopSellers } from "../dashboard/products/TopSellers";
import { SourceChart } from "../dashboard/charts/SourceChart";
import { Orders } from "../dashboard/Orders";

export function Default() {
  return (
    <div className="p-4 space-y-4">
      <div style={{ fontFamily: 'Poppins,sans-serif' }}>
        <Header />
        <SummaryCards />
        <ChartCards />
        <div className="lg:flex block w-full px-[4px] gap-5">
          <BestProducts />
          <TopSellers />
        </div>
        <div className="lg:flex block w-full px-[4px] gap-5">
          <div className="bg-white shadow-md rounded-lg mt-4 lg:w-[35%] w-[100%]">
            <div className="flex justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-700">Store Visits by Source</h2>
              <p className='text-[12px] mt-1'>Reports</p>
            </div>
            <SourceChart />
          </div>
          <div className="bg-white shadow-md rounded-lg mt-4 lg:w-[65%] w-[100%]">
            <div className="flex justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-700">Recent Orders</h2>
              <p className='text-[12px] mt-1'>Reports</p>
            </div>
            <Orders />
          </div>
        </div>
      </div>
    </div>
  )
}
