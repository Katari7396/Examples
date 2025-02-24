// import React, { useEffect, useState } from 'react'

// function Empty() {
//     const [count, setCount] = useState(0);
//     const [total, setTotal] = useState(1);

//     useEffect (() => {
//         console.log('Mount only one time');
//     }, []);

//   return (
//     <div>
//       <h1>WELCOME TO MY WEB PAGE {count} </h1>
//       <button onClick={()=>{setCount(count+1)}}> click me </button>
//     </div>
//   )
// }

// export default Empty;

import React, { useState, useEffect } from 'react';

function Array() {
  const [name, setName] = useState();

  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={() => setName('Alice')}>Change Name</button>
    </div>
  );
}

export default Array;

