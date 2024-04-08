import { useState } from 'react'
import './App.css'
import MyButton from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <h1>Recipe Book</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
      <p>
        <MyButton></MyButton>
      </p>
    </>
  )
}

export default App
