import React, { useEffect, useState } from 'react'
import DataTable from '../../../component/DataTable/DataTable'
import { getapi } from '../../../api/GetAPI';
export const Speaker = () => {

  const [speakerData , setspeakerData] = useState([]);
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
    alert('Button clicked!')
  }

    const user_info = localStorage.getItem('user_info')
    const fetchData = async () =>{
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
          label: 'Add Location',
          onClick: handleButtonClick,
        }}
      />
    </div>
  )
}