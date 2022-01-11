const url = "https://zoo-animal-api.herokuapp.com/animals/rand";

const container = document.querySelector(".details_container");

async function animalDetails() {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    container.innerHTML = `<h1>$`

}

animalDetails();