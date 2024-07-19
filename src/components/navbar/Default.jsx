import { ChartCards } from "../dashboard/charts/ChartCards";
import { Header } from "../dashboard/Header";
import { SummaryCards } from "../dashboard/SummaryCards";
import { BestProducts } from "../dashboard/products/BestProducts";
import { TopSellers } from "../dashboard/products/TopSellers";
import { SourceChart } from "../dashboard/charts/SourceChart";
import { Orders } from "../dashboard/Orders";
import { RiArrowDropDownLine } from "react-icons/ri";

export function Default() {
  return (
    <div className="p-4 space-y-4">
      <div style={{ fontFamily: 'Poppins,sans-serif' }}>
        <Header />
        <SummaryCards />
        <ChartCards />
        <div className="xl:flex block w-full px-[4px] gap-5">
          <BestProducts />
          <TopSellers />
        </div>
        <div className="xl:flex block w-full px-[4px] gap-5">
          <div className="bg-white shadow-md rounded-lg mt-4 xl:w-[40%] w-full">
            <div className="flex justify-between p-4 border-b mt-1">
              <p className="text-[16px] font-medium text-[#495057] leading-[19.2px]">Store Visits by Source</p>
              <span className='flex text-[13px] leading-[19.5px] ml-[2px] text-[#878A99]'>Reports <RiArrowDropDownLine className='mt-1' /></span>
            </div>
            <div className="flex justify-center">
              <div className="w-full md:w-[60%] xl:w-full">
                <SourceChart />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg mt-4 xl:w-[60%] w-full">
            <div className="flex justify-between p-4 border-b">
              <p className="text-[16px] mt-1 font-medium text-[#495057] leading-[19.2px]">Recent Orders</p>
              <p className='text-[13px] mt-1 leading-[19.5px] text-[#878A99]'>Reports</p>
            </div>
            <Orders />
          </div>
        </div>
      </div>
    </div>
  )
}
