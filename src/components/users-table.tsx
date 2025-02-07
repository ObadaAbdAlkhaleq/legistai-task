import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Avatar } from "@mui/material";
import { Progress } from '@/components/ui/progress';

type Props = {
  users: {
    name: string;
    pfp: string;
    completedTasks: number;
    employee: number;
    joiningDate: string;}[]
}

const UsersTable = ({users}:Props) => {
  return ( <>
  <Card className="p-6 border-none">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Users</h2>
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

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="pb-4">User</th>
                  <th className="pb-4">Completed Tasks</th>
                  <th className="pb-4">Employee</th>
                  <th className="pb-4">Joining Date</th>
                </tr>
              </thead>
              <tbody>
                { users.map((user, index) => (
                  <tr key={ index } className="border-t">
                    <td className="py-4 ">
                      <div className="flex items-center space-x-3">
                        <div className="max-md:hidden h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <Avatar alt="Remy Sharp" src={user.pfp}/>

                        </div>
                        <p>{ user.name }</p>
                      </div>
                    </td>
                    <td className="py-4 text-zinc-700 text-base">
                      <div className="flex gap-1.5 items-center">
                        <Progress value={user.completedTasks} className="w-12 h-1" progressColor="#10B981" />
                        <p>
                        {user.completedTasks}%
                        </p>
                      </div>
                    </td>
                    <td className="py-4 "><p>{ user.employee }</p></td>
                    <td className="py-4 "><p>{ user.joiningDate }</p></td>
                  </tr>
                )) }
              </tbody>
            </table>
          </div>
        </Card>
  </> );
}
 
export default UsersTable;