import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface DocTableProps<
  DataType extends object,
> {
  headers: string[];
  rows: DataType[];
  children: (row: DataType) => React.ReactNode
}

export default function DocTable<
  DataType extends object,
>({
  headers,
  rows,
  children
}: DocTableProps<DataType>) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(head => (
              <TableCell key={head}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            children(row)
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
