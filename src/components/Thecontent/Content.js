import React from 'react';
import './Content.css';
import arrowicon from "../Images/arrow_btn.png";
import pauseicon from "../Images/pause_icon.png";
import playicon from "../Images/play_icon.png";


export default function Content({data,count,setcount,playlist,setplaylist}) {

   

    
  
 return(
  <div>
    <div className='content'>
    <p>{data.text1}</p>
    <p>{data.text2}</p>

    </div>
    <div className='details'>
      <p>explore the features</p>
      <img src={arrowicon} alt=""></img>
    </div>
    <div className='icons'>
    <ul>
      <li  onClick={()=>setcount(0)}>{count === 0 ?  "🟠" : "⚪"}</li>
      <li   onClick={()=>setcount(1)}>{count === 1 ?  "🟠" : "⚪"}</li>
      <li  onClick={()=>setcount(2)}>{count === 2 ?  "🟠" : "⚪"}</li>
    </ul>

    <p onClick={()=>setplaylist(!playlist)}>{playlist ? <img src={pauseicon} alt=""></img> : <img src={playicon} alt=""></img>}</p>


    </div>
    
   


  </div>
 )
     
         
        
      
     
     
  
}
