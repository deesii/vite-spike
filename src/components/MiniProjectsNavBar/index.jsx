import { Link } from "react-router-dom"


export default function ProjectNavBar (){
    return(
        <>
            <Link to="/mini-pjts/tictactoe"> TicTacToe</Link> |
            <Link to="/mini-pjts/counthowhigh"> Counts</Link> |
            <Link to="/mini-pjts/goodbyes"> Goodbyes</Link> |
        </>
    )
}