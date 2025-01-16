// before using conditional rendering 

//1.we can use let,const if no outside modifications 
//2.jsx only accept expression not statement

import React, { useState } from 'react'


const App = () => {

  // const [counter, setCounter] = useState(0)

  let counter = 0


  return (
    <div>

      <button
        onClick={() => counter++} // not allowed 
      >increase</button>

      <p> {counter}</p>

    </div>
  )
}

export default App