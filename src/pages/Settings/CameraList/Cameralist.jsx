import React, { useState } from 'react';    
import "./Cameralist.css";
import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb';
import DataTable from '../../../component/DataTable/DataTable';
const Cameralist = () => {

    const exampleData = []

    const exampleColumns = [
        { label: 'Camera Name', accessor: 'camera name' },
        { label: 'Camera Vendor', accessor: 'camera vendor' },
        { label: 'Camera mode', accessor: 'camera mode' },
      ]
    
      const handleEdit = (row) => console.log('Edit:', row)
      const handleDelete = (row) => console.log('Delete:', row)
      const handleExportCsv = () => console.log('Exporting CSV...')
      const handleView = () => console.log('Exporting CSV...')
      const handleButtonClick = () => {
        alert('Button clicked!');
      };

      const breadcrumditem = [{ label: 'Settings', link: '/settings' }, { label: 'Camera List' }]
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
        title="Camera List"
        customButton={{
          label: 'Add Camera',
          onClick: handleButtonClick,
        }}
      />
      </div>
    </div>
  )
}


export default Cameralist;

