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
