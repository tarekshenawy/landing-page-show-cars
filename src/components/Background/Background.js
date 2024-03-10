import React from 'react';
import "./Background.css";
import car1 from "../Images/image1.png";
import car2 from "../Images/image2.png";
import car3 from "../Images/image3.png";
import video from "../Images/video1.mp4";

export default function Background({playlist,count}) {
  if(playlist === true){
   return(
    <video controls autoPlay loop muted className="background">
      <source src={video} type="video/mp4" />
    </video>

   ) 
  }
  else if(count === 0){
   return(
    <img src={car1} className='background' alt=""></img>

   )
  
  }else if(count === 1){
    return(
      <img src={car2} className='background' alt=""></img>

    )

  }else if(count === 2){
    return(
      <img src={car3} className='background' alt=""></img>

    )
  }


 
  
  
}
