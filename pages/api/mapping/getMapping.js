import { getMappings } from "@/lib/mappingRedis";

export default async function handler(req,res){
    // const q = req.query.q;
    const contracts = await getMappings();

    res.status(200).json({contracts})
}