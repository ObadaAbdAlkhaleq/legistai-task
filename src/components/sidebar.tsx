'use client';
import { Button } from "@/components/ui/button";
import { ChartPie, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { BiBarChartSquare } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  const pathname = usePathname();
  if (pathname !== '/dashboard') return null;
  return ( 
  <div className="bg-white w-80 max-md:hidden">
    <div className="mt-10 px-5 flex flex-col gap-2 w-full">

    <Button className="bg-teal-500 flex items-center [&_svg]:size-6 gap-3 justify-start hover:bg-teal-700 w-full text-white">
      <ChartPie size={24} />
      <p className="text-lg leading-5 font-medium">Dashboard</p>
    </Button>
    <Button className=" flex items-center [&_svg]:size-6 justify-between w-full text-zinc-700" variant={'ghost'}>
      <div className="flex items-center gap-3">
      <BiBarChartSquare 
      size={24} />
      <p className="text-lg leading-5 font-medium">Analytics</p>
      </div>
      <Badge className="bg-emerald-500 ">new</Badge>
    </Button>
    <Button className=" flex items-center  [&_svg]:size-6 justify-between w-full text-zinc-700" variant={'ghost'}>
      <div className="flex items-center gap-3">
      <IoWalletOutline 
 
      size={24} />
      <p className="text-lg leading-5 font-medium">Finance</p>
      </div>
      <ChevronDown/>
    </Button>
    {/* <Button  variant="ghost">
      <ChartPie/>
      Dashboard
      </Button> */}
      </div>
  </div> );
}
 
export default Sidebar;