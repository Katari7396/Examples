import React, { useState } from 'react'
import Child from './child';

function Parent() {

    const [count, setCount] = useState(0);
    const [message,setMessage] = useState("WELCOME TO COUNT 🔄");

    const increment = () => {
      if (count < 20){
        const newCount = count + 2
          setCount(newCount)
          setMessage(`COUNT INCREASED ${newCount} ⏲`)
        }
      };

     const decrement = () => {
      if (count > 0){
        const newCount = count - 2
          setCount(newCount)
          setMessage(`COUNT DECREASED ${newCount} ⏲`)
      }
    };

    const reset = () => {
      setCount(0)
      setMessage('COUNT RESET TO 0 ⏲')
    };

  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={increment} disabled = {count>=20}>INCREMENT BY 2</button>
      <button onClick={decrement} disabled = {count<=0}>DECREMENT BY 2</button>
      <button onClick={reset}>RESET</button>
        <Child
            count={count}
            message={message}
        />

    </div>
  )
}

export default Parent;
