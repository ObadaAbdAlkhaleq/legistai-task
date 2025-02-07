"use client";

import { useState } from "react";

import Analytics from "@/components/analytics";
import { Card } from "@/components/ui/card";
import UsersTable from "@/components/users-table";
import { AiOutlineDollar } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";

export default function Dashboard() {
  //   const [data] = useState([
  //     {
  //       name: "Mo",
  //       income: 150,
  //       users: 120,
  //       cases: 650
  //     },
  //     {
  //       name: "Tu",
  //       income: 400,
  //       users: 180,
  //       cases: 580
  //     },
  //     {
  //       name: "We",
  //       income: 350,
  //       users: 160,
  //       cases: 480
  //     },
  //     {
  //       name: "Th",
  //       income: 300,
  //       users: 140,
  //       cases: 800
  //     },
  //     {
  //       name: "Fr",
  //       income: 400,
  //       users: 170,
  //       cases: 850
  //     },
  //     {
  //       name: "St",
  //       income: 350,
  //       users: 160,
  //       cases: 900
  //     },
  //     {
  //       name: "Sa",
  //       income: 600,
  //       users: 910
  // }]);
  // const [data] = useState([
  //   { name: "M", Income: 250, Users: 400, Cases: 240 },
  //   { name: "Tu", Income: 300, Users: 300, Cases: 139 },
  //   { name: "W", Income: 350, Users: 500, Cases: 980 },
  //   { name: "Th", Income: 280, Users: 280, Cases: 390 },
  //   { name: "F", Income: 320, Users: 380, Cases: 430 },
  //   { name: "Sa", Income: 375, Users: 600, Cases: 380 },
  //   { name: "Su", Income: 600, Users: 750, Cases: 600 },
  // ]);

  const [ data ] = useState([{
    "name": "Mo",
    "income": 536.02,
    "users": 161,
    "cases": 508
  }, {
    "name": "Tu",
    "income": 550.96,
    "users": 353,
    "cases": 588
  }, {
    "name": "We",
    "income": 274.59,
    "users": 302,
    "cases": 649
  }, {
    "name": "Th",
    "income": 471.41,
    "users": 196,
    "cases": 437
  }, {
    "name": "Fri",
    "income": 414.50,
    "users": 457,
    "cases": 729
  }, {
    "name": "Sa",
    "income": 492.84,
    "users": 360,
    "cases": 882
  }, {
    "name": "Sun",
    "income": 395.26,
    "users": 280,
    "cases": 694
  }, {
    "name": "Mo",
    "income": 370.72,
    "users": 167,
    "cases": 541
  }, {
    "name": "Tu",
    "income": 408.87,
    "users": 478,
    "cases": 461
  }, {
    "name": "We",
    "income": 318.86,
    "users": 332,
    "cases": 327
  }, {
    "name": "Th",
    "income": 496.18,
    "users": 420,
    "cases": 899
  }, {
    "name": "Fri",
    "income": 542.40,
    "users": 298,
    "cases": 307
  }, {
    "name": "Sa",
    "income": 315.38,
    "users": 222,
    "cases": 618
  }, {
    "name": "Sun",
    "income": 551.94,
    "users": 380,
    "cases": 475
  }, {
    "name": "Mo",
    "income": 581.74,
    "users": 493,
    "cases": 527
  }, {
    "name": "Tu",
    "income": 320.62,
    "users": 268,
    "cases": 734
  }, {
    "name": "We",
    "income": 474.50,
    "users": 435,
    "cases": 843
  }, {
    "name": "Th",
    "income": 451.85,
    "users": 128,
    "cases": 601
  }, {
    "name": "Fri",
    "income": 506.31,
    "users": 214,
    "cases": 204
  }, {
    "name": "Sa",
    "income": 437.63,
    "users": 249,
    "cases": 741
  }, {
    "name": "Sun",
    "income": 290.80,
    "users": 122,
    "cases": 370
  }, {
    "name": "Mo",
    "income": 516.46,
    "users": 212,
    "cases": 387
  }, {
    "name": "Tu",
    "income": 329.53,
    "users": 178,
    "cases": 720
  }, {
    "name": "We",
    "income": 566.17,
    "users": 168,
    "cases": 462
  }, {
    "name": "Th",
    "income": 456.25,
    "users": 372,
    "cases": 550
  }, {
    "name": "Fri",
    "income": 325.29,
    "users": 440,
    "cases": 761
  }, {
    "name": "Sa",
    "income": 319.79,
    "users": 406,
    "cases": 652
  }, {
    "name": "Sun",
    "income": 549.05,
    "users": 485,
    "cases": 297
  }, {
    "name": "Mo",
    "income": 392.25,
    "users": 166,
    "cases": 570
  }, {
    "name": "Tu",
    "income": 400.05,
    "users": 482,
    "cases": 651
  }, {
    "name": "We",
    "income": 333.80,
    "users": 173,
    "cases": 559
  }, {
    "name": "Th",
    "income": 541.56,
    "users": 317,
    "cases": 762
  }, {
    "name": "Fri",
    "income": 516.01,
    "users": 413,
    "cases": 423
  }, {
    "name": "Sa",
    "income": 270.92,
    "users": 144,
    "cases": 239
  }, {
    "name": "Sun",
    "income": 477.53,
    "users": 180,
    "cases": 734
  }, {
    "name": "Mo",
    "income": 503.59,
    "users": 370,
    "cases": 645
  }, {
    "name": "Tu",
    "income": 348.03,
    "users": 346,
    "cases": 523
  }, {
    "name": "We",
    "income": 398.54,
    "users": 437,
    "cases": 670
  }, {
    "name": "Th",
    "income": 498.70,
    "users": 227,
    "cases": 516
  }, {
    "name": "Fri",
    "income": 579.54,
    "users": 422,
    "cases": 394
  }]
  );
  const users = [
    { name: "John Brown", pfp: '1.jpg', completedTasks: 84, employee: 12, joiningDate: "2-12-2024" },
    { name: "Sarah Wilson", pfp: '2.jpg', completedTasks: 83.6, employee: 232, joiningDate: "2-12-2024" },
    { name: "Michael Clark", pfp: '3.png', completedTasks: 83.4, employee: 22, joiningDate: "2-12-2024" },
    { name: "Emma Davis", pfp: '4.png', completedTasks: 83, employee: 45, joiningDate: "2-12-2024" },
    { name: "James Miller",  pfp: '5.jpeg',completedTasks: 82.5, employee: 87, joiningDate: "2-12-2024" },
    { name: "Lisa Anderson", pfp: '3.png', completedTasks: 82.3, employee: 66, joiningDate: "2-12-2024" },
    { name: "Robert Taylor",  pfp: '',completedTasks: 82, employee: 5, joiningDate: "2-12-2024" },
  ];

  return (
    <div className="min-h-screen rounded-tl-2xl bg-gray-50">
      <div className="p-6">


        <div className="md:grid md:grid-cols-3 max-md:flex max-md:flex-col max-md:w-full gap-6 mb-8">
          <Card className="border-none p-6 gap-4">
            <div className="flex justify-between items-center">

            <div className="text-base text-zinc-600 font-semibold mb-2">TOTAL EARNINGS</div>
            <div className="text-sm text-green-600">+16.45%</div>
            </div>
            <div className="text-2xl font-bold mb-1">$589.98k</div>
            <div className="flex justify-between items-end">
              <p className="font-medium leading-6 text-teall hover:cursor-pointer select-none">View net earnings</p>
              <div className="w-12 h-12 bg-teall/10 rounded-sm flex justify-center items-center">
              <AiOutlineDollar color="#3BBFBD" size={24}/>

              </div>
            </div>
          </Card>
          <Card className="border-none p-6 gap-4">
            <div className="flex justify-between items-center">

            <div className="text-base text-zinc-600 font-semibold mb-2">Users</div>
            <div className="text-sm text-green-600">+340</div>
            </div>
            <div className="text-2xl font-bold mb-1">$589.98k</div>
            <div className="flex justify-between items-end">
              <p className="font-medium leading-6 text-teall hover:cursor-pointer select-none">See details</p>
              <div className="w-12 h-12 bg-teall/10 rounded-sm flex justify-center items-center">
              <RiUserLine  color="#3BBFBD" size={24}/>

              </div>
            </div>
          </Card>
          <Card className="border-none p-6 gap-4">
            <div className="flex justify-between items-center">

            <div className="text-base text-zinc-600 font-semibold mb-2">Cases</div>
            </div>
            <div className="text-2xl font-bold mb-1">+36 </div>
            <div className="flex justify-between items-end">
              <p className="font-medium leading-6 text-teall hover:cursor-pointer select-none">View all cases </p>
              <div className="w-12 h-12 bg-teall/10 rounded-sm flex justify-center items-center">
              <TbShoppingBag  color="#3BBFBD" size={24}/>

              </div>
            </div>
          </Card>
        </div>

<Analytics data={data}/>

        <UsersTable users={users}/>
      </div>
    </div>
  );
}