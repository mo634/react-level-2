// keys according to states 
import React, { useState } from 'react'
import Item from './components/Item'
import lodash from "lodash"
const App = () => {
  const [color, setColor] = useState(['red', 'green', 'blue'])
  // green blue red 


  const handleShuffle = () => {
    setColor(lodash.shuffle(color))
  }
  return (
    <div>
      {
        color.map((elem) =>
          <Item
            key={elem}
            color={elem}
          />)
      }

      <button
        onClick={handleShuffle}
      >
        shuffle
      </button>
    </div>
  )
}

export default App