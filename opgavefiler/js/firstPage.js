/* Opgave 1*/


// din kode her
const navn = "Tanja";
const årIVirksomheden = 2;
const space = " ";

const besked = `<h2>Hej ${space} ${navn} </h2> "Du har nu arbejdet i vores virksomhed i ${årIVirksomheden} år.`
console.log(besked);

messageElement = document.getElementById("message");
messageElement.innerHTML = besked;


/* Opgave 2*/


// din kode her

const myData=[
    { 
    "navn": "T-shirt",
    "beskrivelse": "En t-shirt lavet af bomuld",
    "pris": 99 
    },
    { 
    "navn": "Jeans",
    "beskrivelse": "Blå denim jeans med straight fit",
    "pris": 299
    },
    { 
    "navn": "Hættetrøje",
    "beskrivelse": "En grå hættetrøje med lynlås",
    "pris": 199 
    }
    ]  

const produktListeElement = document.getElementById("produktListe");

myData.map(function(produkt){
const produktElement = document.createElement("article");
produktElement.className = "produkt";
produktElement.innerHTML = `<h2>${produkt.navn}</h2> <p>${produkt.beskrivelse}</p><p>Pris: ${produkt.pris} kr. </p>`;

produktListeElement.appendChild(produktElement);

;
});



/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

 // submit button event listner med arrow function
 submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const myFormFelter = myForm.querySelectorAll('input');

    /* push resultatet fra formen ind på myPersons.
    vi ved der er 2 elementer derfor direkte adressering ved hjælp af []
    */
    myPersons.push({
    navn: myFormFelter[0].value,
    alder: myFormFelter[1].value,
    });
    
    // Sorter listen efter alder og vis den på siden
    const sorteretMyPersons = sorterEfterAlder(myPersons);
    showList(sorteretMyPersons);
    });

    // view code
    function showList(sorteretMyPersons) {
    let html = '';
    sorteretMyPersons.map((person) => {
    // html template.
    html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
    });
    personList.innerHTML = html;
    }

    // Funktion til at sortere listen efter alder
    function sorterEfterAlder(myPersons) {
    return myPersons.sort((a, b) => a.alder - b.alder);
    }
