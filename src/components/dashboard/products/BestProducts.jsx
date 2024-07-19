import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Pagination from '../../common/Pagenation';
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "./../../ui/table";

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
    <div className="bg-white shadow-md rounded-lg xl:w-[49%] w-[100%] mt-4">
      <div className="flex justify-between p-4 border-b">
        <p className="text-[16px] font-medium text-[#495057] leading-[19.2px]">Best Selling Products</p>
        <div className='flex mt-1'>
          <p className='text-[12px] font-semibold leading-[18px] text-[#212529] uppercase'>Sort By : </p>
          <span className='flex text-[13px] leading-[19.5px] ml-[2px] text-[#878A99]'>Today <RiArrowDropDownLine className='mt-1' /></span>
        </div>
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
                    <p className="text-[14px] mt-1 font-medium leading-[16.8px] text-[#495057]">{product.name}</p>
                    <p className="mt-1 truncate text-[13px] leading-[19.5px] text-[#878A99]">{product.date}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-[14px] mt-1 font-medium leading-[16.8px] text-[#495057]">{product.price}</p>
                <p className="mt-1 truncate text-[13px] leading-[19.5px] text-[#878A99]">Price</p>
              </TableCell>
              <TableCell>
                <p className="text-[14px] mt-1 font-medium leading-[16.8px] text-[#495057]">{product.orders}</p>
                <p className="mt-1 truncate text-[13px] leading-[19.5px] text-[#878A99]">Orders</p>
              </TableCell>
              <TableCell>
                <p className="text-[14px] mt-1 font-medium leading-[16.8px] text-[#495057]">{product.stocks}</p>
                <p className="mt-1 truncate text-[13px] leading-[19.5px] text-[#878A99]">Stocks</p>
              </TableCell>
              <TableCell>
                <p className="text-[14px] mt-1 font-medium leading-[16.8px] text-[#495057]">${product.amount}</p>
                <p className="mt-1 truncate text-[13px] leading-[19.5px] text-[#878A99]">Amount</p>
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
