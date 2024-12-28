import { useState, createContext } from "react"

// creo ed sporto il context per il gioco
export const GameContext = createContext()


// FUNZIONE PER CREARE I NUMERI DEI COIN
// creo array di 90 indici, con callback (_ elemento corrente dell'array, vuoto perchè sono nuovi valori), 
// i + 1 perchè gli indici partono da 0
export const arrayDifferentIntNumFromOneToNinety = () => {
    return Array.from({ length: 90 }, (_, i) => i + 1);
}

// Funzione per prendere 15 numeri casuali unici dall'array dei 90 numeri
function generateRandomNumbers() {
    const shuffled = arrayDifferentIntNumFromOneToNinety().sort(() => Math.random() - 0.5) // con sort e math random mescolo l'array
    return shuffled.slice(0, 15) // prendo solo i primi 15 numeri del nuovo array
}

// FUNZIONE che gestisce stato e logiche 
export function GameProvider({ children }) {

    // Stato per i numeri estratti del display 
    const [numbers, setNumbers] = useState([])

    // stato per i numeri dei coin
    const [coinsNumbers, setCoinsNumbers] = useState(generateRandomNumbers())

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

    // funzione per regolare i numeri estratti
    function isNumberExtracted(num) {
        return numbers.includes(num)
    }

    // funzione per resettare il gioco
    const resetGame = () => {
        if (confirm('Sei sicuro di voler resettare il gioco?')) {
            setNumbers([]) // svuoto l'array dei numeri generati nel display
            setCoinsNumbers(generateRandomNumbers())  // al riavvio genero altri 15 numeri per i coins
        }
    }

    // variabile per definire il permesso di riavviare il gioco
    const canResetGame = numbers.length >= 15

    return (
        <GameContext.Provider value={{ numbers, extractNumber, resetGame, coinsNumbers, isNumberExtracted, canResetGame }}>
            {/* placeholder dei componenti che erediteranno il context */}
            {children}
        </GameContext.Provider>
    )
}