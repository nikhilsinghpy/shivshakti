import { Phone, Volume2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { IconCard } from '../../../component/cards/IconCard';

export const ReportSetting = () => {

  const cardData = [
    {
      id: 1,
      to: "/report/call-logs",
      icon: Phone,
      title: "Call logs",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      to: "/report/announcement-logs",
      icon: Volume2,
      title: "Announcement logs",
      bgColor: "bg-blue-100",
    },
  ];
  return (
    <div className='flex justify-start items-start p-5 gap-4'>
      <IconCard data={cardData} />
    </div>
  )
}
