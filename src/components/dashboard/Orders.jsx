import * as React from "react";

const orders = [
  {
    id: "#VZ2111",
    customer: "Alex Smith",
    profile: "https://themesbrand.com/velzon/html/master/assets/images/users/avatar-1.jpg",
    product: "Clothes",
    totalAmount: "$109.00",
    vendor: "Zoetic Fashion",
    status: "Paid",
    rating: "5.0",
    votes: "61"
  },
  {
    id: "#VZ2112",
    customer: "Jansh Brown",
    profile: "https://themesbrand.com/velzon/html/master/assets/images/users/avatar-2.jpg",
    product: "Kitchen Storage",
    totalAmount: "$149.00",
    vendor: "Micro Design",
    status: "Pending",
    rating: "4.5",
    votes: "61"
  },
  {
    id: "#VZ2113",
    customer: "Ayaan Bowen",
    profile: "https://themesbrand.com/velzon/html/master/assets/images/users/avatar-3.jpg",
    product: "Bike Accessories",
    totalAmount: "$212.00",
    vendor: "Nesta Technologies",
    status: "Paid",
    rating: "4.9",
    votes: "89"
  },
  {
    id: "#VZ2114",
    customer: "Prezy Mark",
    profile: "https://themesbrand.com/velzon/html/master/assets/images/users/avatar-4.jpg",
    product: "Furniture",
    totalAmount: "$199.00",
    vendor: "Syntyce Solutions",
    status: "Unpaid",
    rating: "4.3",
    votes: "47"
  },
  {
    id: "#VZ2115",
    customer: "Vihan Hudda",
    profile: "https://themesbrand.com/velzon/html/master/assets/images/users/avatar-5.jpg",
    product: "Bags and Wallets",
    totalAmount: "$330.00",
    vendor: "iTest Factory",
    status: "Paid",
    rating: "4.7",
    votes: "161"
  },
];
const headers = ["Order ID", "Customer", "Product", "Amount", "Vendor", "Status", "Rating"]

export function Orders() {
  return (
    <div className="relative w-full overflow-x-auto">
      <table className="w-full caption-bottom">
        <thead className="border-b">
          <tr className="bg-[#F3F6F9] text-[13px] font-semibold leading-[19.5px] h-[44px]">
            {headers.map((header) => (
              <th key={header} className={`truncate h-12 p-[10px] ${header === "Amount" ? 'text-right' : 'text-left'} align-middle font-medium text-neutral-500 dark:text-neutral-400`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((items) => (
            <tr
              key={items.id}
              className="transition-colors hover:bg-neutral-100/50"
            >
              <td className="pl-2 align-middle text-[13px] font-medium leading-[19.5px] text-[#33416E]">{items.id}</td>
              <td className="py-[12px] px-1 align-middle truncate flex items-center gap-2 text-[13px] leading-[19.5px] text-[#212529] w-[140px]">
                <img
                  alt={`${items.customer} profile`}
                  src={items.profile}
                  className="h-[31px] w-[31px] rounded-full object-cover"
                />
                {items.customer}
              </td>
              <td className="align-middle truncate text-[13px] leading-[19.5px] text-[#212529]">{items.product}</td>
              <td className="align-middle text-center text-[13px] leading-[19.5px] text-[#0AB39C]">{items.totalAmount}</td>
              <td className="align-middle truncate text-[13px] leading-[19.5px] text-[#212529]">{items.vendor}</td>
              <td style={{textAlign: '-webkit-center'}}>
                <p
                  className={`px-2 py-1 w-fit rounded-md text-[9.75px] leading-[9.26px] font-semibold text-[#495057] 
                  ${items.status === "Pending"
                      ? "text-[#F78848] bg-[#FEF4E4]"
                      : items.status === "Unpaid"
                        ? "text-[#F05648] bg-[#FDE8E4]"
                        : "text-[#0AB39C] bg-[#DAF4F0]"
                    }`}
                >
                  {items.status}
                </p>
              </td>
              <td className="p-2 align-middle truncate text-[9.75px] leading-[9.26px] font-semibold text-[#495057]">
                {items.rating}{" "}
                <span className="text-[11px] leading-[13.2px] font-medium text-[#878A99]">({items.votes} votes)</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

