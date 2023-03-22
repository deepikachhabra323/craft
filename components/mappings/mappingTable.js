import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function MappingTable({mappings}) {
  return (
    <TableContainer component={Paper} 
    data-testid="mapping-table"
    // inputProps={{ "data-testid": "mapping-table" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          {/* <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow> */}
          <TableRow>
            <TableCell>Emp</TableCell>
            <TableCell align="right">Contracts</TableCell>
            <TableCell align="right">Allocation</TableCell>
            <TableCell align="right">Total Allocated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mappings.map((row) => {
            let contracts = [],allocated=0,allocation=[]
            try {
              contracts = JSON.parse(row.contracts);
              allocation = JSON.parse(row.allocation);
              allocated = JSON.parse(row.allocation).reduce((total,num)=>total+parseInt(num),0)
            } catch (error) {
              
            }
            
            // debugger
            return <>
            <TableRow key={row.emp}>
              <TableCell>{row.emp}</TableCell>
              <TableCell align="right">{contracts.map(c=><><span>{c}</span><br/></>)}</TableCell>
              <TableCell align="right">{allocation.map(c=><><span>{c}</span><br/></>)}</TableCell>
              <TableCell align="right">{allocated}</TableCell>
            </TableRow>
            {/* {contracts.map((c,ind)=><TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>{c}</TableCell>
              <TableCell align="right">{ind}</TableCell>
            </TableRow>)} */}
            </>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}