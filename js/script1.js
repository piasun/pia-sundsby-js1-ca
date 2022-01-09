const url = "https://zoo-animal-api.herokuapp.com/animals/rand/10";

const animalsContainer = document.querySelector(".animals")

async function animalsOverview() {

    const response = await fetch(url);

    const results = await response.json();

    const type = results;

    animalsContainer.innerHTML = "";

    for (let i = 0; i < type.length; i++) {
        console.log(type[i].name);

        animalsContainer.innerHTML += `
        <div class="animal">
        <div>Name: ${type[i].name}</div> 
        <div>Animal type: ${type[i].animal_type}</div>
        <div>Diet: ${type[i].diet}</div>
        </div>`;
    }
}

animalsOverview();