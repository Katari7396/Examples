import React, { useEffect, useState } from 'react'

function Dependency() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('count after the return statement');
    });
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={() => {setCount(count + 1)}}> CLICK ME </button>
    </div>
  )
}

export default Dependency
