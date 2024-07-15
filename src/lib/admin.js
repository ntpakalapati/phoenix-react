// Header Icons
import { RiSettings3Fill } from "react-icons/ri";
import { TbCircleNumber7Filled } from "react-icons/tb";


import { LuInbox } from "react-icons/lu";
import { FiBook } from "react-icons/fi";
import { GrGallery } from "react-icons/gr";
import { CiFileOn } from "react-icons/ci";


import { LuPieChart } from "react-icons/lu";
import { IoCartOutline, IoShareSocial } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { PiNotepad } from 'react-icons/pi';
import { CiChat1 } from 'react-icons/ci';
import { SiEventstore } from 'react-icons/si';
import { RiInboxFill } from 'react-icons/ri';

// Header DropDown Data
export const headerDropdown = [
    {
        itemName: "Settings",
        itemIcon: <TbCircleNumber7Filled className="text-rose-600 w-[18px] h-[18px]" />,
        cardData: {
            title: "Settings Overview",
            des: "Dropdown  for everyone Settings",
            list: ["KEY FIGURES", "Accounts", "Service Calendar", "Knowledge Base"]
        }
    },
    {
        itemName: "Projects",
        itemIcon: <RiSettings3Fill className="text-blue-300 w-4 h-4" />,
        cardData: {
            title: "Projects Overview",
            des: "Dropdown for everyone Projects",
            list: ["KEY FIGURES", "Accounts", "Service Calendar", "Knowledge Base"]

        }
    }
];


export const headerMegaMenu = [
    {
        Title: 'Overview', listData: [
            { hoverCls:'hover:bg-gray-300',IconName: <LuInbox />, list: 'Contacts' },
            { hoverCls:'hover:bg-gray-300',IconName: <FiBook />, list: 'D Incidents' },
            { hoverCls:'hover:bg-gray-300',IconName: <GrGallery />, list: 'Companies' },
            { hoverCls:'hover:bg-gray-300',IconName: <CiFileOn />, list: 'Dashboards' },
        ], border_style: 'border-r p-4'
    },
    {
        Title: 'Favourites', listData: [
            { hoverCls:'hover:bg-gray-300',IconName: null, list: 'Reports Conversions' },
            { hoverCls:'hover:bg-gray-300',IconName: null, list: 'Quick Start' },
            { hoverCls:'hover:bg-gray-300',IconName: null, list: 'Users & Groups' },
            { hoverCls:'hover:bg-gray-300',IconName: null, list: 'Proprieties' },
        ], border_style: 'border-r p-4'
    },
    {
        Title: 'Sales & Marketing', listData: [
            { hoverCls:'hover:bg-gray-300',IconName: null, list: 'Queues' },
            { hoverCls:'hover:bg-gray-300',IconName: null, list: 'Resource Groups' },
            { hoverCls:'hover:bg-gray-300',IconName: null, list: 'Goal Metrics' },
            { hoverCls:'hover:bg-gray-300',IconName: null, list: 'Campaigns' },
        ], border_style: 'p-4'
    },
]



