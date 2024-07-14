import { useState } from 'react';
import { RiBarChartFill } from 'react-icons/ri';
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
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-1.png',
  },
  {
    name: 'Digitech Galaxy',
    des: 'John Roberts',
    price: 'Watches',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-2.png',
  },
  {
    name: 'Nesta Technologies',
    des: 'Harley Fuller',
    price: 'Bike Accessories',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-3.png',
  },
  {
    name: 'Zoetic Fashion',
    des: 'James Bowen',
    price: 'Clothes',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-4.png',
  },
  {
    name: 'iTest Factory',
    des: 'Oliver Tyler',
    price: 'Bags and Wallets',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-1.png',
  },
  {
    name: 'Digitech Galaxy',
    des: 'John Roberts',
    price: 'Watches',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-2.png',
  },
  {
    name: 'Meta4Systems',
    des: 'Zoe Dennis',
    price: 'Furniture',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/companies/img-5.png',
  }
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
    <div className="bg-white shadow-md rounded-lg w-[100%] mt-4">
      <div className="flex justify-between p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-700">Top Sellers</h2>
        <p className='text-[12px] mt-1'>Reports</p>
      </div>
      <Table>
        <TableBody>
          {paginatedData.map((companie, index) => (
            <TableRow key={index} className="text-[13px] leading-[19.5px] p-[12px]">
              <TableCell>
                <div className="flex gap-x-4">
                  <img alt="" src={companie.imageUrl} className="h-[30px] w-[30px] max-w-full flex-none" />
                  <div>
                    <p className="text-[14px] font-semibold leading-6 text-gray-900">{companie.name}</p>
                    <p className="mt-1 truncate text-[13px] leading-5 text-gray-500">{companie.des}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <p className="leading-6 text-gray-900">{companie.price}</p>
              </TableCell>
              <TableCell>
                <p className="font-semibold leading-6 text-gray-900">{companie.stocks}</p>
                <p className="mt-1 truncate leading-5 text-gray-500">Stocks</p>
              </TableCell>
              <TableCell>
                <p className="font-semibold leading-6 text-gray-900">${companie.amount}</p>
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
