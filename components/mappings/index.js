import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import MappingTable from './mappingTable'

export default function Mappings({mappings:mappingsList}){
    const [mappings,setMappings] = useState(mappingsList)
    useEffect(()=>{
        setMappings(mappings)
    },[mappingsList])
    return <Container maxWidth="lg">
        <MappingTable mappings={mappings}/>
    </Container>
}