import { useEffect, useState } from "react";
import ContractCard from './contractCard';
import Container from '@mui/material/Container';

export default function Workers({contracts:contractsList}){
    const [contracts,setWorkers] = useState(contractsList)
    useEffect(()=>{
        setWorkers(contracts)
    },[contractsList])
    return <Container maxWidth="lg">{contracts.map(w=>{
        return <div className="list_card" key={`contract${w.entityId}`}>
            <ContractCard contractInfo={w}/>
            </div>
    })}</Container>
}