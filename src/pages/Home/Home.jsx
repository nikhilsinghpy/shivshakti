import React, { useEffect, useState } from 'react';
import './Home.css';
import { StatCard } from '../../component/StatCard/StatCard';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { CiMobile1, CiSpeaker } from 'react-icons/ci';
import { RxSpeakerQuiet } from 'react-icons/rx';
import { PieChartComp } from '../../component/PieChart/PieChartComp';
import { getapi } from '../../api/GetAPI';
import { Speaker } from '../../component/Speaker/Speaker';
import { BottomNav } from '../../component/Bottomnav/BottomNav';

export const Home = () => {
  const [data, setData] = useState(null);
  const [speaker, setSpeaker] = useState([]);

  // Fetch dashboard data
  const fetchData = async () => {
    try {
      const response = await getapi('dashboarddata.php');
      setData(response[0][0]); // Assuming the data is structured as response[0][0]
    } catch (error) {
      console.log(error);
    }
  };

  // Handle speaker selection
  const handleSpeakerselect = (speakerId, isChecked) => {
    setSpeaker((prevSpeakers) => {
      // Filter out the speaker if it already exists or if isChecked is false
      const filteredSpeakers = prevSpeakers.filter(speaker => speaker.id !== speakerId);
  
      // If isChecked is true, add the new speaker
      if (isChecked) {
        return [...filteredSpeakers, { id: speakerId, value: isChecked }];
      }
  
      return filteredSpeakers;
    });
  };
  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const handletemp = ()=>{
    console.log(speaker);
  }

  return (
    <div className="w-full">
      <Card className="p-4 mb-4">
        <CardHeader>
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </CardHeader>
        <CardBody>
          <div className="top-card ">
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

      <div className="container-fluid mx-auto">
        <div className="flex flex-wrap gap-4">
          <div className="w-full lg:w-[68%] bg-blue-100 p-4">
            {/* Speaker component with speakerchange prop */}
            <Speaker speakerchange={handleSpeakerselect} />
          </div>

          <div className="w-full lg:w-[30%] bg-green-100 p-4">
            <Card className="p-4 mb-4">
              <CardHeader style={{ borderBottom: ".5px #ccc" }}>
                <h1 className="text-3xl font-bold mb-4">System Info</h1>
              </CardHeader>
              <CardBody>
                <PieChartComp />
                <PieChartComp />
              </CardBody>
            </Card>
          </div>
          {
            speaker?.length > 0 ? (
              <BottomNav/>
            ) : null
          }
        </div>
      </div>
    </div>
  );
};
