'use client';
import Image from "next/image";
import Searchbar from "./searchbar";
import { Button } from "./ui/button";
import { PiBellFill } from "react-icons/pi";
import UserDetails from "./user-details";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname !== '/dashboard') return null;
  return (<>
    <div className="flex h-24 px-3 md:px-11 items-center max-md:relative">
      <div className="relative w-56">
        <Image
          src="/group.png"
          alt="logo"
          height={41}
          width={156}
          className="object-contain"
        />
      </div>
      <div className="max-sm:fixed max-sm:bottom-0 max-md:z-50 max-md:rounded-t-lg max-sm:left-0 max-sm:right-0 max-sm:opacity-100 max-sm:bg-white max-sm:py-4 max-sm:px-8  lg:w-[560px] md:mr-2">
        <Searchbar/>
      </div>
      <div className="flex gap-4 items-center ml-auto">
        <Button variant="ghost" className="relative [&_svg]:size-6 min-w-14 min-h-14 rounded-full bg-slate-50" size="icon">
          <div className="absolute top-3.5 right-3.5 bg-red-400 h-1.5 w-1.5 rounded-full"></div>
          <PiBellFill size={'24px'} />
        </Button>
        <UserDetails/>
      </div>
    </div>
  </>);
};

export default Navbar;