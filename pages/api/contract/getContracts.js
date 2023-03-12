import { getContracts } from "@/lib/contractRedis";

export default async function handler(req,res){
    // const q = req.query.q;
    const contracts = await getContracts();

    res.status(200).json({contracts})
}