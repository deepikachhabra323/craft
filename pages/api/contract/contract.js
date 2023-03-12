import {createContract} from '../../../lib/mappingRedis';

export default async function handler(req,res){
  const id = await createContract(req.body);
  res.status(200).json({id})
}