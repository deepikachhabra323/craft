import WorkerComponent from '../components/workers';
import { getWorkers } from "@/lib/workerRedis";
import { getMap } from "@/lib/mappingRedis";
export default function Workers({list=[]}){
    return <WorkerComponent workers={list}/>
}

export async function getServerSideProps({ req }) {
    try {
        let res =  await getWorkers();
        // console.log("res",res)
        let list = JSON.parse(JSON.stringify(res));
        let map = await getMap(list[0].entityId);
        console.log('map',map)
        return {
            props: {
            list,
            userAgent: req.headers["user-agent"],
            },
        };
    } catch (e) {
        console.log(
            "Error in the Workers page",
            e
        );
    }
    return {
        props: {
        list:[],
        userAgent: req.headers["user-agent"],
        },
    };
  }