let asin = 0;

document.addEventListener("DOMContentLoaded", () => {//deve esserci prima di ogni addEventListener per caricare la pagina. Se non ci fosse, non esisterebbeo elementi prima del caricamento

    const queryString = new URLSearchParams(window.location.search)//consente di recuperare i valori dell'url
    //console.log(window.location.search);
    asin = queryString.get('asin')
    //console.log(queryString.get('asin'));
    //dentro parentesi va da ? compreso fino a fine

    fetch(`https://striveschool-api.herokuapp.com/books/${asin}`, {

    }).then(response => {
        console.log('Risposta ricevuta:', response);
        return response.json();
    }).then(data => {
        console.log('Dati convertiti in JSON:', data);

        const titolo = document.getElementById('titolo');
        titolo.innerText = data.title;

        const immagine = document.getElementById('immagine');
        immagine.src = data.img;

        const prezzo = document.getElementById('prezzo');
        prezzo.innerHTML = '<span class="font-weight-bold">Prezzo:</span> ' + data.price + ' €';

        const categoria = document.getElementById('categoria');
        categoria.innerHTML = '<span class="font-weight-bold">Categoria:</span> ' + data.category;

    })
        .catch((err) => {
            console.log("Azz! C'è un errore, eccolo qui: " + err)
        });

});

/* 
            <div class="card" style="width: 25rem;">

                <img id="immagine" src="..." class="card-img-top" alt="...">

                <div class="card-body">

                    <h5 id="titolo" class="card-title">Card title</h5>

                    <p id="prezzo" class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    <a href="#" class="btn btn-primary">Go somewhere</a>

                </div>

            </div>


*/