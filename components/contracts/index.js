import { useEffect, useState } from "react";
import ContractCard from './contractCard';
import Container from '@mui/material/Container';
import Search from "../common/search";

export default function Contracts({contracts:contractsList}){
    const [contracts,setContracts] = useState(contractsList)
    useEffect(()=>{
        setContracts(contracts)
    },[contractsList]);

    // const performSearch = (q) => {
    //     // console.log(q,'q')
    //     fetch(`/api/mapping/searchMap?q=${q}`).then(res=>res.json()).then(res=>{
    //         debugger
    //     })
    // }
    const performSearch = (q) => {
        // console.log(q,'q')
        if(q.length==0){
            setContracts(contractsList);
            return
        }
        try {
            fetch(`/api/contract/searchContract?q=${q}`).then(res=>res.json()).then(res=>{
            // debugger
                setContracts(res?.contracts)
            }).catch(e=>{
                setContracts(contractsList)
            })
        } catch (error) {
            setContracts(contractsList)
        }
        
    }

    const onActivity = ()=>{
        performSearch('')
    }
    return <Container maxWidth="lg">
        <Search performSearch={performSearch} label={"Search Contracts by worker id or allocation percentage"}/>
        {contracts.map(w=>{
        return <div data-testid='contract-card' className="list_card" key={`contract${w.entityId}`}>
            <ContractCard onActivity={onActivity} contractInfo={w}/>
            </div>
    })}</Container>
}