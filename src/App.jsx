// 1️⃣ practical example and use case for  conditional rendering

import React, { useState } from 'react'
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const App = () => {

  const [isClicked, setIsClicked] = useState(false)
  const [content, setContent] = useState("mohamed")
  // write logic

  const handleCopy = async () => {
    setIsClicked(true)

    await navigator.clipboard.writeText(content)

    setTimeout(() => {
      setIsClicked(false)
    }, 3000);



  }
  return (
    <div>

      <p>{content}</p>

      <button onClick={handleCopy} >
        {
          isClicked ? <FaCheck /> : <FaRegCopy />
        }
      </button>


    </div>
  )
}

export default App