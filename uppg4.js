
function uppg4() {
  
    // deklarera ett objekt med namnet person
    // objektet ska ha två properties, name och age
    // tilldela age 25
    // skriv ut med dotnotation åldern i konsolen
    const person = {
        name: "Isak", 
        age: 30
    };

    console.log(person.name + "s ålder är " + person.age);
}

module.exports = { uppg4 };