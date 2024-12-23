import React from 'react'

import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb';
import DataTable from '../../../component/DataTable/DataTable';
export const Location = () => {
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
      alert('Button clicked!');
    };

    const breadcrumditem = [{ label: 'Settings', link: '/settings' }, { label: 'location' }]
  return (
    <div className='w-full p-5'>
      <Breadcrumb items={breadcrumditem} />
      <div className='mt-5 w-full'>
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
    </div>
  )
}
