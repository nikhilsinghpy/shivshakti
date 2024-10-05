import React, { useMemo, useState } from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
export const DataTable = ({data , column}) => {

  const [page, setPage] = useState(1)
  const rowsPerPage = 4
  const pages = Math.ceil(data.length / rowsPerPage)
  
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage
    return data.slice(start, end)
  }, [page, data])

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: 'min-h-[222px]',
        table: 'w-full',
      }}
    >
      <TableHeader>
        {
          column.map((item) => (
            <TableColumn key={item.key}>{item.label}</TableColumn>
          ))
        }
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
// const columns = [
//   { key: 'name', label: 'Name' },
//   { key: 'height', label: 'Height' },
//   { key: 'mass', label: 'Mass' },
//   { key: 'birth_year', label: 'Birth year' },
// ]

// const data = [
//   { name: 'Luke Skywalker', height: '172', mass: '77', birth_year: '19BBY' },
//   { name: 'C-3PO', height: '167', mass: '75', birth_year: '112BBY' },
//   { name: 'R2-D2', height: '96', mass: '32', birth_year: '33BBY' },
//   { name: 'Darth Vader', height: '202', mass: '136', birth_year: '41.9BBY' },
//   { name: 'Leia Organa', height: '150', mass: '49', birth_year: '19BBY' },
//   { name: 'Owen Lars', height: '178', mass: '120', birth_year: '52BBY' },
//   {
//     name: 'Beru Whitesun lars',
//     height: '165',
//     mass: '75',
//     birth_year: '47BBY',
//   },
//   { name: 'R5-D4', height: '97', mass: '32', birth_year: '32BBY' },
//   {
//     name: 'Biggs Darklighter',
//     height: '183',
//     mass: '84',
//     birth_year: '24BBY',
//   },
//   { name: 'Obi-Wan Kenobi', height: '182', mass: '77', birth_year: '57BBY' },
//   { name: 'Luke Skywalker', height: '172', mass: '77', birth_year: '19BBY' },
//   { name: 'C-3PO', height: '167', mass: '75', birth_year: '112BBY' },
//   { name: 'R2-D2', height: '96', mass: '32', birth_year: '33BBY' },
//   { name: 'Darth Vader', height: '202', mass: '136', birth_year: '41.9BBY' },
//   { name: 'Leia Organa', height: '150', mass: '49', birth_year: '19BBY' },
//   { name: 'Owen Lars', height: '178', mass: '120', birth_year: '52BBY' },
//   {
//     name: 'Beru Whitesun lars',
//     height: '165',
//     mass: '75',
//     birth_year: '47BBY',
//   },
//   { name: 'R5-D4', height: '97', mass: '32', birth_year: '32BBY' },
//   {
//     name: 'Biggs Darklighter',
//     height: '183',
//     mass: '84',
//     birth_year: '24BBY',
//   },
//   { name: 'Obi-Wan Kenobi', height: '182', mass: '77', birth_year: '57BBY' },
// ]