import { searchContracts } from "@/lib/contractRedis";

export default async function handler(req,res){
    const q = req.query.q;
    const contracts = await searchContracts(q);

    res.status(200).json({contracts})
}