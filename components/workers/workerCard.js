import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { offBoardWorker } from '@/lib/mappingRedis';



export default function WorkerCard({workerInfo={}}) {
  const [showDetail,setDetail] = useState(false)
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Contract Worker {workerInfo.entityId}
        </Typography>
        <Typography variant="h5" component="div">
           {workerInfo?.firstName} {workerInfo?.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Emp No:{workerInfo?.empNo}
        </Typography>
        <Typography variant="body2">
            Role: {workerInfo?.role}
            <br/>
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={()=>setDetail(true)}>Update</Button>
        </CardActions>
      </Card>
      {showDetail ? <DetailWorker onClose={setDetail} showDetail={showDetail} workerInfo={workerInfo}/>:null}
    </Box>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:'black'
};

function DetailWorker({showDetail,workerInfo,onClose}) {
  let {entityId} = workerInfo;
  const [open, setOpen] = useState(showDetail);
  const [map,setMap] = useState(null)

  useEffect(()=>{
    fetch(`/api/mapping/getMap?q=${entityId}`,{body:JSON.stringify({eid:entityId}),method:'POST'}).then(res=>res.json()).then((res)=>{
      let maps = res.maps;

      if(maps.length && maps[0].contracts!='offboard')
      setMap({contracts:JSON.parse(maps[0].contracts),allocation:JSON.parse(maps[0].allocation),mid:maps[0].entityId})
      else if(maps.length && maps[0].contracts=='offboard')setMap({contracts:'offboard',allocation:[],mid:maps[0].entityId}) 
      else setMap({contracts:[],allocation:[]})
    })
  },[workerInfo.entityId])

  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);onClose(false)};

  const offBoard = (eid='') =>{ // entitiy id of worker
    //we'll call api to offboard this worker
    // if(eid.length)
    fetch('/api/mapping/offBoard',{body:JSON.stringify({eid:eid||`_${entityId}`}),method:'POST'}).then(res=>handleClose())
  };
  const onBoard = (eid='') =>{ // entitiy id of worker
    //we'll call api to onboard this worker
    // if(eid.length)
    fetch('/api/mapping/onBoard',{body:JSON.stringify({eid:eid||`_${entityId}`}),method:'POST'}).then(res=>handleClose())
  };

  return (
    <div data-testid="detail-worker-modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Worker Name : {workerInfo?.firstName} {workerInfo?.lastName}
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Employee No:{workerInfo?.empNo} <br/>
            Employee Role: {workerInfo?.role}
            <br/>
            <div>{map && map.contracts.length && map.contracts!='offboard'?<div>
              <span><b>Contract(allocated %)</b></span>
              {/* <span><b>Allocation %</b></span> */}
              {map.contracts.map((cr,i)=><span>{cr}({map.allocation[i]})</span>)}
            </div>:null}</div>
            <Button data-testid="worker-action-btn" size="small" onClick={()=>map && map.contracts!='offboard'?offBoard(map?.mid):onBoard(map?.mid)}>{map && map.contracts!='offboard'?'Off Board':'On Board'}</Button>
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}