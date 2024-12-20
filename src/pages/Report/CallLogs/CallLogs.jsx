import React from 'react'
import DataTable from '../../../component/DataTable/DataTable'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs'

export const CallLogs = () => {
  // Example data and functions
  const exampleData = [
    {
      caller: 'John Doe',
      callee: 'Jane Smith',
      type: 'Incoming',
      startTime: '10:00 AM',
      endTime: '10:15 AM',
      image: 'Image1',
    },
    {
      caller: 'Alice Brown',
      callee: 'Bob White',
      type: 'Outgoing',
      startTime: '11:00 AM',
      endTime: '11:20 AM',
      image: 'Image2',
    },
    {
      caller: 'John Doe',
      callee: 'Jane Smith',
      type: 'Incoming',
      startTime: '10:00 AM',
      endTime: '10:15 AM',
      image: 'Image1',
    },
    {
      caller: 'Alice Brown',
      callee: 'Bob White',
      type: 'Outgoing',
      startTime: '11:00 AM',
      endTime: '11:20 AM',
      image: 'Image2',
    },
    {
      caller: 'John Doe',
      callee: 'Jane Smith',
      type: 'Incoming',
      startTime: '10:00 AM',
      endTime: '10:15 AM',
      image: 'Image1',
    },
    {
      caller: 'Alice Brown',
      callee: 'Bob White',
      type: 'Outgoing',
      startTime: '11:00 AM',
      endTime: '11:20 AM',
      image: 'Image2',
    },
    {
      caller: 'John Doe',
      callee: 'Jane Smith',
      type: 'Incoming',
      startTime: '10:00 AM',
      endTime: '10:15 AM',
      image: 'Image1',
    },
    {
      caller: 'Alice Brown',
      callee: 'Bob White',
      type: 'Outgoing',
      startTime: '11:00 AM',
      endTime: '11:20 AM',
      image: 'Image2',
    },
    {
      caller: 'John Doe',
      callee: 'Jane Smith',
      type: 'Incoming',
      startTime: '10:00 AM',
      endTime: '10:15 AM',
      image: 'Image1',
    },
    {
      caller: 'Alice Brown',
      callee: 'Bob White',
      type: 'Outgoing',
      startTime: '11:00 AM',
      endTime: '11:20 AM',
      image: 'Image2',
    },
    {
      caller: 'John Doe',
      callee: 'Jane Smith',
      type: 'Incoming',
      startTime: '10:00 AM',
      endTime: '10:15 AM',
      image: 'Image1',
    },
    {
      caller: 'Alice Brown',
      callee: 'Bob White',
      type: 'Outgoing',
      startTime: '11:00 AM',
      endTime: '11:20 AM',
      image: 'Image2',
    },
    {
      caller: 'John Doe',
      callee: 'Jane Smith',
      type: 'Incoming',
      startTime: '10:00 AM',
      endTime: '10:15 AM',
      image: 'Image1',
    },
    {
      caller: 'Alice Brown',
      callee: 'Bob White',
      type: 'Outgoing',
      startTime: '11:00 AM',
      endTime: '11:20 AM',
      image: 'Image2',
    },
    // Add more sample data as needed
  ]

  const exampleColumns = [
    { label: 'Caller', accessor: 'caller' },
    { label: 'Callee', accessor: 'callee' },
    { label: 'Call Type', accessor: 'type' },
    { label: 'Call Start Time', accessor: 'startTime' },
    { label: 'Call End Time', accessor: 'endTime' },
    { label: 'Image', accessor: 'image' },
  ]

  const handleEdit = (row) => console.log('Edit:', row)
  const handleDelete = (row) => console.log('Delete:', row)
  const handleExportCsv = () => console.log('Exporting CSV...')
  const handleView = () => console.log('Exporting CSV...')
  return (
    <div className="w-full p-4">
      <div className="mb-5">
        <Breadcrumbs size={'lg'}
          variant={"solid"}
        >
          <BreadcrumbItem href="/report-setting">Setting</BreadcrumbItem>
          <BreadcrumbItem>Call Logs</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <DataTable
        data={exampleData}
        onEdit={handleEdit}
        columns={exampleColumns}
        onDelete={handleDelete}
        onView={handleView}
        exportCsv={handleExportCsv}
        title="call logs"
      />
    </div>
  )
}
