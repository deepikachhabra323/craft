import { searchWorkers } from "@/lib/workerRedis";

export default async function handler(req,res){
    const q = req.query.q;
    const workers = await searchWorkers(q);

    res.status(200).json({workers})
}