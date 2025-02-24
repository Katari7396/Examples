import React, { useEffect, useState } from 'react'

function Measure() {
    
    const [height, setHeight] = useState (window.innerHeight);
    const [width, setWidth] = useState (window.innerWidth);

    useEffect (()=>{
        window.addEventListener ("resize", handleResize)
        console.log ("EVENT LISTENER ADDED")

        return() => {
            window.removeEventListener ("resize", handleResize)
            console.log ("REMOVE EVENT LISTENER")
        }
    }, []);

    function handleResize () {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

  return (
    <div>
      <h1>WINDOW HEIGHT : {height} PX</h1>
      <h1>WINDOW WIDTH : {width} PX</h1>
    </div>
  )
}

export default Measure
