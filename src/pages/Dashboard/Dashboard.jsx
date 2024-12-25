import { BottomNav } from '../../component/BottomNav/BottomNav'
import TabComponent from '../../component/TabComponent/TabComponent'
import './dashboard.css'
import { Home, Volume2, Mic, Calendar, MapPin } from 'lucide-react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

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
    <div>Welcome to the Home tab!</div>,
    <div>This is your Profile tab.</div>,
    <div>Here are your Settings.</div>,
  ]

  const percentageUsed = 50 // Storage used in percentage
  const percentageAvailable = 100 - percentageUsed
  return (
    <>
      <div className="flex w-full min-h-screen gap-4">
        <div className="w-2/3 ">
          <TabComponent navItems={navItems} tabContents={tabContents} />
        </div>

        {/* Right Section */}
        <div className="w-1/3 h-screen overflow-y-auto">
          <div className="flex flex-col items-center p-4 h-full">
            {/* Time Card */}
            <div className="w-full p-4 bg-[#292D32] rounded-2xl text-white flex justify-center items-center gap-3">
              <div className="text-3xl font-bold">12:55 PM</div>
              <div className="text-xs flex flex-col justify-center items-start">
                Monday, <span>28 November</span>
              </div>
            </div>

            {/* Storage Card */}
            <div className="p-3 bg-white rounded-2xl mt-6 w-full">
              <h4 className="text-xl font-bold text-gray-600">Storage</h4>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3 mt-3">
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
                <div className="w-28 h-28">
                  <Doughnut data={data} options={options} />
                </div>
              </div>
            </div>

            {/* CPU and Memory Card */}
            <div className="p-4 bg-white rounded-lg shadow-md mt-6 w-full">
              <h2 className="text-base font-bold text-gray-800 mb-3">
                CPU Ram usage
              </h2>

              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <span className="font-semibold">CPU info:</span> 11th gen
                  Intel (R) Core (TM) i5-1135G7 @ 2.4
                </p>
                <p>
                  <span className="font-semibold">Uptime:</span> 11 minutes
                </p>
                <p>
                  <span className="font-semibold">CPU speed:</span> 2,419.20 MHz
                </p>
              </div>

              <hr className="my-3 border-gray-300" />

              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Memory usage:
              </h3>

              {/* CPU Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>CPU</span>
                  <span>7%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: '7%' }}
                  ></div>
                </div>
              </div>

              {/* RAM Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>RAM</span>
                  <span>7% | 12,038.44 mb</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: '7%' }}
                  ></div>
                </div>
              </div>

              {/* SWAP Progress */}
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>SWAP</span>
                  <span>3% | 5,251.00 mb</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: '3%' }}
                  ></div>
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
