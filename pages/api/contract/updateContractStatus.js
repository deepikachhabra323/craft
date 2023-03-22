import { updateContractStatus } from "@/lib/contractRedis";

export default async function handler(req,res){
    let body = JSON.parse(req.body);
    const {eid,status} = body;
    const id = await updateContractStatus(eid,status);
    res.status(200).json({msg:'Done'})
}