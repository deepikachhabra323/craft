import { onBoardWorker } from "@/lib/mappingRedis";

export default async function handler(req,res){
    let body = JSON.parse(req.body);
    const eid = body.eid;
    const id = await onBoardWorker(eid);
    res.status(200).json({msg:'Done'})
}