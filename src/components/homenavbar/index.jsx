import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import ProjectNavBar from "../miniprojectsnavbar"
import AboutMe from "../aboutme"
import Who from '../goodbye'
import CountComponent from '../count'
import Board from '../tictactoe/board'
import CvProjects from "../cvprojectsnavbar"
import BlueberriesBnb from "../BlueberriesBnb"

export default function HomeNavBar (){
    return(
        <>
            <ul>
                <li><Link to="/aboutme">about me</Link></li>
                <li><Link to="/mini-pjts">mini projects</Link></li>
                <li><Link to="/cv-pjts">cv projects</Link></li>
            </ul>
            <Routes>
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/mini-pjts" element={<ProjectNavBar />} />
                <Route path="/mini-pjts/tictactoe" element={<Board />} />
                <Route path="/mini-pjts/counthowhigh" element={<CountComponent />} />
                <Route path="/mini-pjts/goodbyes" element={<Who />} />
                <Route path="/cv-pjts" element={<CvProjects/>} />
                <Route path="/cv-pjts/blueberriesbnb" element={<BlueberriesBnb/>} />
            </Routes>
        </>
    )
}