import { searchMappings } from "@/lib/mappingRedis";

export default async function handler(req,res){
    const q = req.query.q;
    const workers = await searchMappings(q);

    res.status(200).json({workers})
}