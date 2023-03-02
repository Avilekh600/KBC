import React, { useState } from 'react'

export default function Start({SetUser}) {
  
    const [input,setInput] = useState(null);
    const handleChange = (event) =>{
        setInput(event.target.value);
    }
    const handleClick = () =>{
                SetUser(input);
    }

  return (
    <div className='startContainer'>
         
         <input type="text" onChange={handleChange} placeholder='Enter your name' className='input'/>
         <input type="button" className='start' value="START" onClick={handleClick}/>

    </div>
  )
}
