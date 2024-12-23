import React, { useState } from 'react'
import './Sublocation.css'
import PopupDialog from '../../../component/PopupDialog/PopupDialog '
import Forms from '../../../component/Forms/Forms'
import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb';
import DataTable from '../../../component/DataTable/DataTable';

const Sublocation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleFormSubmit = (formData) => {
    console.log('Form Data submitted:', formData)
  }
  const exampleData = []

  const exampleColumns = [
    { label: 'Caller', accessor: 'caller' },
    { label: 'Callee', accessor: 'callee' },
    { label: 'Call Type', accessor: 'type' },
  ]

  const handleEdit = (row) => console.log('Edit:', row)
  const handleDelete = (row) => console.log('Delete:', row)
  const handleExportCsv = () => console.log('Exporting CSV...')
  const handleView = () => console.log('Exporting CSV...')
  const handleButtonClick = () => {
    alert('Button clicked!')
  }

  const breadcrumditem = [
    { label: 'Settings', link: '/settings' },
    { label: ' Sub-location' },
  ]

  return (
    <div className='w-full p-5'>
      <Breadcrumb items={breadcrumditem} />
      <div className="mt-5 w-full">
        <DataTable
          data={exampleData}
          onEdit={handleEdit}
          columns={exampleColumns}
          onDelete={handleDelete}
          onView={handleView}
          exportCsv={handleExportCsv}
          title="Location"
          customButton={{
            label: 'Add Location',
            onClick: handleButtonClick,
          }}
        />
      </div>
      <PopupDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Add Location"
      >
        {/* <p className="text-gray-700">
                    This is a reusable popup dialog. You can pass dynamic content here as children.
                </p> */}
        <Forms onSubmitForm={handleFormSubmit} />
      </PopupDialog>
    </div>
  )
}

export default Sublocation
