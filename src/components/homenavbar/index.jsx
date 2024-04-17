import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import ProjectNavBar from "../projectnavbar"
import AboutMe from "../aboutme"
import Who from '../goodbye'
import CountComponent from '../count'
import Board from '../tictactoe/board'

export default function HomeNavBar (){
    return(
        <>
            <ul>
                <li><Link to="/aboutme">about me</Link></li>
                <li><Link to="/projects">mini projects</Link></li>
            </ul>
            <Routes>
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/projects" element={<ProjectNavBar />} />
                <Route path="/projects/tictactoe" element={<Board />} />
                <Route path="/projects/counthowhigh" element={<CountComponent />} />
                <Route path="/projects/goodbyes" element={<Who />} />
            </Routes>
        </>
    )
}