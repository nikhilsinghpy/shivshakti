import { BottomNav } from '../../component/BottomNav/BottomNav'
import TabComponent from '../../component/TabComponent/TabComponent'
import './dashboard.css'
import { Home, Volume2, Mic, Calendar, MapPin } from 'lucide-react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { HomeTab } from './home/HomeTab'
import { Speaker } from './speaker/Speaker'
import { Announcers } from './Announcers/Announcers'
import { Schedule } from './Schedule/Schedule'
import { Zones } from './Zones/Zones'
import img from '../../assets/roundedchart.svg'

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)
export const Dashboard = () => {
  const navItems = [
    { label: 'Home', icon: <Home />, active: true },
    { label: 'Speakers', icon: <Volume2 />, active: false },
    { label: 'Announcers', icon: <Mic />, active: false },
    { label: 'Schedule', icon: <Calendar />, active: false },
    { label: 'Zones', icon: <MapPin />, active: false },
  ]
  const data = {
    labels: ['Used', 'Available'],
    datasets: [
      {
        data: [60, 40], // Adjust percentages here
        backgroundColor: ['#00ADEE', '#e0fff0'], // Colors for Used and Available
        borderWidth: 0, // Removes border from segments
      },
    ],
  }

  const options = {
    cutout: '75%', // Adjust for the thickness of the chart
    plugins: {
      legend: {
        display: false, // Hides the default legend
      },
    },
  }

  const tabContents = [
    <HomeTab />,
    <Speaker />,
    <Announcers />,
    <Schedule />,
    <Zones />,
  ]

  const percentageUsed = 50 // Storage used in percentage
  const percentageAvailable = 100 - percentageUsed
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-[77.49%] bg-gray-100 p-4">
          <TabComponent navItems={navItems} tabContents={tabContents} />
        </div>
        <div className="w-[22.51%]  p-4">
          <div className="flex flex-col gap-[.8rem]">
            {/* First Card */}
            <div className="h-[7.9vh] bg-[#292D32] rounded-[12px] flex items-center justify-evenly text-white time-component">
              <h3>12:00 AM</h3>
              <span className="flex flex-col items-start">
                <p>Monday</p>
                <p>28 November</p>
              </span>
            </div>

            {/* Second Card */}
            <div className="h-[29.9vh] bg-[#FFFFFF] rounded-[12px] flex items-center justify-center p-4 ">
              <div className="flex  gap-2 flex-col">
                <h3 className='dashboard-card-title'>Storage</h3>
                <div className='flex'>
                <div className="storage-usage-content w-[40%] mt-3">
                <p className="flex items-center storagetext">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0099FF] mr-2"></span>{' '}
                  50% Used
                </p>
                <p className="flex items-center storagetext">
                  <span className="w-2 h-2 rounded-full bg-[#E0EFDF] mr-2"></span>
                  <br /> 50% Available
                </p>
              </div>
                <div className="storage-usage-percentage w-[60%]">
                  <img
                    src={img}
                    alt="Storage Image"
                    className="w-full h-auto"
                  />
                </div>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="h-[53vh] bg-[#FFFFFF] rounded-[12px] flex p-4 flex-col gap-3">
              <h3 className='dashboard-card-title'>CPU Ram usage</h3>
              <span className='flex justify-start gap-2 items-center'>
                <h6 className='device-info-title'>CPU info : </h6>
                <p className='device-info-content'>11th gen Intel (R) Core (TM) i5-1135G7 @2.4</p>
              </span>
              <span className='flex justify-start gap-2 items-center'>
                <h6 className='device-info-title'>Uptime : </h6>
                <p className='device-info-content'>11 minutes</p>
              </span>
              <span className='flex justify-start gap-2 items-center'>
                <h6 className='device-info-title'>CPU speed : </h6>
                <p className='device-info-content'>2,419.20 MHz</p>
              </span>

              <hr className='text-[#EDEDFF] bg-[#EDEDFF] h-[2px]'/>
              <h6 className='device-info-title'>Memory usage : </h6>
              <div className="usage-card flex items-start justify-start gap-2">
                <span className=' usage-card'>
                  CPU
                </span>
                <div className='flex flex-col w-full'>
                <div className="progres-bar w-full bg-[#F2F2F2]  rounded-[10px] overflow-hidden">
                  <div className="progress-bar-inner bg-[#00ADEE] w-[15%] h-full" style={{borderTopRightRadius:"10px" , borderBottomRightRadius:"10px"}}></div>
                </div>
                <span className='text-black status-text'>7%</span>
                </div>
              </div>
              <div className="usage-card flex items-start justify-start gap-2">
                <span className='usage-card'>
                RAM
                </span>
                <div className='flex flex-col w-full'>
                <div className="progres-bar w-full bg-[#F2F2F2]  rounded-[10px] overflow-hidden">
                  <div className="progress-bar-inner bg-[#64AE5F] w-[15%] h-full" style={{borderTopRightRadius:"10px" , borderBottomRightRadius:"10px"}}></div>
                </div>
                <span className='text-black status-text'>7% | 12,038.44 mb</span>
                </div>
              </div>
              <div className="usage-card flex items-start justify-start gap-2">
                <span className='usage-card'>
                SWAP
                </span>
                <div className='flex flex-col w-full '>
                <div className="progres-bar w-full bg-[#F2F2F2]  rounded-[10px] overflow-hidden">
                  <div className="progress-bar-inner bg-[#FEC610] w-[15%] h-full" style={{borderTopRightRadius:"10px" , borderBottomRightRadius:"10px"}}></div>
                </div>
                <span className='text-black status-text'>3% | 5,251.00 mb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
