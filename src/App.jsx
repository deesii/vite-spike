import { Routes, Route } from "react-router-dom"
import './App.css'
import Who from './components/projects'
import CountComponent from './components/count'
import Board from './components/tictactoe/board'
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <h1>deesii</h1>
      
        
        <ul>
            <li><Link to="/tictactoe">TicTacToe</Link></li>
            <li><Link to="/counthowhigh">Counts</Link></li>
            <li><Link to="/goodbyes">Goodbyes</Link></li>
        </ul>
        <Routes>
          <Route path="/tictactoe" element={<Board />} />
          <Route path="/counthowhigh" element={<CountComponent />} />
          <Route path="/goodbyes" element={<Who />} />
        </Routes>
    
    </>
  )
}

export default App
