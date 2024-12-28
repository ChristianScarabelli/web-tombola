import { useState, createContext } from "react";

// Crea e esporta il contesto per il gioco
export const GameContext = createContext();

// Funzione per creare i numeri da 1 a 90
export const arrayDifferentIntNumFromOneToNinety = () => {
    return Array.from({ length: 90 }, (_, i) => i + 1);
}

// Funzione per generare numeri casuali
function generateRandomNumbers() {
    const shuffled = arrayDifferentIntNumFromOneToNinety().sort(() => Math.random() - 0.5);
    return [
        shuffled.slice(0, 5),   // Prima riga
        shuffled.slice(5, 10),  // Seconda riga
        shuffled.slice(10, 15)  // Terza riga
    ];
}

// Funzione per gestire le vincite
function checkWins(numbers, coinsNumbers) {
    let message = '';
    const rows = [
        coinsNumbers.slice(0, 5),
        coinsNumbers.slice(5, 10),
        coinsNumbers.slice(10, 15)
    ];

    rows.forEach((row) => {
        const count = row.filter((num) => numbers.includes(num)).length;

        if (count === 2) {
            message = 'Hai fatto Ambo!';
        } else if (count === 3) {
            message = 'Hai fatto Terno!';
        } else if (count === 4) {
            message = 'Hai fatto Quaterna!';
        } else if (count === 5) {
            message = 'Hai fatto Cinquina!';
        } else if (count === 15) {
            message = 'Hai fatto Tombola!';
        }
    });

    return message;
}

// GameProvider che gestisce lo stato globale del gioco
export function GameProvider({ children }) {
    const [numbers, setNumbers] = useState([]);
    const [coinsNumbers, setCoinsNumbers] = useState(generateRandomNumbers());
    const [message, setMessage] = useState('');

    // funzione per generare i numeri del display
    const extractNumber = () => {
        const min = 1;
        const max = 90;
        let generatedNum;

        // Genero un numero casuale
        do {
            generatedNum = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (numbers.includes(generatedNum)); // verifico se il numero è già estratto

        // Aggiungo il numero estratto allo stato globale
        setNumbers((prevNumbers) => {
            const newNumbers = [...prevNumbers, generatedNum];
            const message = checkWins(newNumbers, coinsNumbers);
            setMessage(message);
            return newNumbers;
        });
    }


    // Funzione per verificare se un numero è stato estratto
    function isNumberExtracted(num) {
        return numbers.includes(num);
    }

    // Funzione per resettare il gioco
    const resetGame = () => {
        if (confirm('Sei sicuro di voler resettare il gioco?')) {
            setNumbers([]);
            setCoinsNumbers(generateRandomNumbers());
            setMessage('');
        }
    };

    const canResetGame = numbers.length >= 15;

    return (
        <GameContext.Provider value={{ numbers, extractNumber, resetGame, coinsNumbers, isNumberExtracted, canResetGame, message }}>
            {children}
        </GameContext.Provider>
    );
}
