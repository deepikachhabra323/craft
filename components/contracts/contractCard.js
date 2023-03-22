import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import fetch from "node-fetch"


export default function ContractCard({contractInfo={}}) {

  const [status,setStatus] = useState(contractInfo?.status||"");
  const [empList,setList] = useState({});

  useEffect(()=>{
    fetch(`/api/mapping/searchContracts?q=${contractInfo?.entityId}`).then(res=>res.json()).then(res=>{
      // debugger
      // setList(res)
      if(res?.contracts?.length){
        let list = {}
        res.contracts.map(ele=>{
          let c = JSON.parse(ele.contracts).indexOf(contractInfo.entityId);
          let a = JSON.parse(ele.allocation)[c];
          list[ele.emp] = a;
        })
        setList(list);
      }
      // debugger
    })
  },[]);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const assignWorker =  () =>{

  }

  const updateContract = () =>{
    fetch('/api/contract/updateContractStatus',{body:JSON.stringify({
      eid:contractInfo?.entityId,
      status:status
    }),method:'POST'}).then(res=>console.log(`Contract updates ${contractInfo?.entityId}`))
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Service Contract {contractInfo?.entityId}
        </Typography>
        <Typography variant="h5" component="p">
           {contractInfo?.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {/* Status: */}
            <br/>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  // defaultValue={status}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Status"
                  onChange={handleChange}
                  inputProps={{ "data-testid": "select-input" }}
                >
                  <MenuItem value={'draft'}>Draft</MenuItem>
                  <MenuItem value={'approved'}>Approved</MenuItem>
                  <MenuItem value={'active'}>Active</MenuItem>
                  <MenuItem value={'inactive'}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <table>
              {Object.keys(empList).map(l=><tr><td>{l}</td><td>{empList[l]}</td></tr>)}
            </table>
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={updateContract}>Update Status</Button>
        <Button size="small" onClick={assignWorker}>Assign Worker</Button>
        </CardActions>
      </Card>
    </Box>
  );
}