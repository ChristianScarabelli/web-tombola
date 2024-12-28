import { Coins } from "../Coins/Coins"
import { Display } from "../Display/Display"
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

export function Main() {
    const { coinsNumbers } = useContext(GameContext);

    return (
        <main className="py-3">
            <div className="container">
                <div className="row">
                    {/* Colonna principale per i numeri */}
                    <div className="col-8">
                        <div className="row row-cols-5 g-4">
                            {/* Mappa i numeri in 3 righe, ognuna con 5 numeri */}
                            {coinsNumbers.map((row, rowIndex) => (
                                <div key={rowIndex} className="col-12">
                                    <div className="row">
                                        {row.map((num) => (
                                            <div key={num} className="col-2">
                                                <Coins number={num} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Colonna per il display */}
                    <div className="col-4 d-flex flex-column align-items-center">
                        <Display />
                    </div>
                </div>
            </div>
        </main>
    );
}
