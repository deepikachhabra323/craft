import { getWorkers } from "@/lib/workerRedis";

export default async function handler(req,res){
    // const q = req.query.q;
    const workers = await getWorkers();
    console.log('workers',workers)
    res.status(200).json({workers})
}