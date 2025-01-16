// before using conditional rendering 

//1.we can use let,const if no outside modifications 
//2.jsx only accept expression not statement

import React, { useState } from 'react'


const App = () => {
  // expression , line you can replace by single value 
  // statement , line you cannot replace by multiple lines

  // expression => line can log in console 

  // statement => line cannot log in console

  return (
    // JSX only accept expression not statement
    <div>

      <h1>Expressions And Statements</h1>

      {
        console.log(5 + 3)
      }

    </div>
  )
}

export default App