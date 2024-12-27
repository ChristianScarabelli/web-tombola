import { useContext } from "react"
import { GameContext } from "../../contexts/GameContext"

export function GenerateNum() {

    const { extractNumber } = useContext(GameContext)

    return (
        <button onClick={extractNumber} className="btn btn-warning mt-3">Estrai</button>
    )
}