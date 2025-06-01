

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
const personer = [
    {name: "Isak", age: 30},
    {name: "Anna", age: 23},
    {name: "Erik", age: 42},
    {name: "Lars", age: 52},
    {name: "Sofia", age: 19},
]

function personerOver30 (personer) {
    for (let person of personer) {
        if (person.age > 30) {
            console.log(person.name + " är " + person.age + " år gammal.")
        }
    }
}

personerOver30(personer);

}

module.exports = { uppg8 };