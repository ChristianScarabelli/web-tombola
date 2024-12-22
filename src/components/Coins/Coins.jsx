// FUNZIONE PER CREARE I NUMERI DEI COIN
// creo array di 90 indici, con callback (_ elemento corrente dell'array, vuoto perchè sono nuovi valori), 
// i + 1 perchè gli indici partono da 0
export const arrayDifferentIntNumFromOneToNinety = () => {
    const numbers = Array.from({ length: 90 }, (_, i) => i + 1)
    return numbers
}
// console.log(arrayDifferentIntNumFromOneToNinety())


export function Coins({ numbers }) {
    return (
        <section className="position-relative">
            <div className="rounded-circle" style={{ width: '70px', height: '70px', backgroundColor: 'lightgrey' }}></div>
            <span className="display-6 bg-white rounded-circle d-flex justify-content-center align-items-center position-absolute top-0" style={{ width: '70px', height: '70px', transform: 'translate(5%, -5%)' }}>
                {numbers}
            </span>
        </section>
    )
}
