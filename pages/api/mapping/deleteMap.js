import { deleteMap } from "@/lib/mappingRedis";

export default async function handler(req,res){
    let body = JSON.parse(req.body);
    const eid = body.eid;
    const maps = await deleteMap(eid);
    // console.log('contracts',contracts)
    res.status(200).json({status:'ok deleted'})
}