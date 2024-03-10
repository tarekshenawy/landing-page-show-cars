import React, {useEffect, useRef, useState } from 'react';
import Navbar from './Navbar/Navabar';
import Background from './Background/Background';
import Content from './Thecontent/Content';




export default function Landing() {
  let time = useRef(true);

  useEffect(()=>{
    if(time.current){
      setInterval(() => {
        setcount(count=>{
         return  count===2 ? 0 :count+1;
        
        
        })
         
       }, 3000);
      
    }
    time.current=false;

   
      

     
      
   
  },[])



    

    let data=[
        {text1:"dive into ",text2:"what you love"},
        {text1:"idulage ",text2:"your passions"},
        {text1:"give into",text2: "your passions"},

    ]

    const [count,setcount]=useState(0);
    const [playlist,setplaylist]=useState(false);

    

  return (
    <div className='container'>
       
        <Background playlist={playlist} count={count}></Background>
        <Navbar/>
        <Content count={count} data={data[count]} setcount={setcount} playlist={playlist} setplaylist={setplaylist}/>

    </div>
   


   
  )
}
























