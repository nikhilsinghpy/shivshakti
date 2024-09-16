import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import './StatCard.css'
import { IoPhonePortraitOutline } from 'react-icons/io5'

export const StatCard = ({ title, value, icon, percentage, change, color }) => {
  return (
    <div>
        <Card className='p-4 w-full stat-card' style={{maxWidth: '300px'}}>
            <CardBody className='flex justify-between flex-row gap-5 items-center'>
                <div className='flex flex-col items-start'>
                    <h4 className='text-lg font-bold'>4563</h4>
                    <p className={`text-xs font-medium ${color}`}>Total Orders</p>
                </div>
                <div className='flex flex-col items-start'>
                    <h4 className='text-lg font-bold'>4563</h4>
                    <p className={`text-xs font-medium ${color}`}>Total Orders</p>
                </div>
                <div>
                    <div className='stat-card-icon'> 
                        <IoPhonePortraitOutline  className={color}/>
                    </div>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}
