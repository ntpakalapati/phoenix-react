import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "../../components/ui/dialog";
import { DemoCities } from "../../lib/admin";

export function AdminSmSearch() {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSearch = (searchTerm) => {
    // Our Api to fetch result
    setValue(searchTerm)
    console.log('Search Result:', searchTerm)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-gray-200 p-2 cursor-pointer rounded-full lg:hidden block">
          <ImSearch className="rotate-90 text-blue-700 text-lg" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-[90%] mx-auto md:w-full">
          <div className="relative">
            <input type="text" className="rounded-full w-full py-2 px-10 focus:outline-none"
              value={value}
              placeholder="Search..."
              onChange={onChange}
            />
            <DialogClose>
              <FaSearch className="absolute left-4 top-[13px]" onClick={() => onSearch(value)}>Search</FaSearch>
            </DialogClose>
          </div>

          <div className="bg-blue-50 mt-2 rounded-md ">
            {DemoCities.filter(city => {
              const searchTerm = value.toLowerCase()
              const fullName = city.full_Name.toLowerCase();
              return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
            }).slice(0, 10)
              .map(city =>
                <div className="py-2.5 hover:underline hover:text-blue-500 hover:font-semibold cursor-pointer px-4" onClick={() => onSearch(city.full_Name)} key={city.full_Name}>
                  {city.full_Name}
                </div>
              )}
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}