import React, { useState } from 'react'

const Item = ({ color }) => {
    const [colorValue, setColorValue] = useState(color)//red
    return (
        <div>
            <h1>{color}</h1>
            <p>i'm {colorValue}</p>
            <hr />
        </div>
    )
}

export default Item