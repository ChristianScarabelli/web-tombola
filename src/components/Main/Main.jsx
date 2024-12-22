import { Coins } from "../Coins/Coins";
import { Display } from "../Display/Display";

export function Main() {
    return (
        <main className="py-3">
            <div className="container">
                <div className="row">
                    {/* Colonna principale per i numeri */}
                    <div className="col-10">
                        <div className="row row-cols-10 g-3">
                            {/* Generazione dinamica di 90 "Coins" */}
                            {Array.from({ length: 90 }, (_, index) => (
                                <div key={index} className="col">
                                    <Coins />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Colonna per il display */}
                    <div className="col-2 d-flex flex-column align-items-center">
                        <Display />
                        <button className="btn btn-warning mt-3">Estrai</button>
                        <button className="btn btn-danger mt-2">Termina Gioco</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
