const detailsContainer = document.querySelector(".beer_details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const detailUrl = "https://api.punkapi.com/v2/beers/" + id;

console.log(detailUrl);

async function beerDetails() {

    try {
        const response = await fetch(detailUrl);
        const details = await response.json();
        
        console.log(details);

        createDetailsHtml(details);

    }
    catch(error) {
        detailsContainer.innerHTML = "Oh darn, something went wrong!";
    }   

}

beerDetails();

function createDetailsHtml(details) {
    detailsContainer.innerHTML = `<h1>${details.name}</h1>
                                        <div class="image" style="background-image: url('${details.image_url}')"></div>
                                        <div class="beers-list">
                                        <div>Tagline: ${details.tagline}</div> 
                                        <div>Brewed: ${details.first_brewed}</div>
                                        <div>Description: ${details.description}</div>
                                        <div>Latest revision: ${details.latest_revision}</div>
                                        <div>Last modified: ${details.last_modified}</div>
                                        </div>`;
}