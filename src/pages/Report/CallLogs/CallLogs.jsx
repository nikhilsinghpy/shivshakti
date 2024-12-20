import React from 'react'
import DataTable from '../../../component/DataTable/DataTable';

export const CallLogs = () => {

  const dummyData = [
    {
      caller: "Speaker 1",
      callee: "Speaker 1",
      callType: "Audio",
      startTime: "10:00 AM",
      image: "https://via.placeholder.com/32",
    },
    // Add more rows as needed
  ];
  
  const handleEdit = (row) => console.log("Edit:", row);
  const handleDelete = (row) => console.log("Delete:", row);
  const handleView = (row) => console.log("View:", row);
  const exportCsv = () => console.log("Exporting CSV...");
  return (
    <div className='w-full'>
      <DataTable
        data={dummyData}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        exportCsv={exportCsv}
      />
    </div>
  )
}
