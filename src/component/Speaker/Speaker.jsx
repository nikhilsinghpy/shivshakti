import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectItem,
  Card,
  CardHeader,
  Pagination,
  Button,
} from '@nextui-org/react';
import { GetMethodAPI } from '../../api/GetMethondAPi';
import { RetrieveUserData } from '../../utils/RetrieveUserData';
import { ProductCard } from '../../component/ProductCard/ProductCard';
import { AddSpeaker } from './AddSpeaker/AddSpeaker';
import EditSpeaker from './EditSpeaker/EditSpeaker';

export const Speaker = ({ speakerchange, checkedSpeakers }) => {
  const [speakerlist, setSpeakerlist] = useState([]);
  const [filteredSpeakers, setFilteredSpeakers] = useState([]); // For filtering speakers
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setisEditOpen] = useState(false);
  const [grouplist, setGrouplist] = useState([]);
  const itemsPerPage = 16; // Items per page

  const userInfo = RetrieveUserData()[0];

  // Fetching speaker list
  const fetchSpeaker = async () => {
    try {
      const response = await GetMethodAPI(
        'speakerlist.php',
        `cloud_id=${userInfo.cloud_id}`
      );
      const speakerData = response.Data;
      setSpeakerlist(speakerData);
      setFilteredSpeakers(speakerData); // Initially, no filter applied
      setTotalPage(Math.ceil(speakerData.length / itemsPerPage));
      setCurrentPage(1); // Reset to page 1 after fetching
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching group list for dropdown
  const fetchGroup = async () => {
    try {
      const response = await GetMethodAPI(
        'getgrouplist.php',
        `cloud_id=${userInfo.cloud_id}`
      );
      const groupList = response.Data;
      setGrouplist(groupList);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle page change for pagination
  const handlePageChange = (page) => {
    setCurrentPage(page); // Update current page
  };

  // Handle dropdown zone filter
  const handleDropDownChange = (e) => {
    const selectedZone = e.target.value;

    let filteredData = [];
    if (selectedZone === 'All') {
      filteredData = speakerlist;
    } else {
      const extensionsArray = selectedZone.split('::');
      filteredData = speakerlist.filter((speaker) =>
        extensionsArray.includes(speaker.exten)
      );
    }

    setFilteredSpeakers(filteredData);
    setTotalPage(Math.ceil(filteredData.length / itemsPerPage));
    setCurrentPage(1); // Reset to page 1 after filtering
  };

  useEffect(() => {
    fetchSpeaker();
    fetchGroup();
  }, []);

  // Determine the speakers to show for the current page
  const start = (currentPage - 1) * itemsPerPage;
  const currentSpeakers = filteredSpeakers.slice(start, start + itemsPerPage);

  return (
    <>
      <Card className="p-4 mb-4 flex items-center min-h-[90vh]">
        <CardHeader>
          <div className="flex justify-between flex-row gap-5 items-center w-full border-b pb-4">
            <h1 className="text-xl font-bold mb-4">IP Speaker List</h1>
            <div className="flex justify-between flex-row gap-5 items-center">
              <Select
                placeholder="Select a zone"
                className="max-w-xs w-40"
                onChange={handleDropDownChange}
                aria-label="Zone Selection"
              >
                <SelectItem key="All" value="All">
                  All
                </SelectItem>
                {grouplist.map((item) => (
                  <SelectItem key={item.extensions} value={item.extensions}>
                    {item.groupname}
                  </SelectItem>
                ))}
              </Select>
              <Button
                color="primary"
                variant="solid"
                onPress={() => setIsModalOpen(true)}
              >
                Add Speaker
              </Button>
              <Button
                color="warning"
                variant="solid"
                onPress={() => setisEditOpen(true)}
              >
                Edit Speaker
              </Button>
            </div>
          </div>
        </CardHeader>

        <ProductCard
          data={currentSpeakers}
          speakerchange={speakerchange}
          checkedSpeakers={checkedSpeakers}
        />

        <Pagination
          total={totalPage}
          page={currentPage}
          onChange={handlePageChange}
          className="mt-4"
          isCompact
          showControls
          color="secondary"
          shadow
          classNames={'bottom-0 position-absolute'}
        />
      </Card>

      <AddSpeaker onOpenChange={setIsModalOpen} isOpen={isModalOpen} />
      <EditSpeaker
        onOpenChange={setisEditOpen}
        isOpen={isEditOpen}
        speaker={currentSpeakers}
      />
    </>
  );
};
