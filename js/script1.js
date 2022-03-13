const beersContainer = document.querySelector(".beers-list")

const url = "https://api.punkapi.com/v2/beers";

async function beersOverview() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);
    
        beersContainer.innerHTML = "";

        const beers = results;
    
        beers.forEach(function(beer) {
            beersContainer.innerHTML += `<a href="details.html?id=${beer.id}" class="beers-list">
                                            <img class="image" src="${beer.image_url}" alt="Image of ${beer.name}">
                                            <div>Name: ${beer.name}</div>
                                            <div>Tagline: ${beer.tagline}</div> 
                                            <div>Description: ${beer.description}</div>
                                        </a>`;
        });
    }
    catch(error) {
        beersContainer.innerHTML = "Oh darn, something went wrong!";
    }
     
}

beersOverview();



