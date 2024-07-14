import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./../ui/table";

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

export function Orders() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#F3F6F9] hover:bg-[#F3F6F9] text-[13px] font-semibold leading-[19.5px] h-[44px]">
          <TableHead className="w-[100px]">Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Product</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Vendor</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Rating</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((items) => (
          <TableRow key={items.id}>
            <TableCell className="text-[13px] font-medium leading-[19.5px] text-[#33416E]">{items.id}</TableCell>
            <TableCell className="truncate flex items-center gap-2 text-[13px] leading-[19.5px] text-[#212529]">
              <img
                alt={`${items.customer} profile`}
                src={items.profile}
                className="h-[31px] w-[31px] rounded-full object-cover"
              />
              {items.customer}
            </TableCell>
            <TableCell className="truncate text-[13px] leading-[19.5px] text-[#212529]">{items.product}</TableCell>
            <TableCell className="text-right text-[13px] leading-[19.5px] text-[#0AB39C]">{items.totalAmount}</TableCell>
            <TableCell className="truncate text-[13px] leading-[19.5px] text-[#212529]">{items.vendor}</TableCell>
            <TableCell>
              <p className={`px-2 py-1 w-fit rounded-md text-[9.75px] leading-[9.26px] font-semibold text-[#495057] 
              ${items.status === "Pending" ? 'text-[#F78848] bg-[#FEF4E4]' : items.status === "Unpaid" ? 'text-[#F05648] bg-[#FDE8E4]' : 'text-[#0AB39C] bg-[#DAF4F0]'}`}>{items.status}</p>
            </TableCell>
            <TableCell className="truncate text-[9.75pxpx] leading-[9.26px] font-semibold text-[#495057]">
              {items.rating}{" "}
              <span className="text-[11px] leading-[13.2px] font-medium text-[#878A99]">({items.votes} votes)</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
