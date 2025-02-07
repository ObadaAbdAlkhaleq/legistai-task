import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  LineChart,
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  ComposedChart,
  Area,
} from "recharts";
type Props ={
  data : object[]
}
const Analytics = ({data}:Props) => {
  
  return ( <>
          <Card className="max-md:px-2 px-8 py-8 flex flex-col gap-16 mb-8 rounded-xl border-none">
            <div className="">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold mb-2">Analytics</h2>
                <Select defaultValue="weekly">
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                </div>
                
                <div className="flex items-center space-x-8 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <div className="text-2xl font-bold text-cyan-500">$1,760</div>
                    <div className="text-xl text-gray-500">Income</div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="text-2xl font-bold">345</div>
                    <div className="text-xl text-gray-500">Users</div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="text-2xl font-bold">3,5%</div>
                    <div className="text-xl text-gray-500">Cases</div>
              </div>
            </div>

          </div>

          <div className="h-[450px] md:px-10">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={ data } barGap={ '10%' } >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="income" maxBarSize={ 40 } fill="#3BBFBD" />
                <Area type="monotone" dataKey="cases" stroke="#3B424A" fill="#B4BFC0" />
                <Line type="monotone" dataKey="users" stroke="#229735" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
  </> );
}
 
export default Analytics;