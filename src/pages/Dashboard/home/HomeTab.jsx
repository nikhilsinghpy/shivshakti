import React from 'react'
import speaker from '../../../assets/Speaker.png'
import microphone from '../../../assets/Mic.png'
import clock from '../../../assets/Group 476.png'
import speakerAlt from '../../../assets/Speaker Group.png'
import './HomeTab.css'
export const HomeTab = ({data}) => {
  const cardata = [
    {
      title: 'Speakers',
      online: `${data.onlinespeakers}`,
      offline: `${data.offlinespeakers}`,
      icon: speaker,
      background: 'bg-[#00ADEE]',
      textcolor: 'text-white',
      bordercolor: 'bg-white',
    },
    {
      title: 'Announcers',
      online: `${data.onlineannouncers}`,
      offline: `${data.onlinespeakers}`,
      icon: microphone,
      background: 'bg-[#64AE5F]',
      textcolor: 'text-white',
      bordercolor: 'bg-white',
    },
    {
      title: 'Schedules',
      online: `${data.active_schedule}`,
      offline: `${data.inactive_schedule}`,
      icon: clock,
      background: 'bg-[#E0EFDF]',
      textcolor: 'text-gray-700',
      bordercolor: 'bg-gray-700',
    },
    {
      title: 'Zones',
      online: `${data.active_zones}`,
      offline: `${data.inactive_zones}`,
      icon: speakerAlt,
      background: 'bg-[#DFEBEF]',
      textcolor: 'text-gray-700',
      bordercolor: 'bg-gray-700',
    },
  ]

  return (
    <div className="w-full grid grid-cols-2 gap-4 h-full">
      {cardata?.map((data, index) => (
        <div className={`${data.background} home-tab-card p-4`} key={index}>
          <h5 className={`${data.textcolor}`}>{data.title}</h5>
          <div className="flex justify-evenly items-center h-[85%]">
            <div className="w-[70%] p-[1rem]">

              <div className="flex justify-between items-center">
                <div className="flex flex-col  text-center items-center">
                  <h1 className={`${data.textcolor} home-tab-card-status-text`}>
                    {data.online}
                  </h1>
                  <div className="flex items-center justify-start gap-2">
                    <p className={`${data.textcolor}`}>Online</p>
                    <span className="w-2 h-2 rounded-full bg-[#2AE91D] mr-2 above1440:w-3 above1440:h-3"></span>
                  </div>
                </div>
                <div className={`${data.bordercolor} h-10 w-px opacity-50`} style={{marginLeft: '-.8rem'}}></div>
                <div className="flex flex-col text-center items-center">
                  <h1 className={`${data.textcolor} home-tab-card-status-text`}>
                    {data.offline}
                  </h1>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className={`${data.textcolor} `}>Offline</p>
                    <span className="w-2 h-2 bg-red-500 rounded-full ml-2 above1440:w-3 above1440:h-3"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] flex items-center justify-center  ">
              <div className='home-tab-img'>
                <img
                  src={data.icon}
                  alt={data.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
