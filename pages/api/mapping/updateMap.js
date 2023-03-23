import { updateWorker } from "@/lib/mappingRedis";

export default async function handler(req,res){
    let body = JSON.parse(req.body);
    const {contract,allocation,eid} = body;
    const id = await updateWorker(eid,contract,allocation);
    res.status(200).json({id})
}