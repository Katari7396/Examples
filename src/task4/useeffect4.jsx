import React, { useEffect, useState } from 'react'

function Clock() {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{

        // document.title = `USE EFFECT`;

        console.log ('count')
        
        const timer = setInterval (() =>{
            setSeconds (prev => prev + 1);
        },100000);

        return () => {
            clearInterval(timer);
        }

    },[]);

  return (
    <div>
        <h1>Timer : {seconds} Seconds</h1>
    </div>
  )
}

export default Clock;
