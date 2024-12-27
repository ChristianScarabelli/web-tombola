import { Coins } from "../Coins/Coins"
import { Display } from "../Display/Display"
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

export function Main() {

    const { coinsNumbers } = useContext(GameContext)

    return (
        <main className="py-3">
            <div className="container">
                <div className="row">
                    {/* Colonna principale per i numeri */}
                    <div className="col-8">
                        <div className="row row-cols-10 g-3">
                            {
                                coinsNumbers.map(num =>
                                    // uso i numeri come key perchè sono tutti diversi
                                    <div key={num} className="col">
                                        <Coins number={num} />
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {/* Colonna per il display */}
                    <div className="col-4 d-flex flex-column align-items-center">
                        <Display />
                    </div>
                </div>
            </div>
        </main>
    )
}