import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MappingTable({mappings}) {
  const [mapData,setData] = useState(mappings);

  useEffect(()=>setData(mappings),[mappings]);

  const handleDelete = (eid,index) => {
    fetch('/api/mapping/deleteMap',{body:JSON.stringify({eid:eid}),method:'DELETE'}).then(res=>res.json()).then(res=>{
      // debugger
      let data = mapData;
      data.splice(index,1);
      // debugger
      setData([...data]);
    })
  }
  return (
    <TableContainer component={Paper} 
    data-testid="mapping-table"
    // inputProps={{ "data-testid": "mapping-table" }}
    >
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Emp</TableCell>
            <TableCell align="right">Contracts</TableCell>
            <TableCell align="right">Allocation</TableCell>
            <TableCell align="right">Total Allocated</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mapData.map((row,index) => {
            let contracts = [],allocated=0,allocation=[]
            try {
              contracts = JSON.parse(row.contracts);
              allocation = JSON.parse(row.allocation);
              allocated = JSON.parse(row.allocation).reduce((total,num)=>total+parseInt(num),0)
            } catch (error) {
              
            }
            return <>
            <TableRow key={row.emp}>
              <TableCell>{row.emp}</TableCell>
              <TableCell align="right">{contracts.map(c=><><span>{c}</span><br/></>)}</TableCell>
              <TableCell align="right">{allocation.map(c=><><span>{c}</span><br/></>)}</TableCell>
              <TableCell align="right">{allocated}</TableCell>
              <TableCell align="right">
                <IconButton onClick={()=>handleDelete(row.entityId,index)} aria-label="delete">
                  <DeleteIcon sx={{ height: 30, width: 30 }} />
                </IconButton>
              </TableCell>
            </TableRow>
            </>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}