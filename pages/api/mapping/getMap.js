import { getMap } from "@/lib/mappingRedis";

export default async function handler(req,res){
    const q = req.query.q;
    const maps = await getMap(q);
    // console.log('contracts',contracts)
    res.status(200).json({maps})
}