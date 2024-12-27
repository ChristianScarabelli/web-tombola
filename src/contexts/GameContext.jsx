import { useState, createContext } from "react"

// creo ed sporto il context per il gioco
export const GameContext = createContext()


// FUNZIONE PER CREARE I NUMERI DEI COIN
// creo array di 90 indici, con callback (_ elemento corrente dell'array, vuoto perchè sono nuovi valori), 
// i + 1 perchè gli indici partono da 0
export const arrayDifferentIntNumFromOneToNinety = () => {
    return Array.from({ length: 90 }, (_, i) => i + 1);
}
// console.log(arrayDifferentIntNumFromOneToNinety())


// FUNZIONE che gestisce stato e logiche 
export function GameProvider({ children }) {

    // Stato per i numeri del display 
    const [numbers, setNumbers] = useState([])

    // stato per i numeri dei coin
    const [coinsNumbers, setCoinsNumbers] = useState(arrayDifferentIntNumFromOneToNinety())


    // funzione per generare i numeri del display
    const extractNumber = () => {

        const min = 1
        const max = 90

        // Genero un numero casuale
        let generatedNum
        do {
            generatedNum = Math.floor(Math.random() * (max - min + 1)) + min
        } while (numbers.includes(generatedNum)) // verifico se il numero è già estratto

        // Aggiungo il numero estratto allo stato globale
        setNumbers((prevNumbers) => [...prevNumbers, generatedNum])
    }


    // funzione per resettare il gioco
    const resetGame = () => {
        if (confirm('Sei sicuro di voler resettare il gioco?')) {
            setNumbers([])
        }
    }

    return (
        <GameContext.Provider value={{ numbers, extractNumber, resetGame, coinsNumbers }}>
            {/* placeholder dei componenti che erediteranno il context */}
            {children}
        </GameContext.Provider>
    )
}