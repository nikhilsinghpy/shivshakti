import React from 'react'
import './Home.css'
import { DataTable } from '../../component/DataTable/DataTable'
import {
  FaDollarSign,
  FaChartLine,
  FaWallet,
  FaEye,
  FaTasks,
} from 'react-icons/fa'
import { StatCard } from '../../component/StatCard/StatCard'
import { ProductCard } from '../../component/ProductCard/ProductCard'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import { Card, CardBody, CardHeader } from '@nextui-org/react'

const cardData = [
  {
    title: 'TOTAL SALES',
    value: '14245',
    icon: <FaDollarSign className="text-2xl text-white" />,
    percentage: '+16',
    change: 'LAST MONTH',
    color: 'text-blue-500', // Changed from bg-blue-500 to text-blue-500
  },
  {
    title: 'INCOME AMOUNT',
    value: '$1752',
    icon: <FaChartLine className="text-2xl text-white" />,
    percentage: '+0.1',
    change: 'LAST MONTH',
    color: 'text-yellow-300', // Changed from #fef9c3 to text-yellow-300
  },
  {
    title: 'TOTAL BUDGET',
    value: '$11546',
    icon: <FaWallet className="text-2xl text-white" />,
    percentage: '+12',
    change: 'LAST MONTH',
    color: 'text-orange-500', // Changed from bg-orange-500 to text-orange-500
  },
]

export const Home = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'height', label: 'Height' },
    { key: 'mass', label: 'Mass' },
    { key: 'birth_year', label: 'Birth year' },
  ]

  const data = [
    { name: 'Luke Skywalker', height: '172', mass: '77', birth_year: '19BBY' },
    { name: 'C-3PO', height: '167', mass: '75', birth_year: '112BBY' },
    { name: 'R2-D2', height: '96', mass: '32', birth_year: '33BBY' },
    { name: 'Darth Vader', height: '202', mass: '136', birth_year: '41.9BBY' },
    { name: 'Leia Organa', height: '150', mass: '49', birth_year: '19BBY' },
    { name: 'Owen Lars', height: '178', mass: '120', birth_year: '52BBY' },
    {
      name: 'Beru Whitesun lars',
      height: '165',
      mass: '75',
      birth_year: '47BBY',
    },
    { name: 'R5-D4', height: '97', mass: '32', birth_year: '32BBY' },
    {
      name: 'Biggs Darklighter',
      height: '183',
      mass: '84',
      birth_year: '24BBY',
    },
    { name: 'Obi-Wan Kenobi', height: '182', mass: '77', birth_year: '57BBY' },
    { name: 'Luke Skywalker', height: '172', mass: '77', birth_year: '19BBY' },
    { name: 'C-3PO', height: '167', mass: '75', birth_year: '112BBY' },
    { name: 'R2-D2', height: '96', mass: '32', birth_year: '33BBY' },
    { name: 'Darth Vader', height: '202', mass: '136', birth_year: '41.9BBY' },
    { name: 'Leia Organa', height: '150', mass: '49', birth_year: '19BBY' },
    { name: 'Owen Lars', height: '178', mass: '120', birth_year: '52BBY' },
    {
      name: 'Beru Whitesun lars',
      height: '165',
      mass: '75',
      birth_year: '47BBY',
    },
    { name: 'R5-D4', height: '97', mass: '32', birth_year: '32BBY' },
    {
      name: 'Biggs Darklighter',
      height: '183',
      mass: '84',
      birth_year: '24BBY',
    },
    { name: 'Obi-Wan Kenobi', height: '182', mass: '77', birth_year: '57BBY' },
  ]

  const procutdata = [
    {
      id: 1,
      title: 'Speaker List',
      imgae: img1,
      price: '$20',
    },
    {
      id: 2,
      title: 'Zone List',
      imgae: img2,
      price: '$20',
    },
    {
      id: 3,
      title: 'Quick Play',
      imgae: img3,
      price: '$20',
    },
    {
      id: 4,
      title: 'HangUp All',
      imgae: img4,
      price: '$20',
    },
  ]
  return (
    <div className="w-full">
      <Card className="p-4 mb-4">
        <CardHeader>
          <h1 className="text-3xl font-bold">Statistics</h1>
        </CardHeader>
        <CardBody>
          <div className="top-card">
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
        </CardBody>
      </Card>
      <Card className="p-4 mb-4">
        <CardHeader>
          <h1 className="text-3xl font-bold mb-4">Product List</h1>
        </CardHeader>
        <ProductCard data={procutdata} />
      </Card>
      <DataTable column={columns} data={data} />
    </div>
  )
}
