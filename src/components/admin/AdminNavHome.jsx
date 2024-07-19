import { LuPieChart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
export function AdminNavHome() {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>
        <div className='flex items-center gap-3'>
          <LuPieChart className="text-[#464F66] w-[16px] h-[16px] ml-[1px]" />
          <h2>Home</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ul className='w-[75%] mx-auto text-start pl-3 mt-1'>
          <li className='hover:bg-gray-100 rounded-md text-[13px] p-1.5 px-3'><Link to="/eComm">E commerce</Link></li>
          <li className='hover:bg-gray-100 rounded-md text-[13px] p-1.5 px-3'><Link to="/projMgmt">Project management</Link></li>
          <li className='hover:bg-gray-100 rounded-md text-[13px] p-1.5 px-3'><Link to="/crm">CRM</Link></li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  )
}