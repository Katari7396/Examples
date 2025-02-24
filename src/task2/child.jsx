import React from 'react'
import Grandchild1 from './grandchild1';
import Grandchild2 from './grandchild2';

function Child ({count, message}) {

  return (
    <div>
      <Grandchild1 count={count}/>
      <Grandchild2 message={message}/>
    </div>
  )
}

export default Child
