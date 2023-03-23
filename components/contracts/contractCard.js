import {useEffect, useState, useRef} from 'react';
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
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
// import fetch from "node-fetch"


export default function ContractCard({contractInfo={},onActivity}) {

  const [status,setStatus] = useState(contractInfo?.status||"");
  const [empList,setList] = useState({});
  const [showModal,setShow] = useState(false);

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
    setShow(true);
  }

  const updateContract = () =>{
    fetch('/api/contract/updateContractStatus',{body:JSON.stringify({
      eid:contractInfo?.entityId,
      status:status
    }),method:'POST'}).then(res=>{
      console.log(`Contract updates ${contractInfo?.entityId}`);
      onActivity();
    });
  }

  return (
    <Box sx={{ minWidth: 375 }}>
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
            
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={updateContract}>Update Status</Button>
        <Button size="small" onClick={assignWorker}>Assign Worker</Button>
        </CardActions>
        {showModal?<DetailWorker showModal={showModal} onClose={setShow} empList={empList} contractId={contractInfo?.entityId}/>:null}
      </Card>
    </Box>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:'black'
};

function DetailWorker({showModal,empList,onClose,contractId}) {
  const [open, setOpen] = useState(showModal);
  const [map,setMap] = useState(empList||{});
  const [excludingList,setList] = useState({});
  const itemsRef = useRef([]);

  useEffect(()=>{
    fetch(`/api/mapping/searchContractsWithout?q=${contractId}`).then(res=>res.json()).then(res=>{
      // debugger
      // setList(res)
      if(res?.contracts?.length){
        let list = {}
        res.contracts.map(ele=>{
          // let c = JSON.parse(ele.contracts);
          let a = JSON.parse(ele.allocation).reduce((e,t)=>e+t,0);
          if(a!='100')
          list[ele.emp] = a;
        })
        setList(list);
        // debugger
      }
      // debugger
    })

  },[]);
  useEffect(()=>{
    setMap(empList);
  },[empList])

  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);onClose(false)};


  const addWorker = (emp,allocation)=>{
    let empList = map;
    empList[emp] = allocation;
    setMap({...empList});
    let empListW = excludingList;
    delete empListW[emp];
    setList({...empListW});
    fetch('/api/mapping/updateMap',{
      body:JSON.stringify({
        eid:emp,
        contract:contractId,
        allocation:allocation
      }),
      method:'POST'
    })
  }

  return (
    <div data-testid="detail-worker-modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>{Object.keys(map).length?<div>
              <span><b>Workers(allocated %)</b></span>
              {/* <span><b>Allocation %</b></span> */}
              <table>
              {Object.keys(map).map(l=><tr><td>{l}</td><td>{(map[l])}</td></tr>)}
            </table>
            </div>:null}</div>
          </Typography>
          <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
              Assign Workers
              <br/>
              <TableContainer component={Paper} 
                data-testid="contract-table"
                // inputProps={{ "data-testid": "mapping-table" }}
                >
                  <Table aria-label="spanning table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Emp</TableCell>
                        <TableCell align="right">Allocation %</TableCell>
                        <TableCell align="right">Add</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.keys(excludingList).map((row,i) => {
                        let val = (100-parseInt(excludingList[row]));
                        return <>
                        <TableRow key={row}>
                          <TableCell>{row}</TableCell>
                          <TableCell align="right">
                            <input type={'text'} ref={el => itemsRef.current[i] = el} onChange={(e)=>{
                              itemsRef.current[i].value = e.target.value;
                              val = e.target.value
                              console.log(itemsRef,e.target.value)
                            }} /> {(val)}
                          </TableCell>
                          <TableCell align="right">
                            <IconButton onClick={()=>{
                              let a = itemsRef.current[i].value;
                              // cons
                              if(parseInt(a)>parseInt(val)){
                                alert('Please Enter correct percentage!')
                              }
                              else{
                                  addWorker(row,a)
                              }
                            }} aria-label="delete">
                              <AddBoxIcon sx={{ height: 30, width: 30 }} />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                        </>
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}