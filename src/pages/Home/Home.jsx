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
  const [activeData, setactiveData] = useState([])

  // Fetch dashboard data
  const fetchData = async () => {
    try {
      const response = await getapi('dashboarddata.php');
      setData(response[0][0]); // Assuming the data is structured as response[0][0]
    } catch (error) {
      console.log(error);
    }
  };
  const fetchActiveData = async () => {
    try {
      const response = await getapi('onchk.php');
      // console.log(response)
      setactiveData(response);
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
    fetchActiveData();
  }, []);

  return (
    <div className="w-full p-4">
      <Card className="p-4 mb-4">
        <CardHeader>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </CardHeader>
        <CardBody>
          <div className="top-card ">
            <StatCard
              heading={"IP Speaker"}
              title={"online"}
              value={activeData?.onlinespeakers}
              secTitile={"offline"}
              secValue={data?.Speaker - activeData?.onlinespeakers}
            />
            <StatCard
              heading={"IP Phone"}
              title={"online"}
              value={activeData?.onlinemobile}
              secTitile={"offline"}
              secValue={data?.Mobile - activeData?.onlinemobile}
            />
            <StatCard
              heading={"Announcements"}
              title={"active"}
              value={data?.active_announcements}
              secTitile={"inactive"}
              secValue={data?.inactive_announcements || "0"}
            />
            <StatCard
              heading={"Mobile App"}
              title={"online"}
              value={activeData?.onlinemobile}
              secTitile={"offline"}
              secValue={data?.Mobile - activeData?.onlinemobile}
            />
          </div>
        </CardBody>
      </Card>

      <div className="container-fluid mx-auto">
        <div className="flex flex-wrap gap-4">
          <div className="w-full lg:w-[68%]">
            {/* Speaker component with speakerchange prop */}
            <Speaker speakerchange={handleSpeakerselect}  checkedSpeakers={speaker}/>
          </div>

          <div className="w-full lg:w-[30%]">
            <Card className="p-4 mb-4">
              <CardHeader style={{ borderBottom: ".5px #ccc" }}>
                <h1 className="text-xl font-bold mb-4">System Info</h1>
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
