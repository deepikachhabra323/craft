import {Client, Schema, Repository, Entity} from 'redis-om';
import {connect,client} from './redis'
class Worker extends Entity{}
let workerSchema = new Schema(
    Worker,{
        firstName: {type:'string'},
        lastName: {type:'string'},
        role: {type:'string'},
        startData: {type:'string'},
        empNo: {type:'string'},
        contracts : {type:'string'}
        // id: {type:'string'}
    },
    {dataStructure:'JSON'}
);

// export async function createWorker(data){
//       await connect();

//       const repository = client.fetchRepository(workerSchema);

//       const worker = repository.createEntity(data);

//       const id = await repository.save(worker);

//       console.log('here')
//       return id;
// }

export async function createIndex(){
    await connect();
    const repository = new Repository(workerSchema,client);
    await repository.createIndex();
}



export async function searchWorkers(q){

    await connect();

    const repository = new Repository(workerSchema,client);

    const workers = await repository.search()
        .where('firstName').eq(q)
        .or('lastName').eq(q)
        .or('empNo').eq(q)
        .or('role').eq(q)
        .or('contracts').eq(q);
    
    return workers;

}

export async function getWorkers(){
    await connect();
    const repository = client.fetchRepository(workerSchema);
    let workers = await repository.search().returnAll();
    return workers
}