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
      <div className="w-[22.51%] bg-gray-200 p-4">
        <h2 className="text-xl font-semibold">Right Container</h2>
        <p>This is the side section content.</p>
      </div>
    </div>
    </>
  )
}
