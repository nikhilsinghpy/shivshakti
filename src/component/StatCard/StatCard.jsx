import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import './StatCard.css'
import { IoPhonePortraitOutline } from 'react-icons/io5'

export const StatCard = ({ title, value, icon, color  , secTitile, secValue}) => {

    
  return (
    <div>
        <Card className='p-4 w-full stat-card' style={{maxWidth: '350px'}}>
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
        </Card>
    </div>
  )
}
