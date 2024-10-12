import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import './StatCard.css'
import { IoPhonePortraitOutline } from 'react-icons/io5'

export const StatCard = ({
  title,
  value,
  icon,
  color,
  secTitile,
  heading,
  secValue,
}) => {
  return (
    <div>
      {/* <Card className='p-4 w-full stat-card' style={{maxWidth: '350px'}}>
            <CardBody className='flex justify-between flex-row gap-5 items-center'>
                <div className='flex flex-col items-start'>
                    <h4 className='text-lg font-bold'>{value}</h4>
                    <p className={`text-xs font-medium ${color}`}>{title}</p>
                </div>
                <div className='flex flex-col items-start'>
                    <h4 className='text-lg font-bold'>{secValue}</h4>
                    <p className={`text-xs font-medium ${color}`}>{secTitile}</p>
                </div>
                <div>
                    <div className='stat-card-icon'> 
                       {icon}
                    </div>
                </div>
            </CardBody>
        </Card> */}
      <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-5">
        <h2 class="text-base font-medium text-center text-blue-500 mb-3">
          {heading}
        </h2>

        <div class="flex justify-center items-center space-x-6">
          <div class="flex items-center space-x-2">
            <span class="text-sm font-light text-green-400">{title}</span>
            <span class="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
              {value}
            </span>
          </div>

          <div class="h-4 border-l-2 border-blue-300"></div>

          <div class="flex items-center space-x-2">
            <span class="text-sm font-light text-red-400">{secTitile}</span>
            <span class="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
              {secValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
