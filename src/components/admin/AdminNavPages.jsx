import { FiHelpCircle } from "react-icons/fi";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
export function AdminNavPages() {
  return (
    <div>
      <h2 className='mt-3 mb-2 px-4 text-start text-[10.24px] font-bold leading-[15.3px] uppercase text-[#6E7891]'>Pages</h2>
      <AccordionItem value="item-9">
        <AccordionTrigger>
          <div className='flex items-center gap-2'>
            <FiHelpCircle />
            <h2>FAQ</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='w-[75%] mx-auto text-start'>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Faq accordion</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Faq tab</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* <AccordionItem value="item-10">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <FaGlobe />
                        <h2 className='text-sm'>Landing</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Default</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Alternate</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <IoMdPricetags />
                        <h2 className='text-sm'>Pricing</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Pricing column</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Pricing grid</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <MdErrorOutline />
                        <h2 className='text-sm'>Error</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>403</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>404</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>500</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <MdEventAvailable />
                        <h2 className='text-sm'>Events</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Create an event</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Event detail</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <FaLock />
                        <h2 className='text-sm'>Authentication</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Kanban</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Boards</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Create board</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <FiLayout />
                        <h2 className='text-sm'>Layout</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Vertical sidenav</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Dark mode</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Sidenav collapse</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Darknav</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Topnav slim</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Navbar top slim</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Navbar top</li>
                        <li className='hover:bg-gray-100 rounded-md text-[12.5px] font-medium p-1.5 px-3'>Horizontal slim</li>
                    </ul>
                </AccordionContent>
            </AccordionItem> */}
    </div>
  )
}