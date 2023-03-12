import {Client, Schema, Repository, Entity} from 'redis-om';
import {connect,client} from './redis'
class Contract extends Entity{}
let contractSchema = new Schema(
    Contract,{
        name: {type:'string'},
        status: {type:'string'},
    },
    {dataStructure:'JSON'}
);

// export async function createContract(data){
//       await connect();

//       const repository = client.fetchRepository(contractSchema);

//       const contract = repository.createEntity(data);

//       const id = await repository.save(contract);

//       console.log('here')
//       return id;
// }


export async function createIndex(){
    await connect();
    const repository = new Repository(contractSchema,client);
    await repository.createIndex();
}


export async function searchContracts(q){

    await connect();

    const repository = new Repository(contractSchema,client);

    const contracts = await repository.search()
        .where('name').eq(q)
        .or('status').eq(q);
    
    return contracts;

}

export async function getContracts(){
    await connect();
    const repository = client.fetchRepository(contractSchema);
    let contracts = await repository.search().returnAll();
    return contracts
}