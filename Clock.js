
import React,{useState} from'react'

function Clock(){
    let time = new Date().toLocaleString()
    const[clockTime,updateTime] = useState(time)
    setInterval(()=>{
        updateTime(new Date().toLocaleString())
    }, 1000)
    return(
        <h1>Current time is {clockTime}</h1>
    )
    
  }
export default Clock;





