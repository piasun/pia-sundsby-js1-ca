const url = "https://zoo-animal-api.herokuapp.com/animals/rand/10";

const animalsContainer = document.querySelector(".animals")

async function animalsOverview() {

    const response = await fetch(url);

    const results = await response.json();

    const type = results;

    animalsContainer.innerHTML = "";

    type.forEach(function(result) {
        animalsContainer.innerHTML += `
        <div class="animal">
        <div>Name: ${result.name}</div> 
        <div>Animal type: ${result.animal_type}</div>
        <div>Diet: ${result.diet}</div>
        </div>`;
    });
}

animalsOverview();