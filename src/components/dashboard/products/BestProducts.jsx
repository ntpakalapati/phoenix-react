import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "./../../ui/table";
import Pagination from '../../common/Pagenation';

const prodcuts = [
  {
    name: 'Branded T-Shirts',
    date: '24 Apr 2021',
    price: '29.00',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/products/img-1.png',
  },
  {
    name: 'Bentwood Chair',
    date: '19 Mar 2021',
    price: '29.00',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/products/img-2.png',
  },
  {
    name: 'Borosil Paper Cup',
    date: '01 May 2021',
    price: '29.00',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/products/img-3.png',
  },
  {
    name: 'One Seater Sofa',
    date: '11 Dec 2021',
    price: '29.00',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/products/img-4.png',
  },
  {
    name: 'Stillbird Helmet',
    date: '27 Jan 2021',
    price: '29.00',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/products/img-5.png',
  },
  {
    name: 'Branded T-Shirts',
    date: '24 Apr 2021',
    price: '29.00',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/products/img-1.png',
  },
  {
    name: 'One Seater Sofa',
    date: '11 Dec 2021',
    price: '29.00',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/products/img-4.png',
  },
  {
    name: 'Stillbird Helmet',
    date: '27 Jan 2021',
    price: '29.00',
    orders: '62',
    stocks: '510',
    amount: '1,798',
    imageUrl:
      'https://themesbrand.com/velzon/html/master/assets/images/products/img-5.png',
  }
]

export function BestProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(prodcuts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = prodcuts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white shadow-md rounded-lg w-[100%] mt-4">
      <div className="flex justify-between p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-700">Best Selling Products</h2>
        <p className='text-[12px] mt-1'>SORT BY: Today</p>
      </div>
      <Table>
        <TableBody>
          {paginatedData.map((product, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex gap-x-4">
                  <div className='w-[48px] h-[48px] bg-[#F3F6F9] flex items-center justify-center rounded-md'>
                    <img alt="" src={product.imageUrl} className="h-[40px] w-[40px] max-w-full flex-none" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-6 text-gray-900">{product.name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.date}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-sm font-semibold leading-6 text-gray-900">{product.price}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Price</p>
              </TableCell>
              <TableCell>
                <p className="text-sm font-semibold leading-6 text-gray-900">{product.orders}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Orders</p>
              </TableCell>
              <TableCell>
                <p className="text-sm font-semibold leading-6 text-gray-900">{product.stocks}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Stocks</p>
              </TableCell>
              <TableCell>
                <p className="text-sm font-semibold leading-6 text-gray-900">{product.amount}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Amount</p>
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
