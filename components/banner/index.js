import Image from 'next/image';
import Container from '@mui/material/Container';

export default function Banner(){
    return <Container maxWidth="lg" className='craft-parent-image-container'>
    <div className='craft-parent-image'>
    <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" layout='fill' objectFit='fill' unoptimized={true}/>
    <span className='craft-demo-banner-text craft-demo-banner-text-left'>CRAFT</span>
    <span className='craft-demo-banner-text craft-demo-banner-text-right'>DEMO</span>
    </div>
  </Container>
}