import { useEffect, useState } from "react";
import WorkerCard from './workerCard';
import Container from '@mui/material/Container';
import Search from "../common/search";

export default function Workers({workers:workersList}){
    const [workers,setWorkers] = useState(workersList)
    useEffect(()=>{
        setWorkers(workers);
        // console.log(workers)
    },[workersList]);

    const performSearch = (q) => {
        // console.log(q,'q')
        if(q.length==0){
            setWorkers(workersList);
            return
        }
        try {
            fetch(`/api/worker/searchWorker?q=${q}`).then(res=>res.json()).then(res=>{
            // debugger
                setWorkers(res?.workers)
            }).catch(e=>{
                setWorkers(workersList)
            })
        } catch (error) {
            setWorkers(workersList)
        }
        
    }

    return <Container maxWidth="lg">
        <Search performSearch={performSearch} label={"Search Workers by worker name"}/>
        {workers.length?workers.map(w=>{
        return <div className="list_card" key={`worker${w.entityId}`}>
                <WorkerCard workerInfo={w}/>
            </div>
    }):<span>No workers found.</span>}</Container>
}