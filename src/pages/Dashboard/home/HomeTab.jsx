import React from 'react'
import speaker from '../../../assets/Speaker.png'
import microphone from '../../../assets/Mic.png'
import clock from '../../../assets/Group 476.png'
import speakerAlt from '../../../assets/Speaker Group.png'
export const HomeTab = () => {
  const cardata = [
    {
      title: 'Speakers',
      online: 27,
      offline: 10,
      icon: speaker,
      background: 'bg-blue-500',
    },
    {
      title: 'Announcers',
      online: 27,
      offline: 10,
      icon: microphone,
      background: 'bg-green-500',
    },
    {
      title: 'Schedules',
      online: 27,
      offline: 10,
      icon: clock,
      background: 'bg-green-100',
    },
    {
      title: 'Zones',
      online: 27,
      offline: 10,
      icon: speakerAlt,
      background: 'bg-blue-100',
    },
  ]

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="card bg-[#00ADEE] w-full h-[200px] rounded-3xl flex flex-col text-white p-5">
        <h3 className="text-3xl font-semibold mb-8">Speaker</h3>
        <div className='flex justify-between'>
        <div className="card-content-section w-[60%]">
          <div className="flex gap-8 items-center">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">27</h1>
              <p>
                Online{' '}
                <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
              </p>
            </div>
            <div className="h-10 w-px bg-white opacity-50"></div>
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">27</h1>
              <p>
                Online{' '}
                <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
              </p>
            </div>
          </div>
        </div>
        <div className="icon-section w-[40%]  flex items-center justify-center">
          <img src={speaker} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}
