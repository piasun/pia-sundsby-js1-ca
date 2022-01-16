const detailsContainer = document.querySelector(".beer_details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.punkapi.com/v2/beers/" + id;

console.log(url);


async function beerDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();
        
        console.log(details);

        const headTitle = document.querySelector ("title");
        headTitle.innerHTML = details[0].name;


        createDetailsHtml(details);

    }
    catch(error) {
        detailsContainer.innerHTML = "Oh darn, something went wrong!";
    }   

}

beerDetails();

function createDetailsHtml(details) {
    detailsContainer.innerHTML = `<h1>${details[0].name}</h1>
                                        <img class="image" src="${details[0].image_url}" alt="Image of ${details[0].name}">
                                        <div class="beers-list">
                                        <div>Tagline: ${details[0].tagline}</div> 
                                        <div>Brewed: ${details[0].first_brewed}</div>
                                        <div>Description: ${details[0].description}</div>
                                        <div>Ingredients: ${details[0].ingredients}</div>
                                        <div>Great with: ${details[0].food_pairing}</div>
                                        </div>`;
}

