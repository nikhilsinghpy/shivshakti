import React from 'react'
import DataTable from '../../../component/DataTable/DataTable'
export const Zones = () => {
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
    alert('Button clicked!')
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
        title="All Zones"
        customButton={{
          label: 'Add Zones',
          onClick: handleButtonClick,
        }}
      />
    </div>
  )
}