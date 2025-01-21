// 1️⃣ practical example and use case for  conditional rendering
import './style.css'
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
    <div className='container'>

      <p className='content'>{content}</p>

      <button onClick={handleCopy} className='copy-button' >
        {
          isClicked ? <FaCheck /> : <FaRegCopy />
        }
      </button>


    </div>
  )
}

export default App