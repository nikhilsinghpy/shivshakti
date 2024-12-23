import React, { useState } from 'react';

import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb';
import DataTable from '../../../component/DataTable/DataTable';
import "./Department.css";

const Department = () => {
     
    const exampleData = []

    const exampleColumns = [
        { label: 'Department Name', accessor: 'department name' },
        { label: 'remarks', accessor: 'remarks' },
      ]
    
      const handleEdit = (row) => console.log('Edit:', row)
      const handleDelete = (row) => console.log('Delete:', row)
      const handleExportCsv = () => console.log('Exporting CSV...')
      const handleView = () => console.log('Exporting CSV...')
      const handleButtonClick = () => {
        alert('Button clicked!');
      };

      const breadcrumditem = [{ label: 'Settings', link: '/settings' }, { label: 'Designation ' }]
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
        title="Department"
        customButton={{
          label: 'Add Department',
          onClick: handleButtonClick,
        }}
      />
      </div>
    </div>
  )
}

export default Department;

