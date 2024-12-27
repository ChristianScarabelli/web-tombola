import { useContext } from "react"
import { GameContext } from "../../contexts/GameContext"

export function EndGame() {

    const { resetGame } = useContext(GameContext)

    return (
        <button onClick={resetGame} className="btn btn-danger mt-2">Termina Gioco</button>
    )
}