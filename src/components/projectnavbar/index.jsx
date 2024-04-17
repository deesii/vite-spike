import { Link } from "react-router-dom"


export default function ProjectNavBar (){
    return(
        <>
            <Link to="/projects/tictactoe">TicTacToe</Link>|
            <Link to="/projects/counthowhigh">Counts</Link>|
            <Link to="/projects/goodbyes">Goodbyes</Link>|
            


        </>
    )
}