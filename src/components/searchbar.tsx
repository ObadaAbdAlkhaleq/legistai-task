import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Search } from "lucide-react";
import { useId } from "react";

export default function Searchbar() {
  const id = useId();
  return (
    <div className="space-y-2">
      <div className="relative ">
        <Input id={id} className=" rounded-full bg-slate-50 border-none peer pe-9 ps-9" placeholder="Search..." type="search" />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>

      </div>
    </div>
  );
}
