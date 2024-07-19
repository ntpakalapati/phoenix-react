import { FiBookmark, FiClipboard, FiMail, FiPhone, FiShare2, FiShoppingCart, FiTrello } from "react-icons/fi";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
export function AdminNavApps() {
  return (
    <div>
      <h2 className='mt-3 mb-2 px-4 text-[10.24px] font-bold text-start leading-[15.3px] uppercase text-[#6E7891]'>Apps</h2>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <FiShoppingCart className="text-[#464F66] w-[16px] h-[16px] ml-[1px]" />
            <h2>E commerce</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='w-[90%] mx-auto'>
            <li className="ml-[28px]">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger >Admin</AccordionTrigger>
                  <AccordionContent>
                    <ul className='w-[80%] mx-auto pl-2 mt-1 text-start'>
                      <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Add product</li>
                      <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Products</li>
                      <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Customers</li>
                      <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Customer details</li>
                      <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Orders</li>
                      <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Order details</li>
                      <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Refund</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Customer</AccordionTrigger>
                  <AccordionContent>
                    <ul className='w-[80%] mx-auto pl-2 mt-1 text-start'>
                      <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Homepage</li>
                      <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Product details</li>
                      <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Products filter</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <FiPhone className="text-[#464F66] w-[16px] h-[16px] ml-[1px]" />
            <h2>CRM</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='w-[75%] mx-auto pl-3 mt-1 text-start'>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Analytics</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Deals</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Deal details</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Leads</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Lead details</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Reports</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Report details</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Add contact</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <FiClipboard className="text-[#464F66] w-[16px] h-[16px] ml-[1px]" />
            <h2>Project management</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='w-[75%] mx-auto pl-3 mt-1 text-start'>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Create new</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Project list view</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Project card view</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Project board view</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Todo list</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Project details</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <FiMail className="text-[#464F66] w-[16px] h-[16px] ml-[1px]" />
            <h2>Email</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='w-[75%] mx-auto pl-3 mt-1 text-start'>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Inbox</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Email detail</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Compose</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <FiBookmark className="text-[#464F66] w-[16px] h-[16px] ml-[1px]" />
            <h2>Events</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='w-[75%] mx-auto pl-3 mt-1 text-start'>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Create an event</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Event detail</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <FiTrello className="text-[#464F66] w-[16px] h-[16px] ml-[1px]" />
            <h2>Kanban</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='w-[75%] mx-auto pl-3 mt-1 text-start'>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Kanban</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Boards</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Create board</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <FiShare2 className="text-[#464F66] w-[16px] h-[16px] ml-[1px]" />
            <h2>Social</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='w-[75%] mx-auto pl-3 mt-1 text-start'>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Profile</li>
            <li className='hover:bg-gray-100 rounded-md p-1.5 px-3'>Settings</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </div>
  )
}