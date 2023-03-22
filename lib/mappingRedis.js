import {Client, Schema, Repository, Entity} from 'redis-om';
import {connect,client} from './redis'
class Mapping extends Entity{}
let mappingSchema = new Schema(
    Mapping,{
        emp: {type:'string'},
        contracts: {type:'text',textSearch:true},
        allocation:{type:'text',textSearch:true}
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
        .or('contracts').match(q).returnAll();
    
    return mappings;

}

export async function getMappings(){
    await connect();
    const repository = client.fetchRepository(mappingSchema);
    let mappings = await repository.search().returnAll();
    return mappings
}

export async function offBoardWorker(eid){
    await connect();

    const repository = client.fetchRepository(mappingSchema);

    const worker = await repository.fetch(eid);
    worker.contracts = 'offboard';
    worker.allocation = JSON.stringify([]);

    const id = await repository.save(worker);
    console.log('redis',id)
    return id;
}

export async function onBoardWorker(eid){
    await connect();

    const repository = client.fetchRepository(mappingSchema);

    const worker = await repository.fetch(eid);
    worker.contracts = JSON.stringify([]);
    worker.allocation = JSON.stringify([]);

    const id = await repository.save(worker);
    return id;
}
createIndex();
export async function getMap(eid){
    
    await connect();
    const repository = client.fetchRepository(mappingSchema);
    let mappings =  await repository.search().where('emp').eq(eid).returnAll();
    return mappings
}

export async function searchWorker(eid){
    // createIndex();
    await connect();
    const repository = client.fetchRepository(mappingSchema);
    // console.log(eid,'eid')
    let mappings =  await repository.search().where('contracts').match(eid).returnAll();
    console.log('mapping',mappings)
    return mappings
}