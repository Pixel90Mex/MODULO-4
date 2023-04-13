const params = new URLSearchParams(window.location.search);//per ricavare url
const id = params.get("id");
const container = document.getElementById("container");

const getData = async (authorization) => {
    try {
        const data = await fetch("https://striveschool-api.herokuapp.com/api/product/"+id, {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWYzZmIxNGE1MTAwMTQ2NjQwMDgiLCJpYXQiOjE2ODA3MTk1OTUsImV4cCI6MTY4MTkyOTE5NX0.BR96dTKcd4bl8Ph5UPK1LSpA8GWdiLLOHxsUOVuTLxE`,
                "Content-type": "application/json",
            }
        });
        const response = await data.json();
        return response;
    } catch (errore) {
        console.log(errore);
    }
}

const createCard = (singleProduct) => {
    const div = document.createElement("div");
    div.className = "col-4 mx-auto";
    div.innerHTML = 
                `<div class="col-sm text-truncate mb-3 mt-3" style="font-weight: bold">
                NOME: ${singleProduct.name}
                </div>
                <div class="col-sm text-truncate mb-3" style="font-weight: bold">
                DESCRIZIONE: ${singleProduct.description}
                </div>
                <div class="col-sm text-truncate mb-3" style="font-weight: bold">
                BRAND: ${singleProduct.brand} 
                </div>
                <div class="col-sm mb-3" style="font-weight: bold">
                URL DELL'IMMAGINE: ${singleProduct.imageUrl}
                </div>
                <div class="col-sm text-truncate mb-3" style="font-weight: bold">
                PREZZO: ${singleProduct.price} 
                </div>`
    
    container.appendChild(div);
}

getData().then(response => {
    spinner.classList.remove("d-none");
    createCard(response);
    spinner.classList.add("d-none");
})

//Nel backoffice, aggiungi la funzionalità per modificare un prodotto e un pulsante per eliminarlo.