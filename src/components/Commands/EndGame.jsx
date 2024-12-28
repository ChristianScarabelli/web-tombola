import { useContext } from "react"
import { GameContext } from "../../contexts/GameContext"

export function EndGame() {

    const { resetGame, canResetGame } = useContext(GameContext)

    return (
        <button onClick={resetGame} disabled={!canResetGame} className="btn btn-danger mt-2">Termina Gioco</button>
    )
}