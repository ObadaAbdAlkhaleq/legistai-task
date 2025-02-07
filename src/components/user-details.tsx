'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { logout } from "@/lib/auth";
import Avatar from '@mui/material/Avatar';
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const UserDetails = () => {

  const router = useRouter()
  return ( 
    
    <DropdownMenu>
    <DropdownMenuTrigger>
    <div className="flex items-center bg-slate-50 rounded-full p-3 gap-2">
      <Avatar alt="Remy Sharp" className="" src="1.jpg" />
      <div>

        <div className="font-semibold text-xs line-clamp-1">Majid Malik</div>
        <div className="text-[10px] max-sm:hidden text-gray-500">Product Manager</div>
      </div>
    </div>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      className="p-2"
      align="end"
    >
      <div className="flex items-center justify-start gap-2 p-2"></div>
      <div className="flex flex-col space-y-1 gap-2 leading-none">
         <p className="font-medium">Majid Malik</p>
        <p className="text-xs text-gray-500">Product Manager  </p>
      </div>

      <DropdownMenuSeparator />
      <DropdownMenuItem
        onClick={() => {
          logout()       
          router.push("/")
        }}
        className="text-red-600 cursor-pointer"
      >
        Sign Out
        <LogOut className="w-4 h-4 ml-2" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
   );
}
 
export default UserDetails;