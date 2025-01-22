// Section 2
//1️⃣ Lists And Keys
import React from 'react'
import People from './components/People'

const App = () => {
  const myArr = ["home", "about", "info"]



  return (
    <div>
      {
        myArr.map((currentElement) => <People page={currentElement} />)
      }


    </div>
  )
}

export default App