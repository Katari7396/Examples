import React, { useEffect, useState } from 'react'

function Color() {

    const [color, setColor] = useState('white');

    useEffect(()=>{
        document.body.style.backgroundColor = color;
    }, [color]);

    const handleColorChange = () => {
        const newColor = color === 'white' ? 'lightgrey' : 'white';
        setColor(newColor);
    }

  return (
    <div>
        <h1>CHANGE THE COLOR</h1>
        <button onClick={handleColorChange}>Change</button>
    </div>
  )
}

export default Color
