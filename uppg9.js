

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    const siffror = [4, 8, 13, 15, 19, 20];

    function sort(nummer) {
        for (let num of nummer) {
            if (num % 2 === 0) {
                console.log(num + " jämt")
            } else {
                console.log(num + " udda")
            }
        }
    }

    sort(siffror);

}

module.exports = { uppg9 };