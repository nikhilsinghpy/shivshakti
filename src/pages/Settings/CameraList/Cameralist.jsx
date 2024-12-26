import React, { useState } from 'react';    
import "./Cameralist.css";
import Breadcrumb from '../../../component/Breadcrumb/Breadcrumb';
import DataTable from '../../../component/DataTable/DataTable';
import PopupDialog from '../../../component/PopupDialog/PopupDialog ';
import Forms from '../../../component/Forms/Forms';
import BigForms from '../../../component/Forms/BigForms';
const Cameralist = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false)
  
    const handleFormSubmit = (formData) => {
      console.log('Form Data submitted:', formData)
    }
    const exampleData = []

    const formFields = [
      { label: 'Select speaker group', type: 'text', id: 'speaker', name: 'speaker' },
      { label: 'Sub location Name', type: 'text', id: 'subocation', name: 'sublocation' },
      { label: 'Remark', type: 'text', id: 'remark', name: 'remark' }
    ]
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
        setIsDialogOpen(true);
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
      <PopupDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Add Camera"
      >
        <BigForms onSubmitForm={handleFormSubmit} formFields={formFields} />
      </PopupDialog>
    </div>
  )
}


export default Cameralist;

