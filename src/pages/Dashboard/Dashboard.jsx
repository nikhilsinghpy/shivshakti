
import TabComponent from '../../component/TabComponent/TabComponent'
import './dashboard.css'
import { Home, Volume2, Mic, Calendar, MapPin } from 'lucide-react'
import { HomeTab } from './home/HomeTab'
import { Speaker } from './speaker/Speaker'
import { Announcers } from './Announcers/Announcers'
import { Schedule } from './Schedule/Schedule'
import { Zones } from './Zones/Zones'
import img from '../../assets/roundedchart.svg'
import { BottomNav } from '../../component/BottomNav/BottomNav'
import { useEffect, useState } from 'react'
import { getapi } from '../../api/GetAPI'



function getCurrentDateTime() {
  const now = new Date();

  // Format time
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  // Get weekday, month, and numeric day
  const dayOfWeek = now.toLocaleString('default', { weekday: 'long' }); // e.g., "Monday"
  const month = now.toLocaleString('default', { month: 'long' }); // e.g., "March"
  const dayOfMonth = now.getDate(); // e.g., 28

  return { time, dayOfWeek, month, dayOfMonth };
}


// Register required Chart.js components
export const Dashboard = () => {

  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

  const [dashboardData , setdashboardData] = useState({})


  const { time, dayOfWeek, month, dayOfMonth } = currentDateTime;

  const navItems = [
    { label: 'Home', icon: <Home />, active: true },
    { label: 'Speakers', icon: <Volume2 />, active: false },
    { label: 'Announcers', icon: <Mic />, active: false },
    { label: 'Schedule', icon: <Calendar />, active: false },
    { label: 'Zones', icon: <MapPin />, active: false },
  ]

  const tabContents = [
    <HomeTab  data={dashboardData}/>,
    <Speaker />,
    <Announcers />,
    <Schedule />,
    <Zones />,
  ]


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(getCurrentDateTime());
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [])



  const fetchData = async () =>{
    try {
      const response = await getapi(`dashboarddatanew.php`)
      setdashboardData(response)
    } catch (error) {
      throw new Error(error)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-[77.49%] bg-gray-100 p-4">
          <TabComponent navItems={navItems} tabContents={tabContents} />

          <BottomNav/>
        </div>
        <div className="w-[22.51%]  p-4">
          <div className="flex flex-col gap-[.8rem]">
            {/* First Card */}
            <div className="h-[7.9vh] bg-[#292D32] rounded-[12px] flex items-center justify-evenly text-white time-component">
              <h3>{time}</h3>
              <span className="flex flex-col items-center">
                <p>{dayOfWeek}</p>
                <p>{dayOfMonth} {month}</p>
              </span>
            </div>

            {/* Second Card */}
            <div className="h-[29.9vh] bg-[#FFFFFF] rounded-[12px] flex items-center justify-center p-4 ">
              <div className="flex  gap-2 flex-col">
                <h3 className='dashboard-card-title'>Storage</h3>
                <div className='flex'>
                <div className="storage-usage-content w-[50%] mt-3">
                <p className="flex items-center storagetext">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0099FF] mr-2"></span>
                  {dashboardData.storage_used}% Used
                </p>
                <p className="flex items-center storagetext">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E0EFDF] mr-2"></span>
                  <br /> {dashboardData.storage_available}% Available
                </p>
              </div>
                <div className="storage-usage-percentage w-[50%]">
                  <img
                    src={img}
                    alt="Storage Image"
                    className="w-full h-full object-cover"
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
                <p className='device-info-content'>{dashboardData.cpu}</p>
              </span>
              <span className='flex justify-start gap-2 items-center'>
                <h6 className='device-info-title'>Uptime : </h6>
                <p className='device-info-content'>{dashboardData.uptime}</p>
              </span>
              <span className='flex justify-start gap-2 items-center'>
                <h6 className='device-info-title'>CPU speed : </h6>
                <p className='device-info-content'>{dashboardData.cpuspeed}</p>
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
                <span className='text-black status-text'>{dashboardData.cpu_usage}</span>
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
                <span className='text-black status-text'>{dashboardData.usage_ram}</span>
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
                <span className='text-black status-text'>{dashboardData.cpu_swap}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
