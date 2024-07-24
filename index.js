// Recupera gli elementi del DOM con gli id 'stampa', 'stampa1' e 'stampa2' e li assegna a variabili
const print = document.getElementById("stampa");
const print1 = document.getElementById("stampa1");
const print2 = document.getElementById("stampa2");

// Funzione che calcola le conversioni da metri a piedi, galloni e libbre
function Feet(metres) {
    // Recupera il valore dell'input con id 'metres'
    const con = document.getElementById('metres').value;

    // Calcola le conversioni
    let feet = metres * 3.281;  // Conversione da metri a piedi
    let gallus = metres * 0.264;  // Conversione da metri a galloni (Nota: questa formula non sembra corretta. Dovrebbe essere da litri a galloni)
    let kilos = metres * 2.204;  // Conversione da metri a libbre (Nota: questa formula non sembra corretta. Dovrebbe essere da chilogrammi a libbre)

    // Ritorna un oggetto contenente i valori calcolati
    return { feet, gallus, kilos };
}

// Funzione che gestisce il risultato della conversione
function result() {
    // Recupera il valore dell'input con id 'metres'
    const number = document.getElementById('metres').value;

    // Controlla se il valore dell'input non è vuoto
    if (number !== '') {
        // Chiama la funzione Feet per ottenere i valori convertiti
        const { feet, gallus, kilos } = Feet(number);

        // Aggiorna il contenuto degli elementi del DOM con i risultati delle conversioni
        document.getElementById('stampa').innerText = `Feet: ${feet.toFixed(2)}`;
        document.getElementById('stampa1').innerText = `Gallons: ${gallus.toFixed(2)}`;
        document.getElementById('stampa2').innerText = `Pounds: ${kilos.toFixed(2)}`;
    } else {
        // Se l'input è vuoto, svuota il contenuto degli elementi del DOM
        document.getElementById('stampa').innerText = '';
        document.getElementById('stampa1').innerText = '';
        document.getElementById('stampa2').innerText = '';
    }
}
