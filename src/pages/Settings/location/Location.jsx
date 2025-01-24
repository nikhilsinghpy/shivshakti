import React, { useState } from 'react'

import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb';
import DataTable from '../../../component/DataTable/DataTable';
import Forms from '../../../component/Forms/Forms';
import PopupDialog from '../../../component/PopupDialog/PopupDialog ';
export const Location = () => {
  const exampleData = []
  const [isDialog, setIsDialogOpen] = useState(false);

  const exampleColumns = [
    { label: 'Caller', accessor: 'caller' },
    { label: 'Callee', accessor: 'callee' },
    { label: 'Call Type', accessor: 'type' },
  ]

  const formFields = [
    { label: 'Location Name', type: 'text', id: 'Location Name', name: 'location' },
    { label: 'Remark', type: 'text', id: 'remark', name: 'remark' }
  ]

  const handleEdit = (row) => console.log('Edit:', row)
  const handleDelete = (row) => console.log('Delete:', row)
  const handleExportCsv = () => console.log('Exporting CSV...')
  const handleView = () => console.log('Exporting CSV...')



  const handleButtonClick = () => {
    setIsDialogOpen(true);
  };

  const handleSubmit = (formData) => {
    console.log(formData);

  }

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

      <PopupDialog isOpen={isDialog} onClose={() => setIsDialogOpen(false)} title='Sub Location'  height="420px"
        width="420px">
        <Forms onSubmitForm={handleSubmit} formFields={formFields} />
      </PopupDialog>
    </div>
  )
}
