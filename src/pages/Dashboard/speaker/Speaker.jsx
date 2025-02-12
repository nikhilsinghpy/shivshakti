import React, { useState } from 'react'
import DataTable from '../../../component/DataTable/DataTable'
import PopupDialog from '../../../component/PopupDialog/PopupDialog '
import AddSpeakerForm from '../../../component/Forms/AddSpeakerForm'
export const Speaker = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const exampleData = []

  const exampleColumns = [
    { label: 'Speaker Name', accessor: 'Speaker_name' },
    { label: 'Number', accessor: 'number' },
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
        title="All Speaker"
        customButton={{
          label: 'Add Speaker',
          onClick: handleButtonClick,
        }}
      />

      <PopupDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Add Camera"
        height="600px"
        width="980px"
      >
        <AddSpeakerForm onFormSubmit={handleSubmit}/>
      </PopupDialog>
    </div>
  )
}
