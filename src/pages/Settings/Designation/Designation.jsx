import React, { useState } from 'react';
import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb';
import DataTable from '../../../component/DataTable/DataTable';
import "./Designation.css";
import PopupDialog from '../../../component/PopupDialog/PopupDialog ';
import Forms from '../../../component/Forms/Forms';

const Designation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleFormSubmit = (formData) => {
    console.log('Form Data submitted:', formData)
  }

  const exampleData = []

  const exampleColumns = [
    { label: 'Designation Name', accessor: 'designation name' },
    { label: 'remarks', accessor: 'remarks' },
  ]
  const formFields = [
    { label: 'Designation Name', type: 'text', id: 'designation', name: 'designation' },
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
          title="Designation"
          customButton={{
            label: 'Add Designation',
            onClick: handleButtonClick,
          }}
        />
      </div>
      <PopupDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Add Designation"
        height="420px"
        width="500px"
      >
        <Forms onSubmitForm={handleFormSubmit} formFields={formFields} />
      </PopupDialog>

    </div>
  )
}


export default Designation;
