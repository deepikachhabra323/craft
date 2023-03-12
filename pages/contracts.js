import ContractComponent from '../components/contracts';
import { getContracts } from "@/lib/contractRedis";
export default function Contracts({list=[]}){
    return <ContractComponent contracts={list}/>
}

export async function getServerSideProps({ req }) {
    try {
        let res =  await getContracts();
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
            "Error in the Contracts page",
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