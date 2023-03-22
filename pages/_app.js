import '@/styles/globals.css';
import { useEffect } from 'react';
import Banner from '@/components/banner';

// const maps=[{
//   emp:"01GV8ZWP5JJ9YC1CJAFYHZ3ZPS",
//   contracts:JSON.stringify(["01GV98ARK0YHF2CMKX4YWHZE3N"]),
//   allocation:JSON.stringify(['100'])
// },
// {
//   emp:"01GV8ZWP5JV1S7WZPQ8WW7T3WP",
//   contracts:JSON.stringify(["01GV98ARK0YHF2CMKX4YWHZE3N","01GV987AYTWS3S6ZJC4FCG6BGH"]),
//   allocation:JSON.stringify(['25','75'])
// }
// ]
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
//   // contracts : '["c1","c2"]'
//   // id: {type:'string'}
// },
// {
//   firstName: 'c',
//   lastName: 'w2',
//   role: 'a',
//   startData: 'a',
//   empNo: '1',
//   // contracts : '["c2","32"]'
//   // id: {type:'string'}
// },
// {
//   firstName: 'c',
//   lastName: 'w3',
//   role: 'a',
//   startData: 'a',
//   empNo: '1',
//   // contracts : '["c1","c3"]'
//   // id: {type:'string'}
// },
// {
//   firstName: 'c',
//   lastName: 'w4',
//   role: 'a',
//   startData: 'a',
//   empNo: '1',
//   // contracts : '["c1","c4"]'
//   // id: {type:'string'}
// }]
export default function App({ Component, pageProps }) {

  // useEffect(()=>{
  //   maps.map(async w=>{
  //     const res = await fetch('/api/mapping/map',{
  //      body: JSON.stringify(w),
  //      headers:{
  //       'Content-Type':'application/json'
  //      },
  //      method:'POST'
  //     });
  //     const result = await res.json();
  //   })
  // },[])

  // useEffect(()=>{
  //   fetch('/api/mapping/getMap?q=01GV8ZWP5JJ9YC1CJAFYHZ3ZPS').then(res=>{
  //     debugger
  //   })
  // },[])

  // useEffect(()=>{
  //   debugger
  // },[])
  // useEffect(()=>{
  //   workers.map(w=>{
  //      fetch('/api/worker/worker',{
  //       method:'POST',
  //       body:JSON.stringify(w),
  //       headers:{
  //       'Content-Type':'application/json'
  //      },
  //      }).then(res=>console.log(res))
  //   })
  // },[])

  useEffect(()=>{
    // fetch('/api/getWorkers').then(res=>console.log(res))
    // fetch('/api/getContracts').then(res=>console.log(res))
  },[])
  return <section className='text-center'>
    <div className="parent">
      <Banner/>
      <Component {...pageProps} />
    </div>
    </section>
  
}
