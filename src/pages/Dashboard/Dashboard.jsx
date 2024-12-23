
import TabComponent from '../../component/TabComponent/TabComponent'
import './dashboard.css'
import { Home, Volume2, Mic, Calendar, MapPin } from 'lucide-react'
export const Dashboard = () => {
  const navItems = [
    { label: 'Home', icon: <Home />, active: true },
    { label: 'Speakers', icon: <Volume2 />, active: false },
    { label: 'Announcers', icon: <Mic />, active: false },
    { label: 'Schedule', icon: <Calendar />, active: false },
    { label: 'Zones', icon: <MapPin />, active: false },
  ]
  // const cards = [

  //   {
  //     title: "Speakers",
  //     online: 27,
  //     offline: 10,
  //     bgColor: "bg-blue-400",
  //     icon: "🔊",
  //   },
  //   {
  //     title: "Announcers",
  //     online: 27,
  //     offline: 10,
  //     bgColor: "bg-green-400",
  //     icon: "🎤",
  //   },
  //   {
  //     title: "Schedules",
  //     online: 27,
  //     offline: 10,
  //     bgColor: "bg-lime-300",
  //     icon: "📅",
  //   },
  //   {
  //     title: "Zones",
  //     online: 27,
  //     offline: 10,
  //     bgColor: "bg-sky-200",
  //     icon: "📡",
  //   },
  // ];

  return (
    <>
      <TabComponent navItems={navItems} />
    </>
  )
}
