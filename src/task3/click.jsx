// import React, { useState } from 'react'

// function Click() {
//     const [click, setClick] = useState(0)

//   return (
//     <div>
//         <h3>YOU CLICKED {click}</h3>
//         <button onClick={()=>{setClick(click+5)}}>INCREMENT</button>
//         <button onClick={()=>{setClick(click-5)}}>DECREMENT</button>
        
//     </div>
//   )
// }

// export default Click;

import React, { useState } from 'react'

function Timer() {
    const [click,setClick] = useState(0);

    const increment = () => {
        if (click < 50){
            setClick(click+5);
        }
    };

    const decrement = () => {
        if (click > 0){
            setClick(click-5);
        }
    };
  return (
    <div>
        <h3>TIMER : {click} ⏲</h3>

        <button onClick={increment}>INCREMENT BY 5</button>
        <button onClick={decrement}>DECREMENT BY 5</button>
      
    </div>
  )
}

export default Timer

