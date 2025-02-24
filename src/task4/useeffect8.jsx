import React, { useEffect, useState } from 'react'

function Index() {

    const [colorIndex,setColorIndex] = useState(0);

    const colors = ['blue', 'orange', 'green', 'lightpink'];

    useEffect(()=>{

        document.body.style.backgroundColor = colors[colorIndex];
    }, [colorIndex, colors]);

    const handleColorChange = () => {
        setColorIndex((prevIndex) => (prevIndex+1) % colors.length);
    }

  return (
    <div>
        <h1>CLICK TO CHANGE MORE COLORS</h1>
        <button onClick={handleColorChange}>COLOR CHANGE</button>
    </div>
  )
}

export default Index