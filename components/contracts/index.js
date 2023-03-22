import { useEffect, useState } from "react";
import ContractCard from './contractCard';
import Container from '@mui/material/Container';

import Search from "./searchContract";

export default function Contracts({contracts:contractsList}){
    const [contracts,setContracts] = useState(contractsList)
    useEffect(()=>{
        setContracts(contracts)
    },[contractsList]);

    const performSearch = (q) => {
        // console.log(q,'q')
        fetch(`/api/mapping/searchMap?q=${q}`).then(res=>res.json()).then(res=>{
            debugger
        })
    }
    return <Container maxWidth="lg">
        <Search performSearch={performSearch}/>
        {contracts.map(w=>{
        return <div data-testid='contract-card' className="list_card" key={`contract${w.entityId}`}>
            <ContractCard contractInfo={w}/>
            </div>
    })}</Container>
}