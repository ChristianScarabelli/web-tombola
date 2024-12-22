const extractDifferentIntNumFromOneToNinety = () => {
    // array per i numeri generati
    const extractedNum = []
    const min = 1
    const max = 90

    // genero numeri fino a quando l'array ha 15 numeri
    while (extractedNum.length < 15) {
        const generatedNum = Math.floor(Math.random() * (max - min + 1)) + min

        // Controllo e pusho il numero generato
        // solo se non è già presente nell'array
        if (!extractedNum.includes(generatedNum)) {
            extractedNum.push(generatedNum)
        }
    }
    return extractedNum
}

export function GenerateNum({ setNumbers }) {

    // funzione per gestire il click invocando la funzione e settando i numeri
    const handleCLick = () => {
        const numbers = extractDifferentIntNumFromOneToNinety()
        setNumbers(numbers)
    }

    return (
        <button onClick={handleCLick} className="btn btn-warning mt-3">Estrai</button>
    )
}