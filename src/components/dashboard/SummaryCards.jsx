import { BiDollarCircle, BiShoppingBag, BiUserCircle, BiWallet } from "react-icons/bi";

const iconMapping = {
  TOTAL_EARNINGS: BiDollarCircle,
  ORDERS: BiShoppingBag,
  CUSTOMERS: BiUserCircle,
  MY_BALANCE: BiWallet,
};

const data = [
  {
    title: "TOTAL EARNINGS",
    value: "$559.25k",
    change: "+16.24 %",
    linkText: "View net earnings",
    bgColor: "#DAF4F0",
    textColor: "#0AB39C",
    iconName: "TOTAL_EARNINGS",
  },
  {
    title: "ORDERS",
    value: "36,894",
    change: "-3.57 %",
    linkText: "View all orders",
    bgColor: "#DFFAF0",
    textColor: "#F06548",
    iconName: "ORDERS",
  },
  {
    title: "CUSTOMERS",
    value: "183.35M",
    change: "+29.08 %",
    linkText: "See details",
    bgColor: "#FEF4E4",
    textColor: "#0AB39C",
    iconName: "CUSTOMERS",
  },
  {
    title: "MY BALANCE",
    value: "$165.89k",
    change: "+0.00 %",
    linkText: "Withdraw money",
    bgColor: "#E2E5ED",
    textColor: "#878A99",
    iconName: "MY_BALANCE",
  },
];

export function SummaryCards() {
  return (
    <div className="md:px-[4px] space-y-2">
      <div className="flex flex-wrap -mx-2 justify-center">
        {data.map((card, index) => {
          const IconComponent = iconMapping[card?.iconName];
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-[12px]">
              <div className="bg-white rounded-md shadow p-4 flex flex-col justify-between h-full transform transition-transform duration-300 hover:shadow-md hover:shadow-gray-500/50 hover:-translate-y-2">
                <div className="flex justify-between">
                  <p className="text-[13px] font-medium leading-[19.5px] uppercase text-[#878A99]">{card?.title}</p>
                  <p className={`text-[14px] font-medium leading-[16.8px] text-[${card?.textColor}]`}>{card?.change}</p>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <p className="text-[22px] font-semibold leading-[26.4px] text-[#495057]">{card?.value}</p>
                    <p className="text-[#405189] underline cursor-pointer mt-4 text-[13px] leading-[19.5px]">{card?.linkText}</p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-sm" style={{ backgroundColor: card.bgColor }}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
