document.addEventListener("DOMContentLoaded",() => {//deve esserci prima di ogni addEventListener per caricare la pagina. Se non ci fosse, non esisterebbeo elementi prima del caricamento

  document.getElementById("caricaImmagini").addEventListener('click', () => {
    caricaImmagini('dinosauri')
  });
  
  document.getElementById("caricaAltreImmagini").addEventListener('click', () => {
    caricaImmagini('turtle')
  })

  caricaImmaginiCasuali();
})


function caricaImmaginiCasuali() {

  const categorie = ['natura', 'architettura', 'cibo', 'viaggi', 'tenerife', 'computer']; // categorie di immagini casuali da caricare
  const categoriaCasuale = categorie[Math.floor(Math.random() * categorie.length)]; // scelgo una categoria casuale

  caricaImmagini(categoriaCasuale); //carica le immagini della categoria casuale

}

function caricaImmagini(parametro) {//funzione per primo pulsante

  console.log('Ho cliccato il primo pulsante')//il messaggio appare quindi si continua
  fetch(`https://api.pexels.com/v1/search?query=${parametro}`, {//richiesta all'url con parametro
    
    headers: { //chiave di autenticazione necessaria per QUEL sito
      "Authorization": "54tFFBoKc3SRjHXRgY2zD64AekBSv3DVq8JCSDiDDQlkqedkTRLoOhjy",
    },

  }).then(response => { //una volta ricevuta la risposta...
    console.log('Risposta ricevuta:', response);
    return response.json(); //...ritorno la stessa risposta sotto forma di json
  }).then(data => {
    console.log('Dati convertiti in JSON:', data);
    mostraImmagini(data);//qui parte la funzione che abbiamo dichiarato sotto, ovvero quella che mette le foto nei singoli <img>
  })
  .catch((err) => { 
    //extra n°1
    const alert = document.createElement("div");
    alert.classList.add("alert alert-danger");
    alert.setAttribute("alert");
    alert.innerText = "Azz! C'è un errore, eccolo qui: " + err;

    document.body.appendChild(alert);
    /* console.log("Azz! C'è un errore, eccolo qui: " + err) */});

}


function mostraImmagini(data) {

  const imgElements = document.querySelectorAll('[id^="container-immagini-"]');
  const idElements = document.querySelectorAll('[id^="id-immagine-"]');
  const textElements = document.querySelectorAll(".card-text")

  data.photos.forEach((photo, i) => {

    if (imgElements[i]) {

      imgElements[i].src = photo.src.medium;
      imgElements[i].alt = photo.alt;

    }

    if (idElements[i]) {

      idElements[i].innerText = photo.id;

    }

    if (textElements[i] && data.photos.length > 1) {

      textElements[i].innerText = "All credits to " + photo.photographer;

    }
  });
}


//si potrebbe trasformare in una funzione
var hideButtons = document.querySelectorAll('.nascondi');
hideButtons.forEach((button) => {


  button.addEventListener('click', function () {

    var card = this.parentNode.parentNode.parentNode.parentNode;
    card.style.display = 'none';

  });

});


function search() {

  const par = document.getElementById("searchField"); 
  const nomeDaCercare = par.value.toLowerCase();

  caricaImmagini (nomeDaCercare)

} 











