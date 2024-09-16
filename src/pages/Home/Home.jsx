import React from 'react'
import './Home.css'
import { DataTable } from '../../component/DataTable/DataTable';

import { FaDollarSign, FaChartLine, FaWallet, FaEye, FaTasks } from 'react-icons/fa';
import { StatCard } from '../../component/StatCard/StatCard';

const cardData = [
  {
    title: "TOTAL SALES",
    value: "14245",
    icon: <FaDollarSign className="text-2xl text-white" />,
    percentage: "+16",
    change: "LAST MONTH",
    color: "bg-blue-500",
  },
  {
    title: "INCOME AMOUNT",
    value: "$1752",
    icon: <FaChartLine className="text-2xl text-white" />,
    percentage: "+0.1",
    change: "LAST MONTH",
    color: "bg-pink-500",
  },
  {
    title: "TOTAL BUDGET",
    value: "$11546",
    icon: <FaWallet className="text-2xl text-white" />,
    percentage: "+12",
    change: "LAST MONTH",
    color: "bg-orange-500",
  },
];

export const Home = () => {
  const columns = [
    { key: "name", label: "Name" },
    { key: "height", label: "Height" },
    { key: "mass", label: "Mass" },
    { key: "birth_year", label: "Birth year" }
  ];

  const data = [
    { name: "Luke Skywalker", height: "172", mass: "77", birth_year: "19BBY" },
    { name: "C-3PO", height: "167", mass: "75", birth_year: "112BBY" },
    { name: "R2-D2", height: "96", mass: "32", birth_year: "33BBY" },
    { name: "Darth Vader", height: "202", mass: "136", birth_year: "41.9BBY" },
    { name: "Leia Organa", height: "150", mass: "49", birth_year: "19BBY" },
    { name: "Owen Lars", height: "178", mass: "120", birth_year: "52BBY" },
    { name: "Beru Whitesun lars", height: "165", mass: "75", birth_year: "47BBY" },
    { name: "R5-D4", height: "97", mass: "32", birth_year: "32BBY" },
    { name: "Biggs Darklighter", height: "183", mass: "84", birth_year: "24BBY" },
    { name: "Obi-Wan Kenobi", height: "182", mass: "77", birth_year: "57BBY" },
    { name: "Luke Skywalker", height: "172", mass: "77", birth_year: "19BBY" },
    { name: "C-3PO", height: "167", mass: "75", birth_year: "112BBY" },
    { name: "R2-D2", height: "96", mass: "32", birth_year: "33BBY" },
    { name: "Darth Vader", height: "202", mass: "136", birth_year: "41.9BBY" },
    { name: "Leia Organa", height: "150", mass: "49", birth_year: "19BBY" },
    { name: "Owen Lars", height: "178", mass: "120", birth_year: "52BBY" },
    { name: "Beru Whitesun lars", height: "165", mass: "75", birth_year: "47BBY" },
    { name: "R5-D4", height: "97", mass: "32", birth_year: "32BBY" },
    { name: "Biggs Darklighter", height: "183", mass: "84", birth_year: "24BBY" },
    { name: "Obi-Wan Kenobi", height: "182", mass: "77", birth_year: "57BBY" }
  ];
  return (
    <div className='w-full'>
          <div className="flex justify-between">
              {cardData.map((card, index) => (
                <StatCard
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                  percentage={card.percentage}
                  change={card.change}
                  color={card.color}
                />
              ))}
          </div>
          <DataTable
            column={columns}
            data={data}
          />
          <DataTable
            column={columns}
            data={data}
          />
          <DataTable
            column={columns}
            data={data}
          />
          <DataTable
            column={columns}
            data={data}
          />
          <DataTable
            column={columns}
            data={data}
          />
    </div>
  )
}
