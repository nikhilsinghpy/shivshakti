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
    <div className='flex justify-start items-start px-[2rem] py-[3rem] gap-4 w-full'>
      <IconCard data={cardData} />
    </div>
  )
}
