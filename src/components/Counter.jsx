import React, { useState } from 'react'

const Counter = ({ title }) => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <>
            <h1>{title} </h1>
            <p>{counter}</p>

            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>

            <hr />

        </>
    )
}

export default Counter