
import React, { useEffect , useState } from 'react'
import useSound from 'use-sound';
import wait from '../assets/src_sounds_waiting.mp3';



export default function Timer({Qnumber , setTimeOut}) {
  const [waiting] = useSound(wait); 
  const [timer, setTimer] = useState(30);
   useEffect(() =>{
       if(timer <= 0) return setTimeOut(true);
          const interval = setInterval(() => {
            setTimer((prev) => prev-1);
           
          }, 1000);
          return () => clearInterval(interval);
   },[timer , setTimeOut, ]);
    
   useEffect(()=>{
         setTimer(30);
         if(Qnumber > 15){
          setTimer(0);
         }
   },[Qnumber]);

   useEffect(() =>{
    if(timer < 15){ 
      timer >= 7 && waiting(); 
    }
     
     
         
    
   },[waiting,timer])
   
  return  (
     
    <div> {timer} </div>  
   
  )
}
