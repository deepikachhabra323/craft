import { updateContractStatus } from "@/lib/contractRedis";
import { updateMaps } from "@/lib/mappingRedis";

export default async function handler(req,res){
    let body = JSON.parse(req.body);
    const {eid,status} = body;
    const id = await updateContractStatus(eid,status);
    if(status=='inactive'){
        await updateMaps(eid)
    }
    res.status(200).json({msg:'Done'})
}