import { Coins, arrayDifferentIntNumFromOneToNinety } from "../Coins/Coins"
import { GenerateNum } from "../Commands/GenerateNum";
import { Display } from "../Display/Display"
import { useState, useEffect } from "react";

export function Main() {

    // variabile di stato per i numeri generati
    const [numbers, setNumbers] = useState([])

    // variabile di stato per i numeri dei coin
    const [initialNumbers, setInitialNumbers] = useState([])

    // creo i numeri dei coin solo al primo render della pagina
    useEffect(() => {
        setInitialNumbers(arrayDifferentIntNumFromOneToNinety())
    }, [])
    return (
        <main className="py-3">
            <div className="container">
                <div className="row">
                    {/* Colonna principale per i numeri */}
                    <div className="col-8">
                        <div className="row row-cols-10 g-3">
                            {
                                initialNumbers.map(num =>
                                    <div key={num} className="col">
                                        <Coins numbers={num} />
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {/* Colonna per il display */}
                    <div className="col-4 d-flex flex-column align-items-center">
                        <Display numbers={numbers} />
                        <GenerateNum setNumbers={setNumbers} />
                        <button className="btn btn-danger mt-2">Termina Gioco</button>
                    </div>
                </div>
            </div>
        </main>
    );
}