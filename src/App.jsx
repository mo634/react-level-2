import React, { useRef } from 'react'

const App = () => {
    const inputRef = useRef()
    const handleSubmit = () => {
        console.log(inputRef.current.value)
    }
    return (
        <div>
            <input
                type="text"
                placeholder='Enter your name'
                ref={inputRef}
            />

            <button
                onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}

export default App