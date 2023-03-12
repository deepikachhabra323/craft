import { useEffect, useState } from "react";
import ContractCard from './contractCard';
import Container from '@mui/material/Container';

export default function Mappings({Mappings:MappingsList}){
    const [Mappings,setMappings] = useState(MappingsList)
    useEffect(()=>{
        setMappings(Mappings)
    },[MappingsList])
    return <Container maxWidth="lg">{Mappings.map(w=>{
        return <div className="list_card" key={`contract${w.entityId}`}>
            <ContractCard contractInfo={w}/>
            </div>
    })}</Container>
}