import React, { useState, useEffect } from 'react'
import DataTable from '../../../component/DataTable/DataTable'
import PopupDialog from '../../../component/PopupDialog/PopupDialog '
import { getapi } from '../../../api/GetAPI';
import AddSpeakerForm from '../../../component/Forms/AddSpeakerForm'
export const Speaker = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [speakerData, setspeakerData] = useState([]);
  const exampleData = []

  const exampleColumns = [
    { label: 'Speaker Name', accessor: 'exten_name' },
    { label: 'Number', accessor: 'exten' },
    { label: 'Location', accessor: 'location' },
    { label: 'Sub Location', accessor: 'sublocation' },
    { label: 'status', accessor: 'STATUS' },
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
  const user_info = localStorage.getItem('user_info')
  const fetchData = async () => {
    try {
      const response = await getapi(`speakerlist.php?cloud_id=${user_info.cloud_id}`)
      setspeakerData(response.Data)
    } catch (error) {
      throw new Error(error)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <DataTable
        data={speakerData}
        onEdit={handleEdit}
        columns={exampleColumns}
        onDelete={handleDelete}
        onView={handleView}
        exportCsv={handleExportCsv}
        title="All Speaker"
        itemsPerPage={4}
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
        <AddSpeakerForm onFormSubmit={handleSubmit} />
      </PopupDialog>
    </div>
  )
}
