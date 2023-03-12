import {createWorker} from '../../../lib/workerRedis';

export default async function handler(req,res){
  const id = await createWorker(req.body);
  res.status(200).json({id})
}