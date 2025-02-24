import React, { useEffect, useState } from 'react'

function Value() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('count changed :', count)
    }, [count]);
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => {setCount(count + 1)}}> CLICK ME </button>
    </div>
  )
}

export default Value
