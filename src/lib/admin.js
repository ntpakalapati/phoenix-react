// Header Icons
import { CiGift } from "react-icons/ci";
import { RiSettings3Fill } from "react-icons/ri";
import { TbCircleNumber7Filled } from "react-icons/tb";
// Header DropDown Data
export const headerDropdown = [
    {
        itemName: "Mega Menu",
        itemIcon: <CiGift className="w-4 h-4 text-blue-300"/>,
        cardData: {
            title:"Menu Overview",
            des:"Dropdown for everyone Mega Menu",
            list:["KEY FIGURES","Accounts","Service Calendar","Knowledge Base"]

        }
    },
    {
        itemName: "Settings",
        itemIcon: <TbCircleNumber7Filled className="text-rose-600 w-[18px] h-[18px]"/>,
        cardData: {
            title:"Settings Overview",
            des:"Dropdown  for everyone Settings",
            list:["KEY FIGURES","Accounts","Service Calendar","Knowledge Base"]
        }
    },
    {
        itemName: "Projects",
        itemIcon: <RiSettings3Fill className="text-blue-300 w-4 h-4"/>,
        cardData: {
            title:"Projects Overview",
            des:"Dropdown for everyone Projects",
            list:["KEY FIGURES","Accounts","Service Calendar","Knowledge Base"]

        }
    }
];


// NavBar Details
