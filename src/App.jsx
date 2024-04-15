import { useState } from 'react'
import './App.css'
import MyButton from './components/button'
import Who from './components/projects'
import CountComponent from './components/count'
import Board from './components/tictactoe/board'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(""); 
  const [result, setResult] = useState(""); 
  function handleSubmit(e) { 
      e.preventDefault(); 
      setResult( 
          "Hello " + 
              value 
      ); 
  } 
  function handleChange(e) { 
      setValue(e.target.value); 
      setResult(""); 
  } 
  

  return (
    <>
      <h1>deesii</h1>
      {/* <CountComponent></CountComponent> */}
      <div className= "card-section">
            <h2>Hello</h2>
            <div>
                <form onSubmit = {handleSubmit}>
                    What is your name?
                    <input 
                    type = "text" 
                    id = "project_input" 
                    name = "project_input" 
                    placeholder = "fill me in" 
                    value={value} 
                    onInput={handleChange} required/>
                    <p></p>
                    <input type = "submit" id = "project_submit" name = "test" placeholder = "click me" />
                </form>
            </div>
                <div>
                    <p>{result}</p>
                </div>
        </div>

      <div className="card-section">
        <h1>Count me</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count: {count} 
        </button>
        <p>
          
        </p>
      </div>

      <div className='card-section'>
  
        <MyButton></MyButton>
      
      </div>

      <div className='card-section'>
        <Board></Board>
        
      </div>
      <div className='card-section'>
        <CountComponent/>
      </div>

      

      <div className='card-section'>
        <Who/>
      </div>
    
    </>
  )
}

export default App
