document.addEventListener("DOMContentLoaded", async() => {//deve esserci prima di ogni addEventListener per caricare la pagina. Se non ci fosse, non esisterebbeo elementi prima del caricamento

    const users = await getUsers();
    renderUsers(users);

});

const API_URL = "https://jsonplaceholder.typicode.com/users";

const usersTable = document.querySelector("#users-table");
const filterBy = document.querySelector("#filter-by");
const filterValue = document.querySelector("#filter-value");
const filterButton = document.querySelector("#filter-button");
const listNamesButton = document.querySelector("#list-names-button");
const listAddressesButton = document.querySelector("#list-addresses-button");


//inizio funzione per prendere tutti gli utenti con fetch

async function getUsers() {

    try {
    
    const response = await fetch(API_URL);//qui dice: "aspetta che finisca la chiamata prima di passare sotto a riga 25"
    //console.log(response);

    const users = await response.json();//qui dice: "aspetta la response prima di passare sotto a riga 28"
    //console.log(users);
    return users;

    } catch(error) {
        console.log(error)
    }

}

//due operazioni asincrone: la fetch (chiamata) e riposta dati (response)
//a riga 10 async indica che la funzione restituisce una promise, ovvero un valore una volta che il risultato sarà disponible
//quando fa la chiamata usa "await" per attendere la risoluzione della promessa (cioè la risposta dell'api) prima di passare alla riga dopo
//così la funzione può essere sospesa finché non arriva la risposta dell'api (quindi senza bloccare nulla per l'utente)

//equivalente a

/* 
function getUsers() {

    return fetch(API_URL)

      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(users) {
        console.log(users);
        return users;
      })
      .catch(function(error) {
        console.error(error);
    });
} 
*/

//fine funzione per prendere tutti gli utenti con fetch

/*  */

//inizio funzione per mostrare gli utenti  

function renderUsers(users) {

    const tbody = usersTable.querySelector("tbody");
    tbody.innerHTML = "";

    users.forEach((user) => {

        const tr = document.createElement("tr");

        tr.innerHTML = 
        `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street}, ${user.address.city}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.company.name}</td>
        `;

        tbody.appendChild(tr);

    });

}

//fine funzione per mostrare gli utenti  

/**/

//inizia funzione filtra per nome/mail/username 

function filterUsers(users, key, value) {//la key è "name", "username", "mail" del menu a tendina

    return users.filter((user) =>

        user[key].toLowerCase().includes(value.toLowerCase())

    );

}

filterButton.addEventListener("click", async () => {
    console.log("ho cliccato Filter");

    const users = await getUsers();
    const filteredUsers = filterUsers(users, filterBy.value,filterValue.value);
    renderUsers(filteredUsers);

});

//finisce funzione filtra per nome/mail/username 

/**/

//inizia funzione che mostra lista nomi al click

function listNames(users) {
    console.log("ho cliccato List Names");

    const names = users.map((user) => user.name);
    alert(names.join("\n")); //"newline", va a capo
    
}

listNamesButton.addEventListener("click", async () => { 

    const users = await getUsers();
    listNames(users);

});

//finisce funzione che mostra lista nomi al click

/**/

//inizia funzione che mostra lista indirizzi al click

function getAddressStrings(users) {
    console.log("ho cliccato List Addresses");

    return users.map(
    (user) =>
    `
    ${user.address.street} | ${user.address.city} | ${user.address.zipcode}
    `
    );

}

listAddressesButton.addEventListener("click", async () => {

    const users = await getUsers();
    listAddresses(users);

});
  
function listAddresses(users) {

    const addresses = getAddressStrings(users);
    alert(addresses.join("\n"));

}

//finisce funzione che mostra lista indirizzi al click






