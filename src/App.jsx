// Keys=> index by default 
//1. reorder using keys is more efficient 

import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "a"
    }
    ,
    {
      id: 2,
      name: "b"
    }
    ,
    {
      id: 3,
      name: "c"
    }
  ])

  const handleShuffle = () => {
    setData([
      data[1],
      data[2],
      data[0]
    ])
  }

  const handleReset = () => {
    setData([
      {
        id: 1,
        name: "a"
      }
      ,
      {
        id: 2,
        name: "b"
      }
      ,
      {
        id: 3,
        name: "c"
      }
    ])
  }

  // bca 
  // abc
  return (
    <div>
      <ul>
        {/* <li>{data[0]}</li>
        <li>{data[1]}</li>
        <li>{data[2]}</li> */}

        {
          data.map((item) => <li key={item.id}>{item.name}</li>)
        }
      </ul>

      <button
        onClick={handleShuffle}
      >Shuffle</button>

      <button
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  )
}

export default App