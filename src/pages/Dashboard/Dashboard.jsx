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
      <div class="flex w-full h-screen p-4">
        <div class="flex-[7]">
          {/* <TabComponent navItems={navItems} tabContents={tabContents} /> */}
        </div>

        <div class="flex-[3]">
          <div className="w-full p-4 bg-[#292D32] rounded-[24px] text-white flex justify-center items-center gap-[1rem]">
            <div className="time-text">12:55 PM</div>
            <div className="day-date-text flex flex-col justify-center items-start">
              Monday, <span>28 November</span>
            </div>
          </div>
          <div className="dash-board-card storage">
            <p className="dashboard-card-title">Storage</p>
            <div className="storage-usage mt-2 flex justify-between items-start gap-2">
              <div className="storage-usage-content w-[40%] mt-3">
                <p className="flex items-center storagetext">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0099FF] mr-2"></span>{' '}
                  50% Used
                </p>
                <p className="flex items-center storagetext">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E0EFDF] mr-2"></span>
                  <br /> 50% Available
                </p>
              </div>
              <div className="storage-usage-percentage w-[60%]">
                <img src={img} alt="Storage Image" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="dash-board-card cpu-ram-usage">
            <h3 className="card-title">CPU Ram usage</h3>
            <div className="info">
              <p>
                <strong>CPU info:</strong> 11th gen Intel (R) Core (TM)
                i5-1135G7 @2.4
              </p>
              <p>
                <strong>Uptime:</strong> 11 minutes
              </p>
              <p>
                <strong>CPU speed:</strong> 2,419.20 MHz
              </p>
            </div>
            <hr />
            <div className="memory-usage">
              <p className="section-title">Memory usage:</p>
              <div className="usage-bar">
                <span>CPU</span>
                <div className="bar-container">
                  <div className="bar cpu-bar" style={{ width: '7%' }}></div>
                </div>
                <span>7%</span>
              </div>
              <div className="usage-bar">
                <span>RAM</span>
                <div className="bar-container">
                  <div className="bar ram-bar" style={{ width: '7%' }}></div>
                </div>
                <span>7% | 12,038.44 mb</span>
              </div>
              <div className="usage-bar">
                <span>SWAP</span>
                <div className="bar-container">
                  <div className="bar swap-bar" style={{ width: '3%' }}></div>
                </div>
                <span>3% | 5,251.00 mb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
