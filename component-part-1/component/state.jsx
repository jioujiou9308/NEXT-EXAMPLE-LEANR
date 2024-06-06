import React from 'react'
import { useState, useEffect } from 'react'
const State = ({ setFatherCount }) => {
    const [count, setCount] = useState(0)
    console.log('I am in component')
    useEffect(()=>{
        console.count('useEffect in component')
    },[count])
    return (
        <div>
            <div>You clicked the button {count}</div>
            <button onClick={() => {
                setCount((count) => count + 1)
            }}>Click me</button>
        </div>
    )
}

export default State