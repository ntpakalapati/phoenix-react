import { useState } from 'react';
import { RiArrowDropDownLine, RiBarChartFill } from 'react-icons/ri';
import Pagination from '../../common/Pagenation';
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "./../../ui/table";

const companies = [
  {
    name: 'iTest Factory',
    des: 'Oliver Tyler',
    price: 'Bags and Wallets',
    orders: '32',
    stocks: '510',
    amount: '798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-1.png',
  },
  {
    name: 'Digitech Galaxy',
    des: 'John Roberts',
    price: 'Watches',
    orders: '79',
    stocks: '895',
    amount: '1,198',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-2.png',
  },
  {
    name: 'Nesta Technologies',
    des: 'Harley Fuller',
    price: 'Bike Accessories',
    orders: '90',
    stocks: '3470',
    amount: '19,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-3.png',
  },
  {
    name: 'Zoetic Fashion',
    des: 'James Bowen',
    price: 'Clothes',
    orders: '42',
    stocks: '5488',
    amount: '22,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-4.png',
  },
  {
    name: 'Meta4Systems',
    des: 'Zoe Dennis',
    price: 'Furniture',
    orders: '55',
    stocks: '4100',
    amount: '11,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-5.png',
  },
  {
    name: 'Nesta Technologies',
    des: 'Harley Fuller',
    price: 'Bike Accessories',
    orders: '90',
    stocks: '3470',
    amount: '19,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-3.png',
  },
  {
    name: 'Zoetic Fashion',
    des: 'James Bowen',
    price: 'Clothes',
    orders: '42',
    stocks: '5488',
    amount: '22,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-4.png',
  },
  {
    name: 'Meta4Systems',
    des: 'Zoe Dennis',
    price: 'Furniture',
    orders: '55',
    stocks: '4100',
    amount: '11,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-5.png',
  },
]

export function TopSellers() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(companies.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = companies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white shadow-md rounded-lg xl:w-[49%] w-[100%] mt-4">
      <div className="flex justify-between p-4 border-b mt-1">
        <p className="text-[16px] font-medium text-[#495057] leading-[19.2px]">Top Sellers</p>
        <span className='flex text-[13px] leading-[19.5px] text-[#878A99]'>Reports <RiArrowDropDownLine className='mt-1' /></span>
      </div>
      <Table>
        <TableBody>
          {paginatedData.map((companie, index) => (
            <TableRow key={index} className="text-[13px] leading-[19.5px] p-[12px]">
              <TableCell>
                <div className="flex gap-x-2">
                  <div className='w-[40px] h-[48px] flex items-center justify-center'>
                    <img alt="" src={companie.imageUrl} className="h-[30px] w-[30px] max-w-full flex-none" />
                  </div>
                  <div>
                    <p className="text-[14px] truncate mt-1 font-medium leading-[16.8px] text-[#495057]">{companie.name}</p>
                    <p className="mt-1 truncate text-[13px] leading-[19.5px] text-[#878A99]">{companie.des}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <p className="truncate text-[13px] leading-[19.5px] text-[#878A99]">{companie.price}</p>
              </TableCell>
              <TableCell>
                <p className="text-[14px] mt-1 font-medium leading-[16.8px] text-[#495057]">{companie.stocks}</p>
                <p className="mt-1 truncate text-[13px] leading-[19.5px] text-[#878A99]">Stocks</p>
              </TableCell>
              <TableCell>
                <p className="text-[14px] font-medium leading-[16.8px] text-[#495057]">${companie.amount}</p>
              </TableCell>
              <TableCell>
                <div className="font-semibold leading-6 flex text-gray-900">{companie.orders}% <RiBarChartFill className='ml-1 mt-1 text-[#0AB39C]' /></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between p-4 border-t bottom-0">
        <p className='text-[13px] text-[#878A99]'>Showing 5 of 25 Results</p>
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          /></div>
      </div>
    </div>
  );
}
