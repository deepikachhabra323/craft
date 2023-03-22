import { searchWorker } from "@/lib/mappingRedis";

export default async function handler(req,res){
    const q = req.query.q;
    const contracts = await searchWorker(q);
    // console.log('contracts',contracts)
    res.status(200).json({contracts})
}