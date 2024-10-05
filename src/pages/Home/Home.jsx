import React, { useEffect, useState } from 'react'
import './Home.css'
import { StatCard } from '../../component/StatCard/StatCard'
import { ProductCard } from '../../component/ProductCard/ProductCard'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import { getapi } from '../../api/GetAPI'
import { CiMobile1, CiSpeaker } from 'react-icons/ci'
import { RxSpeakerQuiet } from 'react-icons/rx'
import { PieChartComp } from '../../component/PieChart/PieChartComp'
import { RetrieveUserData } from '../../utils/RetrieveUserData'
import { GetMethodAPI } from '../../api/GetMethondAPi'




export const Home = () => {

  const [data, setData ] = useState(null);
  const [speakerlist, setSpeakerlist]  = useState([]);

  const fetchData = ()=>{
    try {
      const response = getapi('dashboarddata.php');
      response.then((res) => {
        setData(res[0][0])
      })
      // setData(response)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchspeaker = ()=>{
    const userInfo = RetrieveUserData()[0];
    try {
      const response = GetMethodAPI('speakerlist.php',`cloud_id=${userInfo.cloud_id}`);
      response.then((res) => {
        setSpeakerlist(res.Data)
      })
      // setData(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
    fetchspeaker();
  }, [])

  return (
    <div className="w-full">
      <Card className="p-4 mb-4">
        <CardHeader>
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </CardHeader>
        <CardBody>
          <div className="top-card">
            <StatCard
              icon={<CiMobile1 className="text-2xl text-blue-500" />}
              title={"Total Mobile"}
              value={data?.Mobile}
              secTitile={"Active Mobile"}
              secValue={data?.ActiveMobile || "0"}
              />
            <StatCard
              icon={<RxSpeakerQuiet className="text-2xl text-orange-500" />}
              title={"Active Announcements"}
              value={data?.active_announcements}
              secTitile={"Inactive Announcements"}
              secValue={data?.inactive_announcements || "0"}
              />
            <StatCard
              icon={<CiSpeaker className="text-2xl text-green-500" />}
              title={"Active Speaker"}
              value={data?.Speaker}
              secTitile={"Inactive Speaker"}
              secValue={data?.inactive_Speaker || "0"}
              />
          </div>
        </CardBody>
      </Card>
      <div class="container">
        <div class="flex flex-wrap gap-4">
          <div class="w-[58%] bg-blue-100 p-4">
            <Card className="p-4 mb-4">
              <CardHeader>
                <h1 className="text-3xl font-bold mb-4"> Ip Speaker List</h1>
              </CardHeader>
              <ProductCard data={speakerlist} />
            </Card>
          </div>
          <div class="w-[40%]  bg-green-100 p-4">
            <Card className="p-4 mb-4">
              <CardHeader style={{borderBottom:".5px #ccc"}}>
                <h1 className="text-3xl font-bold mb-4">System Info</h1>
              </CardHeader>
              <PieChartComp/>
              <PieChartComp/>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}
