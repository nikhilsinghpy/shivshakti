import React, { useState } from 'react';

import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb';
import DataTable from '../../../component/DataTable/DataTable';
import "./Department.css";
import PopupDialog from '../../../component/PopupDialog/PopupDialog ';
import Forms from '../../../component/Forms/Forms';

const Department = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleFormSubmit = (formData) => {
    console.log('Form Data submitted:', formData)
  }

  const exampleData = []

  const exampleColumns = [
    { label: 'Department Name', accessor: 'department name' },
    { label: 'remarks', accessor: 'remarks' },
  ]

  const formFields = [
    { label: 'Department Name', type: 'text', id: 'department', name: 'department' },
    { label: 'Remark', type: 'text', id: 'remark', name: 'remark' },
  ]

  const handleEdit = (row) => console.log('Edit:', row)
  const handleDelete = (row) => console.log('Delete:', row)
  const handleExportCsv = () => console.log('Exporting CSV...')
  const handleView = () => console.log('Exporting CSV...')
  const handleButtonClick = () => {
    setIsDialogOpen(true);
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

      <PopupDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Add Department"
        height="420px"
        width="500px"
      >
        <Forms onSubmitForm={handleFormSubmit} formFields={formFields} />
      </PopupDialog>
    </div>
  )
}

export default Department;

