import { useState } from 'react'
export default function CountComponent(){
    const [count_1, setCount] = useState(0)
    
    return(
        <div>
            <h1>Count how high!</h1>
            <button onClick={() => setCount((count_1) => count_1 + 1)}>
            count: {count_1} 
            </button>
        </div>
    )
}