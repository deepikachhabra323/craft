import MappingComponent from '../components/mappings';
import { getMappings } from "@/lib/mappingRedis";
export default function Mappings({list=[]}){
    return <MappingComponent mappings={list}/>
}

export async function getServerSideProps({ req }) {
    try {
        let res =  await getMappings();
        // console.log("res",res)
        let list = JSON.parse(JSON.stringify(res));
        return {
            props: {
            list,
            userAgent: req.headers["user-agent"],
            },
        };
    } catch (e) {
        console.log(
            "Error in the Mappings page",
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