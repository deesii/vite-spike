import { useState } from 'react'
import './App.css'
import MyButton from './components/button'
import NewSection from './components/projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className = "card-section">
      <NewSection>

      </NewSection>
      </div>

      <div>

      </div>
      <h1>About Me</h1>
      <div className="card-section">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
      <div className='card-section'>
  
        <MyButton></MyButton>
      
      </div>
    </>
  )
}

export default App
