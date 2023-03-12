import {Client, Schema, Repository, Entity} from 'redis-om';
import {connect,client} from './redis'
class Mapping extends Entity{}
let mappingSchema = new Schema(
    Mapping,{
        emp: {type:'string'},
        contracts: {type:'string'},
        allocation:{type:'string'}
    },
    {dataStructure:'JSON'}
);

export async function createMapping(data){
      await connect();

      const repository = client.fetchRepository(mappingSchema);

      const mapping = repository.createEntity(data);

      const id = await repository.save(mapping);

      console.log('here')
      return id;
}


export async function createIndex(){
    await connect();
    const repository = new Repository(mappingSchema,client);
    await repository.createIndex();
}


export async function searchMappings(q){

    await connect();

    const repository = new Repository(mappingSchema,client);

    const mappings = await repository.search()
        .where('emp').eq(q)
        .or('contracts').eq(q);
    
    return mappings;

}

export async function getMappings(){
    await connect();
    const repository = client.fetchRepository(mappingSchema);
    let mappings = await repository.search().returnAll();
    return mappings
}