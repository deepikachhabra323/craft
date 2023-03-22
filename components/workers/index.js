import { useEffect, useState } from "react";
import WorkerCard from './workerCard';
import Container from '@mui/material/Container';

export default function Workers({workers:workersList}){
    const [workers,setWorkers] = useState(workersList)
    useEffect(()=>{
        setWorkers(workers);
        // console.log(workers)
    },[workersList]);

    return <Container maxWidth="lg">{workers.length?workers.map(w=>{
        return <div className="list_card" key={`worker${w.entityId}`}>
                <WorkerCard workerInfo={w}/>
            </div>
    }):<span>No workers found.</span>}</Container>
}