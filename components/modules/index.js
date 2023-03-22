import ModuleCard from "./moduleCard";

export default function Modules(){
    return <>
    <ModuleCard url="/workers/" title="Contract Workers" subTitle="List of all workers with contracts assigned to them and their allocation. Workers here can be onboarded/offboarded."/>
    <ModuleCard url="/contracts/" title="Contracts" subTitle="List of all contracts with employees assigned to it and their allocation. Contracts status can be updated here."/>
    <ModuleCard url="contract-worker-mapping" title="Contracts & Workers Mapping" subTitle="List of all workers with contracts assigned to then and their allocation. Mappings can be read/modified here."/>
    </>
}