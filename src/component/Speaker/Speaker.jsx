import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectItem,
  Card,
  CardHeader,
  Pagination,
  Button,
} from '@nextui-org/react'
import { GetMethodAPI } from '../../api/GetMethondAPi'
import { RetrieveUserData } from '../../utils/RetrieveUserData'
import { ProductCard } from '../../component/ProductCard/ProductCard'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react'

export const Speaker = ({ speakerchange }) => {
  const [speakerlist, setSpeakerlist] = useState([])
  const [selectedSpeaker, setSelectedSpeaker] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const [location,setlocation] = useState([])
  const [sublocation,setsublocation] = useState([])

  const itemsPerPage = 21 // Items per page
  const { isOpen, onOpen, onOpenChange } = useDisclosure() // custom hook for model

  const [formData, setFormData] = useState({
    exten_id: "",
    dialplan_id: "",
    exten_name: "",
    exten_loc: "",
    exten_subloc: "",
    exten_remarks: "",
    exten_status: "", 
    exten_type: "",
    cloud_id: "",
  });

  // Handler for updating form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleclick = () => {
    console.log(formData);
  }

  const fetchSubLocation = async () => {
    try {
      const response = await GetMethodAPI(
        'getsublocation.php',
        `loc_id=0`
      )
      const locationData = response.Data
      // console.log("sublocation",locationData)
      setsublocation(locationData)
    } catch (error) {
      console.log(error)
    }
  }
  const fetchlocation = async () => {
    const userInfo = RetrieveUserData()[0]
    try {
      const response = await GetMethodAPI(
        'getlocation.php',
        `cloud_id=${userInfo.cloud_id}`
      )
      const locationData = response.Data
      // console.log("location",locationData)
      setlocation(locationData)
    } catch (error) {
      console.log(error)
    }
  }
  //code for dashboard api and pagination start here
  const Selectdata = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Zone 1' },
    { id: 3, name: 'Zone 2' },
  ]
  // Fetch speaker list
  const fetchspeaker = async () => {
    const userInfo = RetrieveUserData()[0]
    try {
      const response = await GetMethodAPI(
        'speakerlist.php',
        `cloud_id=${userInfo.cloud_id}`
      )
      const speakerData = response.Data
      setSpeakerlist(speakerData)

      // Calculate total pages and set selected speakers for the first page
      setTotalPage(Math.ceil(speakerData.length / itemsPerPage))
      const selected = speakerData.slice(0, itemsPerPage)
      setSelectedSpeaker(selected)
    } catch (error) {
      console.log(error)
    }
  }
  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page) // Update the current page
    const start = (page - 1) * itemsPerPage
    const selected = speakerlist.slice(start, start + itemsPerPage)
    setSelectedSpeaker(selected) // Update the displayed speakers
  }
  // Handle dropdown zone selection
  const handleDropDownChange = (value) => {
    console.log(value) // Output the selected value
    // You can implement filtering based on the selected zone here
  }

  useEffect(() => {
    fetchspeaker();
    fetchlocation();
    fetchSubLocation();
  }, [])

  return (
    <Card className="p-4 mb-4 flex justify-center items-center min-h-[90vh] ">
      <CardHeader>
        <div className="flex justify-between flex-row gap-5 items-center w-full">
          <h1 className="text-3xl font-bold mb-4">IP Speaker List</h1>
          <div className="flex justify-between flex-row gap-5 items-center">
            <Select
              label="Select Zone"
              placeholder="Select a zone"
              className="max-w-xs w-40"
              onChange={handleDropDownChange}
            >
              {Selectdata.map((item) => (
                <SelectItem key={item.id} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </Select>
            <Button color="primary" variant="solid" onPress={onOpen}>
              Add Speaker
            </Button>
          </div>
        </div>
      </CardHeader>

      <ProductCard data={selectedSpeaker} speakerchange={speakerchange} />

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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={"inside"} size='lg'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <form>
                  <div class="mb-4">
                    <label for="exten_id" class="block text-sm font-medium text-gray-700">No.</label>
                    <input type="text" id="exten_id" onChange={handleChange} name="exten_id" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter No." />
                  </div>
                  <div class="mb-4">
                    <label for="dialplan_id" class="block text-sm font-medium text-gray-700">Dialplan ID</label>
                    <input type="text" id="dialplan_id" onChange={handleChange} name="dialplan_id" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter Dialplan ID" />
                  </div>
                  <div class="mb-4">
                    <label for="exten_name" class="block text-sm font-medium text-gray-700">Extension Name</label>
                    <input type="text" id="exten_name" name="exten_name" onChange={handleChange} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter Extension Name" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exten_loc" className="block text-sm font-medium text-gray-700">Location</label>
                    <select
                      name="exten_loc"
                      id="exten_loc"
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {location.map((item, index) => (
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="exten_subloc" className="block text-sm font-medium text-gray-700">Sub-location</label>
                    <select
                      name="exten_subloc"
                      id="exten_subloc"
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {sublocation.map((item, index) => (
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="mb-4">
                    <label for="exten_remarks" class="block text-sm font-medium text-gray-700">Remarks</label>
                    <textarea id="exten_remarks" name="exten_remarks" onChange={handleChange} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter Remarks"></textarea>
                  </div>
                  <div class="mb-4">
                    <label for="exten_status" class="block text-sm font-medium text-gray-700">Status</label>
                    <select id="exten_status" name="exten_status" onChange={handleChange} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div class="mb-4">
                    <label for="exten_type" class="block text-sm font-medium text-gray-700">Type</label>
                    <input type="text" id="exten_type" name="exten_type" onChange={handleChange} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value="speaker" readonly />
                  </div>
                  <div class="mb-4">
                    <label for="cloud_id" class="block text-sm font-medium text-gray-700">Cloud ID</label>
                    <input type="text" id="cloud_id" name="cloud_id" onChange={handleChange} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value="1" readonly />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleclick}>
                  Add Speaker
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Card>
  )
}
