const addProduct = document.getElementById("add");//bottone del backoffice 
const form = document.getElementById("add-product-form");
let container = document.getElementById("product-list");
let token = "";//per immagazzinare il dato di getToken
let editItem = null;
const spinner = document.getElementById("spinner-container");

//funzione per aggiungere prodotti alla home
const addProducts = async (authorization) => {
    const myProduct = {
        name: form.elements.name.value,
        description: form.elements.description.value,
        brand: form.elements.brand.value,
        imageUrl: form.elements.imageUrl.value,
        price: parseFloat(form.elements.price.value)
    }
    console.log(myProduct);
    try {
        const data = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
                "Authorization": `Bearer ${authorization}`,
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(myProduct)
        })
        return await data.json();//aspetta che il server dia una risposta
    } catch (error) {
        console.log(error);
    }
}
//funzione per modificare i prodotti già registrati
const editProduct = async (authorization) => {
    const myProduct = {
        name: form.elements.name.value,
        description: form.elements.description.value,
        brand: form.elements.brand.value,
        imageUrl: form.elements.imageUrl.value,
        price: parseFloat(form.elements.price.value)
    }
    console.log(myProduct);
    try {
        const data = await fetch("https://striveschool-api.herokuapp.com/api/product/" + editItem._id, {
            headers: {
                "Authorization": `Bearer ${authorization}`,
                "Content-type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(myProduct)
        })
        return await data.json();//aspetta che il server dia una risposta
    } catch (error) {
        console.log(error);
    }
}
//funzione per cancellare i prodotti
const deleteProduct = async (product, authorization) => {
    try {
        await fetch("https://striveschool-api.herokuapp.com/api/product/" + product._id, {
            headers: {
                "Authorization": `Bearer ${authorization}`,
                "Content-type": "application/json",
            },
            method: "DELETE",
        }).then(response => response.json())
            .then(result => result);
    } catch (error) {
        console.log("ERRORE");
    }
}
//funzione per ottenere i dati di un prodotto
const getData = async (authorization) => {
    try {
        const data = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
                "Authorization": `Bearer ${authorization}`,
                "Content-type": "application/json",
            }
        });
        const response = await data.json();//dati di tutti i prodotti
        return response;
    } catch (errore) {
        console.log(errore);
    }
}
//funzione per il token
const getToken = async () => {
    //dati del body
    const credential = {
        username: "andre90messana@gmail.com",
        password: "cellFlaviaPixma2",
    }
    try {
        const data = await fetch("https://striveschool-api.herokuapp.com/api/account/login", {
            headers: {
                "Content-type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(credential),
        })
        return await data.json();
    } catch (error) {
        console.log(error);
    }
}
spinner.classList.remove("d-none");
getToken().then(key => {
    
    token = key.access_token; 

    getData(token).then(products => {
        spinner.classList.add("d-none");
        products.forEach(product => {
            createCard(product);
        });
    });
});
const createCard = (singleProduct) => {
    const row = document.createElement("div");
    row.className = "row";

    const nameDiv = document.createElement("div");
    nameDiv.innerText = singleProduct.name;
    nameDiv.classList = "col-sm text-truncate";

    const descriptionDiv = document.createElement("div");
    descriptionDiv.innerText = singleProduct.description;
    descriptionDiv.classList = "col-sm text-truncate";

    const brandDiv = document.createElement("div");
    brandDiv.innerText = singleProduct.brand;
    brandDiv.classList = "col-sm text-truncate";

    const imgUrl = document.createElement("div");
    imgUrl.innerText = singleProduct.imageUrl;
    imgUrl.classList = "col-sm text-truncate";

    const priceDiv = document.createElement("div");
    priceDiv.innerText = singleProduct.price;
    priceDiv.classList = "col-sm text-truncate";

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList = "btn btn-outline-success mb-2";


    editButton.addEventListener("click", () => {
        spinner.classList.remove("d-none");
        editItem = singleProduct;
        addProduct.innerText = "Edit";
        fillForm(singleProduct);
        spinner.classList.add("d-none");
        window.location.reload();
    })

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList = "btn btn-outline-success mb-2";
    deleteButton.addEventListener("click", async () =>{
        spinner.classList.remove("d-none");
        await deleteProduct(singleProduct, token);
        spinner.classList.add("d-none");
        window.location.reload();
    })

    const editDiv = document.createElement("div");
    editDiv.className = "col-sm text-truncate";
    const delDiv = document.createElement("div");
    delDiv.className = "col-sm text-truncate";

    editDiv.appendChild(editButton);
    delDiv.appendChild(deleteButton);
    
    row.append(nameDiv, descriptionDiv, brandDiv, imgUrl, priceDiv, editDiv, delDiv);
    //row.appendChild(colDiv);
    container.appendChild(row);
}

const fillForm = async (product) => {
    form.elements.name.value = product.name;
    form.elements.description.value = product.description;
    form.elements.brand.value = product.brand;
    form.elements.imageUrl.value = product.imageUrl;
    form.elements.price.value = product.price;

}

addProduct.addEventListener("click", async () => {
   if(formValid()) {
    if(!editItem){
        await addProducts(token);
    }else {
        await editProduct(token);
    }
    window.location.reload();
   }
})

//funzione validante dove mettere gli alert
const formValid = () => {
    const errors = [];
    if(form.elements.name.value.length === 0 || form.elements.description.value.length === 0 || form.elements.brand.value.length === 0 ||
        form.elements.imageUrl.value.length === 0 || form.elements.price.value.length === 0){
        errors.push("compila il campo nome!");
        
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        
        let wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="mt-3 alert alert-success alert-dismissible" role="alert">`,
            `   <div>Devi compilare tutti i campi!</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');
        alertPlaceholder.append(wrapper);
    }

    if(errors.length === 0) {
        return true;
    } else {
        console.log(errors);
        return false;
    } 
}

