import { Coins } from "../Coins/Coins"
import { Display } from "../Display/Display"

// FUNZIONE PER CREARE I NUMERI DEI COIN
// creo array di 90 indici, con callback (_ elemento corrente dell'array, vuoto perchè sono nuovi valori), 
// i + 1 perchè gli indici partono da 0
const arrayDifferentIntNumFromOneToNinety = () => {
    const numbers = Array.from({ length: 90 }, (_, i) => i + 1)
    return numbers
}
// console.log(arrayDifferentIntNumFromOneToNinety())

export function Main() {
    return (
        <main className="py-3">
            <div className="container">
                <div className="row">
                    {/* Colonna principale per i numeri */}
                    <div className="col-10">
                        <div className="row row-cols-10 g-3">
                            {
                                arrayDifferentIntNumFromOneToNinety().map(num =>
                                    <div key={num} className="col">
                                        <Coins numbers={num} />
                                    </div>
                                )
                            }
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

// let numbers = []

// const generateDifferentIntNumFromOneToNinety = () => {
//     const generatedNum = Math.floor(Math.random((max * min) - min) + 1)
//     if (!numbers.includes(generatedNum)) {
//         numbers.push(generatedNum)
//     }
// }
// console.log(numbers)
