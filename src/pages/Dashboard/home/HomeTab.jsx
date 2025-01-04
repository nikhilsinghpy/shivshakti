import React from 'react'
import speaker from '../../../assets/Speaker.png'
import microphone from '../../../assets/Mic.png'
import clock from '../../../assets/Group 476.png'
import speakerAlt from '../../../assets/Speaker Group.png'
import "./HomeTab.css"
export const HomeTab = () => {
  const cardata = [
    {
      title: 'Speakers',
      online: 27,
      offline: 10,
      icon: speaker,
      background: 'bg-blue-500',
      textcolor: "text-white",
      bordercolor: "bg-white"
    },
    {
      title: 'Announcers',
      online: 27,
      offline: 10,
      icon: microphone,
      background: 'bg-[#64AE5F]',
      textcolor: "text-white",
      bordercolor: "bg-white"
    },
    {
      title: 'Schedules',
      online: 27,
      offline: 10,
      icon: clock,
      background: 'bg-[#E0EFDF]',
      textcolor: "text-gray-700",
      bordercolor: "bg-gray-700"
    },
    {
      title: 'Zones',
      online: 27,
      offline: 10,
      icon: speakerAlt,
      background: 'bg-[#DFEBEF]',
      textcolor: "text-gray-700",
      bordercolor: "bg-gray-700"
    },
  ]

  return (
<div className="w-full grid grid-cols-2 gap-4 h-full">
  {cardata?.map((data, index) => (
    <div
      key={index}
      className={`card ${data.background} w-full rounded-3xl flex flex-col text-white justify-around p-5 above1440:min-h-[340px] above1440:p-[2.5rem]`}
    >
      <h3 className={`${data.textcolor} text-3xl font-semibold  above1440:text-[2.5rem]`}>{data.title}</h3>
      <div className="flex justify-between items-center">
        <div className="card-content-section w-[60%]">
          <div className="flex gap-8 items-center">
            <div className="flex flex-col">
              <h1 className={`${data.textcolor} text-4xl font-bold above1440:text-[2.5rem]`}>{data.online}</h1>
              <div className="flex items-center justify-start gap-2">
                <p className={`${data.textcolor}`}>Online</p>
                <span className="w-2 h-2 rounded-full bg-[#2AE91D] mr-2 above1440:w-3 above1440:h-3"></span>
              </div>
            </div>
            <div className={`${data.bordercolor} h-10 w-px opacity-50`}></div>
            <div className="flex flex-col">
              <h1 className={`${data.textcolor} text-4xl font-bold above1440:text-[2.5rem] `}>{data.offline}</h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p className={`${data.textcolor} `}>Offline</p>
                <span className="w-2 h-2 bg-red-500 rounded-full ml-2 above1440:w-3 above1440:h-3"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-section w-[40%] flex items-center justify-center">
          <img
            src={data.icon}
            alt={data.title}
            className="w-full h-[80px] object-contain above1440:h-[100px]"
          />
        </div>
      </div>
    </div>
  ))}
</div>

  )
}
