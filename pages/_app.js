import '@/styles/globals.css';
import { useEffect } from 'react';

// const contracts = [{
//   name:'sc1',
//   status:'active'
// },
// {
//   name:'sc2',
//   status:'active'
// },
// {
//   name:'sc3',
//   status:'draft'
// },
// {
//   name:'sc4',
//   status:'approved'
// },
// {
//   name:'sc5',
//   status:'inactive'
// }]
// const workers = [{
//   firstName: 'c',
//   lastName: 'w1',
//   role: 'a',
//   startData: 'a',
//   empNo: '1',
//   contracts : '["c1","c2"]'
//   // id: {type:'string'}
// },
// {
//   firstName: 'c',
//   lastName: 'w2',
//   role: 'a',
//   startData: 'a',
//   empNo: '1',
//   contracts : '["c2","32"]'
//   // id: {type:'string'}
// },
// {
//   firstName: 'c',
//   lastName: 'w3',
//   role: 'a',
//   startData: 'a',
//   empNo: '1',
//   contracts : '["c1","c3"]'
//   // id: {type:'string'}
// },
// {
//   firstName: 'c',
//   lastName: 'w4',
//   role: 'a',
//   startData: 'a',
//   empNo: '1',
//   contracts : '["c1","c4"]'
//   // id: {type:'string'}
// }]
export default function App({ Component, pageProps }) {

  // useEffect(()=>{
  //   contracts.map(async w=>{
  //     const res = await fetch('/api/contract',{
  //      body: JSON.stringify(w),
  //      headers:{
  //       'Content-Type':'application/json'
  //      },
  //      method:'POST'
  //     });
  //     const result = await res.json();
  //   })
  // },[])

  useEffect(()=>{
    // fetch('/api/getWorkers').then(res=>console.log(res))
    // fetch('/api/getContracts').then(res=>console.log(res))
  },[])
  return <Component {...pageProps} />
}
