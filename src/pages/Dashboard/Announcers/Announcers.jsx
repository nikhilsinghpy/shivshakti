import React, { useState } from 'react'
import DataTable from '../../../component/DataTable/DataTable'
import PopupDialog from '../../../component/PopupDialog/PopupDialog '
import AddSpeakerForm from '../../../component/Forms/AddSpeakerForm'
import AddAnnouncers from '../../../component/Forms/AddAnnouncers'

export const Announcers = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  const exampleData = []
  

  const exampleColumns = [
    { label: 'Speaker Name', accessor: 'Speaker_name' },
    { label: 'Number', accessor: 'number' },
    { label: 'IP Address', accessor: 'IP_Address' },
    { label: 'Location', accessor: 'location' },
    { label: 'status', accessor: 'status' },
  ]

  const handleEdit = (row) => console.log('Edit:', row)
  const handleDelete = (row) => console.log('Delete:', row)
  const handleExportCsv = () => console.log('Exporting CSV...')
  const handleView = () => console.log('Exporting CSV...')

  const handleButtonClick = () => {
    setIsDialogOpen(true);
  }

  const handleSubmit = (data) => {
    console.log(data);
    
  }
  return (
    <div className="w-full">
      <DataTable
        data={exampleData}
        onEdit={handleEdit}
        columns={exampleColumns}
        onDelete={handleDelete}
        onView={handleView}
        exportCsv={handleExportCsv}
        title="All Announcers"
        customButton={{
          label: 'Add Announcer',
          onClick: handleButtonClick,
        }}
      />
      <PopupDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Add Announcer"
        height="600px"
        width="800px"
      >
        <AddAnnouncers onFormSubmit={handleSubmit} />
      </PopupDialog>{' '}
      
    </div>
  )
}
