import { searchContracts } from "@/lib/contractRedis";

export default async function handler(req,res){
    const q = req.query.q;
    const workers = await searchContracts(q);

    res.status(200).json({workers})
}