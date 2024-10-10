import React, { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'
import {
  FaBrain,
  FaMusic,
  FaPhoneAlt,
  FaPhoneSlash,
  FaVolumeUp,
} from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'
import {Select, SelectItem} from "@nextui-org/react";

export const BottomNav = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

  const [activeModal, setActiveModal] = useState(null)
  const openModal = (modalType) => {
    setActiveModal(modalType)
    onOpen()
  }

  const data = [
    {
      key: 1,
      label: 'Option 1',
    },
    {
      key: 2,
      label: 'Option 2',
    },
    {
      key: 3,
      label: 'Option 3',
    },
  ]
  // Render modal content based on activeModal state
  const renderModalContent = () => {
    switch (activeModal) {
      case 'modal1':
        return (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Play Music
            </ModalHeader>
            <ModalBody>
              <p >Select The Music You Want To Listen To</p>
              <Select 
                  label="Select an music" 
                  className="w-full" 
                >
                  {data.map((data) => (
                    <SelectItem key={data.key}>
                      {data.label}
                    </SelectItem>
                  ))}
                </Select>
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
        )
      case 'modal2':
        return (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal 2 Title
            </ModalHeader>
            <ModalBody>
              <p>This is the content for Modal 2.</p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit.
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
        )
      case 'modal3':
        return (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal 3 Title
            </ModalHeader>
            <ModalBody>
              <p>This is the content for Modal 3.</p>
              <p>Mollit dolor eiusmod sunt ex incididunt cillum quis.</p>
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
        )
      case 'modal4':
        return (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal 3 Title
            </ModalHeader>
            <ModalBody>
              <p>This is the content for Modal 3.</p>
              <p>Mollit dolor eiusmod sunt ex incididunt cillum quis.</p>
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
        )
      case 'modal5':
        return (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal 3 Title
            </ModalHeader>
            <ModalBody>
              <p>This is the content for Modal 3.</p>
              <p>Mollit dolor eiusmod sunt ex incididunt cillum quis.</p>
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
        )
      case 'modal6':
        return (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal 3 Title
            </ModalHeader>
            <ModalBody>
              <p>This is the content for Modal 3.</p>
              <p>Mollit dolor eiusmod sunt ex incididunt cillum quis.</p>
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
        )

      default:
        return null
    }
  }

  return (
    <div>
      <div className="fixed bottom-4 left-1/3 right-0 bg-gray-100 shadow-lg w-[40%] p-4 rounded-[1rem] z-50 flex justify-between items-center">
        <Button
          radius="full"
          onPress={() => openModal('modal1')}
          color="primary"
          style={{ padding: '10px', fontSize: '20px' }}
        >
          <FaMusic />
        </Button>
        <Button
          radius="full"
          onPress={() => openModal('modal2')}
          color="success"
          style={{ padding: '10px', fontSize: '20px', color: 'white' }}
        >
          <FaPhoneAlt />
        </Button>
        <Button
          radius="full"
          onPress={() => openModal('modal3')}
          color="danger"
          style={{ padding: '10px', fontSize: '20px' }}
        >
          <FaPhoneSlash />
        </Button>
        <Button
          radius="full"
          onPress={() => openModal('modal4')}
          color="warning"
          style={{ padding: '10px', fontSize: '20px', color: 'white' }}
        >
          <FaVolumeUp />
        </Button>
        <Button
          radius="full"
          onPress={() => openModal('modal5')}
          color="secondary"
          style={{ padding: '10px', fontSize: '20px' }}
        >
          <IoIosSettings />
        </Button>
        <Button
          radius="full"
          onPress={() => openModal('modal6')}
          color="primary"
          style={{ padding: '10px', fontSize: '20px' }}
        >
          <FaBrain />
        </Button>
      </div>

      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>{renderModalContent()}</ModalContent>
      </Modal>
    </div>
  )
}
