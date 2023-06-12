import React, {useState} from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App(props) {
    const [squares, setSquares] = useState(boxes);

    const squareElements = squares.map(square =>
        <Box key={square.id}
             id={square.id}
             on={square.on}
             toggle={toggle}/>
    );

    function toggle(id) {
        setSquares(prevState => {
            return prevState.map(l => l.id === id ? {id: l.id, on: !l.on} : l)
        })
    }

    return (
        <main>
            {squareElements}
        </main>
    )
}
