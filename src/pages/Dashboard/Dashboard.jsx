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
      <div className="flex flex-col lg:flex-row w-full min-h-screen gap-2">
        {/* Left Section - 75% width on laptop, full width on smaller screens */}
        <div className="w-full lg:w-[70%]">
          <TabComponent navItems={navItems} tabContents={tabContents} />
        </div>

        {/* Right Section - 25% width on laptop, hidden on smaller screens */}
        <div className="w-full lg:w-[30%] h-screen overflow-y-auto">
          <div className="flex flex-col items-center p-4 h-full">
            {/* Time Card */}
            <div className="w-full p-4 bg-[#292D32] rounded-2xl text-white flex justify-center items-center gap-3">
              <div className="text-3xl font-bold lg:text-2xl">12:55 PM</div>
              <div className="text-xs flex flex-col justify-center items-start">
                Monday, <span>28 November</span>
              </div>
            </div>

            {/* Storage Card */}
            <div className="p-3 bg-white rounded-2xl mt-6 w-full h-[300px] lg:mt-4">
              <h4 className="text-xl font-bold text-gray-600 lg:text-lg">Storage</h4>
              <div className="flex justify-center items-center gap-[3rem]">
                <div className="flex flex-col gap-5 mt-3 lg:mt-2">
                  {/* Used */}
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    <span className="text-sm text-gray-500 font-semibold">
                      50% Used
                    </span>
                  </div>
                  {/* Available */}
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-green-300 mr-2"></span>
                    <span className="text-sm text-gray-500 font-semibold">
                      50% Available
                    </span>
                  </div>
                </div>
                <div
                  className="w-28 h-28 "
                  style={{
                    backdropFilter:
                      'box-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))',
                  }}
                >
                  <Doughnut data={data} options={options} />
                </div>
              </div>
            </div>

            {/* CPU and RAM Usage */}
            <div className="p-3 bg-white rounded-2xl mt-6 w-full lg:mt-4">
              <h4 className="text-lg font-bold text-gray-500">CPU Ram usage</h4>
              <div className="w-full mt-3 lg:mt-2">
                <div className="flex justify-start gap-2 mb-2 ">
                  <span className="w-[100px] text-gray-500 text-xs">
                    CPU info :
                  </span>
                  <span className=" text-gray-400 text-xs lg:text-[10px]">
                    11th gen Intel (R) Core (TM) i5-1135G7 @ 2.40GHz
                  </span>
                </div>
                <div className="flex justify-start mb-2">
                  <span className="w-[100px] text-gray-500 text-xs">
                    Uptime :
                  </span>
                  <span className="text-gray-400 text-xs lg:text-[10px]" >11 minutes</span>
                </div>
                <div className="flex justify-start">
                  <span className="w-[100px] text-gray-500 text-xs">
                    CPU speed :
                  </span>
                  <span className="text-gray-400 text-xs lg:text-[10px]" >2,418.20 MHz</span>
                </div>
              </div>
              <hr className="my-5"></hr>
              <h3 className="text-lg font-bold text-gray-400">Memory usage</h3>
              <div className="w-full mt-3 lg:mt-2">
                {/* CPU */}
                <div className="flex justify-start gap-2 mb-5">
                  <span className="w-[100px] text-gray-500 text-xs">CPU</span>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="bg-gray-50 w-full h-3 rounded-[12px] overflow-hidden">
                      <div className="bg-[#00ADEE] w-[20%] rounded-[8px] h-full"></div>
                    </div>
                    <span className="text-gray-400 text-xs">7%</span>
                  </div>
                </div>
                {/* RAM */}
                <div className="flex justify-start gap-2 mb-5">
                  <span className="w-[100px] text-gray-500 text-xs">RAM</span>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="bg-gray-50 w-full rounded-[12px] h-3 overflow-hidden">
                      <div className="bg-green-500 w-[10%] rounded-[8px] h-full"></div>
                    </div>
                    <span className="text-gray-400 text-xs lg:text-[10px]">
                      7% | 12,038.44 mb
                    </span>
                  </div>
                </div>
                {/* SWAP */}
                <div className="flex justify-start gap-2 mb-5 w-full">
                  <span className="w-[100px] text-gray-500 text-xs">SWAP</span>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="bg-gray-50 w-full rounded-[12px] overflow-hidden h-3">
                      <div className="bg-yellow-500 w-[10%] rounded-[8px] h-full"></div>
                    </div>
                    <span className="text-gray-400 text-xs">
                      3% | 5,251.00 mb
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  )
}
