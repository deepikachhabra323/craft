import {createMapping} from '../../../lib/mappingRedis';

export default async function handler(req,res){
  const id = await createMapping(req.body);
  res.status(200).json({id})
}