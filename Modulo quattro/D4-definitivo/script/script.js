document.addEventListener("DOMContentLoaded", () => {//deve esserci prima di ogni addEventListener per caricare la pagina. Se non ci fosse, non esisterebbeo elementi prima del caricamento

    caricaDati();//che effettua una chiamata API (dichiarata sotto)

});

function caricaDati() {

    //console.log('Ho caricato in maniera corretta')

    fetch(`https://striveschool-api.herokuapp.com/books`, {

    }).then(response => {
        //console.log('Risposta ricevuta:', response);
        return response.json();
    }).then(data => {
        //console.log('Dati convertiti in JSON:', data);
        mostraLibri(data);//creazione card (dichiarata sotto)

        const searchField = document.getElementById("searchField");//passaggio variabile data a funzione search
        searchField.addEventListener("input", () => {
            search(data);
        });

    })
        .catch((err) => {
            console.log("Azz! C'è un errore, eccolo qui: " + err)
        });

}

function mostraLibri(data) {

    const booksContainer = document.getElementById('books');

    data.forEach((item) => {

        const bookCard = document.createElement('div');
        bookCard.classList.add('card', 'col', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4', 'p-0');
        bookCard.setAttribute('data-title', item.title.toLowerCase()); // Aggiungi questa riga
        booksContainer.appendChild(bookCard);

        const bookImage = document.createElement('img');
        bookImage.classList.add('card-img-top');
        bookImage.alt = item.title;
        bookImage.src = item.img;
        bookCard.appendChild(bookImage);

        const bookBody = document.createElement('div');
        bookBody.classList.add('card-body');
        bookCard.appendChild(bookBody);

        const bookTitle = document.createElement('h5');
        bookTitle.classList.add('card-title');
        const linkCard = document.createElement('a');
        linkCard.setAttribute('target', '_blank');
        linkCard.href = '/U4-D4/prodotto.html?asin=' + item.asin + '&paramDue=valoreDue';//url da inserire 
        //linkCard.href = `/U4-D4/prodotto.html?asin=${item.asin}&paramDue=valoreDue`;//url da inserire 
        //dopo ? parametri

        linkCard.innerText = item.title
        bookTitle.appendChild(linkCard);
        //bookTitle.innerText = item.title;
        bookBody.appendChild(bookTitle);

        const bookCategory = document.createElement('p');
        bookCategory.classList.add('card-text');
        bookCategory.innerHTML = '<span class="font-weight-bold">Categoria:</span> ' + item.category;
        bookBody.appendChild(bookCategory);

        const bookPrice = document.createElement('p');
        bookPrice.classList.add('card-text');
        bookPrice.innerHTML = '<span class="font-weight-bold">Prezzo:</span> ' + item.price + ' €';
        bookBody.appendChild(bookPrice);

        const bookFooter = document.createElement('div');
        bookFooter.classList.add('card-footer');
        bookCard.appendChild(bookFooter);

        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.classList.add('btn', 'btn-success', 'btn-add-to-cart');
        addButton.innerText = 'Aggiungi al carrello';
        bookFooter.appendChild(addButton);

        addButton.addEventListener('click', () => {

            aggiungiAlCarrello(item);
            //console.log("aggiunto al carrello");

        });

        const addButtons = document.querySelectorAll('.btn-add-to-cart');
        addButtons.forEach((button) => {

            button.addEventListener('click', function () {

                var card = this.parentNode.parentNode;
                card.style.border = '4px solid red';

            });

        });

        const skipButton = document.createElement('button');
        skipButton.type = 'button';
        skipButton.classList.add('btn', 'btn-danger', 'btn-skip');
        skipButton.innerText = 'Salta';
        bookFooter.appendChild(skipButton);

        const skipButtons = document.querySelectorAll('.btn-skip');
        skipButtons.forEach((button) => {

            button.addEventListener('click', function () {

                var card = this.parentNode.parentNode;
                card.style.display = 'none';

            });

        });

    });

}

let carrello = [];

const aggiungiAlCarrello = (libro) => {

    const bookTitle = libro.title;
    const modalBody = document.querySelector(".modal-body");
    const newListItem = document.createElement("li");
    newListItem.textContent = bookTitle;
    modalBody.querySelector("ul").appendChild(newListItem);
    carrello.push(libro);

    aggiornaConteggioCarrello();

};

const aggiornaConteggioCarrello = () => {

    const cartCountElement = document.getElementById("cart-container");
    const carrelloBlu = document.getElementById("carrelloBlu");
    const badgeElement = document.createElement("span");
    const count = carrello.length;

    badgeElement.classList.add("badge", "badge-pill", "badge-danger");
    badgeElement.textContent = count;
    cartCountElement.innerHTML = "";

    cartCountElement.appendChild(badgeElement);
    carrelloBlu.textContent = `Carrello ${count}`;

};


const svuotaCarrello = () => {

    const modalBody = document.querySelector(".modal-body");
    const listToRemove = modalBody.querySelector("ul");
    listToRemove.innerHTML = "";
    carrello = [];

    aggiornaConteggioCarrello();
};

const search = () => {

    const searchField = document.getElementById("searchField");
    const searchTerm = searchField.value.toLowerCase();
    const booksContainer = document.getElementById("books");
    const bookCards = booksContainer.querySelectorAll(".card");

    if (searchTerm.length > 1) {

        bookCards.forEach((bookCard) => {
            
            const bookTitle = bookCard.getAttribute("data-title");
            if (bookTitle.includes(searchTerm)) {
                bookCard.style.display = "block";
            } else {
                bookCard.style.display = "none";
            }
        });

    } else {

        bookCards.forEach((bookCard) => {
            bookCard.style.display = "block";
        });
    }
};

















