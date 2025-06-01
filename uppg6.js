

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen
    
    const names = ["Daniel", "Rasmus", "Erik", "Frederik", "Amanda", "Niklas", "Oliver"]
        for (let i = 0; i < names.length; i++) {
            console.log(names[i]);
    }

    console.log(); // Ny line (ser mer lättläst ut när koden exekveras)

    names.sort();

    for (let sorted of names) {
        console.log(sorted);
    }
}

module.exports = { uppg6 };