export const collapseData = [
    { hoverCls:'hover:bg-gray-300',IconName: <LuPieChart className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <IoCartOutline className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <FiPhone className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <PiNotepad className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <CiChat1 className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <SiEventstore className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <RiInboxFill className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <IoShareSocial className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <LuPieChart className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <IoCartOutline className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <FiPhone className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <PiNotepad className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <CiChat1 className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <SiEventstore className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'hover:bg-gray-300',IconName: <RiInboxFill className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'',IconName: <div className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'',IconName: <div className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'',IconName: <div className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'',IconName: <div className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'',IconName: <div className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'',IconName: <div className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
    { hoverCls:'',IconName: <div className='text-lg' />, LabelName: 'My Account', MenuItem: ["Profile", "Billing", "Team", "Subscription"] },
]



export const AdminSideBarHome = [
    {Link:'/eComm',Title:'E commerce'},{Link:'/projMgmt',Title:'Project management'},{Link:'/crm',Title:'CRM'}
]




export const DemoCities = [
    {"full_Name": "Amsterdam"},
    {"full_Name": "Athens"},
    {"full_Name": "Atlanta"},
    {"full_Name": "Ankara"},
    {"full_Name": "Auckland"},
    {"full_Name": "Adelaide"},
    {"full_Name": "Bangkok"},
    {"full_Name": "Berlin"},
    {"full_Name": "Buenos Aires"},
    {"full_Name": "Barcelona"},
    {"full_Name": "Brussels"},
    {"full_Name": "Budapest"},
    {"full_Name": "Cairo"},
    {"full_Name": "Chicago"},
    {"full_Name": "Copenhagen"},
    {"full_Name": "Cape Town"},
    {"full_Name": "Calgary"},
    {"full_Name": "Chennai"},
    {"full_Name": "Dubai"},
    {"full_Name": "Dublin"},
    {"full_Name": "Dakar"},
    {"full_Name": "Dallas"},
    {"full_Name": "Durban"},
    {"full_Name": "Dresden"},
    {"full_Name": "Edinburgh"},
    {"full_Name": "Essen"},
    {"full_Name": "Eindhoven"},
    {"full_Name": "El Paso"},
    {"full_Name": "Ensenada"},
    {"full_Name": "Esfahan"},
    {"full_Name": "Florence"},
    {"full_Name": "Frankfurt"},
    {"full_Name": "Fukuoka"},
    {"full_Name": "Fortaleza"},
    {"full_Name": "Fresno"},
    {"full_Name": "Fes"},
    {"full_Name": "Guangzhou"},
    {"full_Name": "Geneva"},
    {"full_Name": "Glasgow"},
    {"full_Name": "Guadalajara"},
    {"full_Name": "Genoa"},
    {"full_Name": "Gdansk"},
    {"full_Name": "Hong Kong"},
    {"full_Name": "Helsinki"},
    {"full_Name": "Hanoi"},
    {"full_Name": "Houston"},
    {"full_Name": "Hamburg"},
    {"full_Name": "Harare"},
    {"full_Name": "Istanbul"},
    {"full_Name": "Islamabad"},
    {"full_Name": "Irkutsk"},
    {"full_Name": "Innsbruck"},
    {"full_Name": "Indianapolis"},
    {"full_Name": "Izmir"},
    {"full_Name": "Jakarta"},
    {"full_Name": "Johannesburg"},
    {"full_Name": "Jerusalem"},
    {"full_Name": "Jeddah"},
    {"full_Name": "Jaipur"},
    {"full_Name": "Jinan"},
    {"full_Name": "Kolkata"},
    {"full_Name": "Kyoto"},
    {"full_Name": "Kuala Lumpur"},
    {"full_Name": "Karachi"},
    {"full_Name": "Kathmandu"},
    {"full_Name": "Krakow"},
    {"full_Name": "London"},
    {"full_Name": "Los Angeles"},
    {"full_Name": "Lisbon"},
    {"full_Name": "Lima"},
    {"full_Name": "Lyon"},
    {"full_Name": "Lahore"},
    {"full_Name": "Mumbai"},
    {"full_Name": "Madrid"},
    {"full_Name": "Melbourne"},
    {"full_Name": "Manila"},
    {"full_Name": "Montreal"},
    {"full_Name": "Moscow"},
    {"full_Name": "New Delhi"},
    {"full_Name": "Nairobi"},
    {"full_Name": "Naples"},
    {"full_Name": "Nice"},
    {"full_Name": "Nuremberg"},
    {"full_Name": "Nagoya"},
    {"full_Name": "Osaka"},
    {"full_Name": "Oslo"},
    {"full_Name": "Ottawa"},
    {"full_Name": "Okinawa"},
    {"full_Name": "Oaxaca"},
    {"full_Name": "Paris"},
    {"full_Name": "Prague"},
    {"full_Name": "Porto"},
    {"full_Name": "Philadelphia"},
    {"full_Name": "Pune"},
    {"full_Name": "Quito"},
    {"full_Name": "Quebec City"},
    {"full_Name": "Quanzhou"},
    {"full_Name": "Quetta"},
    {"full_Name": "Qingdao"},
    {"full_Name": "Rome"},
    {"full_Name": "Riyadh"},
    {"full_Name": "Rotterdam"},
    {"full_Name": "Rio de Janeiro"},
    {"full_Name": "Rabat"},
    {"full_Name": "Seoul"},
    {"full_Name": "Singapore"},
    {"full_Name": "Sydney"},
    {"full_Name": "San Francisco"},
    {"full_Name": "Stockholm"},
    {"full_Name": "Tokyo"},
    {"full_Name": "Taipei"},
    {"full_Name": "Toronto"},
    {"full_Name": "Tehran"},
    {"full_Name": "Tashkent"},
    {"full_Name": "Udaipur"},
    {"full_Name": "Ulaanbaatar"},
    {"full_Name": "Utrecht"},
    {"full_Name": "Urumqi"},
    {"full_Name": "Uppsala"},
    {"full_Name": "Ufa"},
    {"full_Name": "Vienna"},
    {"full_Name": "Venice"},
    {"full_Name": "Valencia"},
    {"full_Name": "Vancouver"},
    {"full_Name": "Verona"},
    {"full_Name": "Victoria"},
    {"full_Name": "Warsaw"},
    {"full_Name": "Washington D.C."},
    {"full_Name": "Wellington"},
    {"full_Name": "Wroclaw"},
    {"full_Name": "Wuhan"},
    {"full_Name": "Windhoek"},
    {"full_Name": "Xiamen"},
    {"full_Name": "Xi'an"},
    {"full_Name": "Xining"},
    {"full_Name": "Xiangyang"},
    {"full_Name": "Xuchang"},
    {"full_Name": "Xuzhou"},
    {"full_Name": "Yangon"},
    {"full_Name": "Yokohama"},
    {"full_Name": "Yerevan"},
    {"full_Name": "Yaounde"},
    {"full_Name": "Yantai"},
    {"full_Name": "Yogyakarta"},
    {"full_Name": "Zurich"},
    {"full_Name": "Zagreb"},
    {"full_Name": "Zanzibar"},
    {"full_Name": "Zibo"},
    {"full_Name": "Zhuhai"},
    {"full_Name": "Zaragoza"}
];
