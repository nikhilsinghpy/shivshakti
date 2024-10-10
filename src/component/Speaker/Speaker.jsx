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
  const itemsPerPage = 21 // Items per page

  const { isOpen, onOpen, onOpenChange } = useDisclosure() // custom hook for model

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
    fetchspeaker()
  }, []) // This effect runs only on mount

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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Card>
  )
}
