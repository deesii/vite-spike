export default function Square({value, onSquareClick}) {
    console.log(value)
    return <button className="square" onClick = {onSquareClick}>{value}</button>;



}

//value is the prop which is the argument that will be passed through the square component: Square component is passed as a "prop" from the board parent