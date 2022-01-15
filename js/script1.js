const url = "https://zoo-animal-api.herokuapp.com/animals/rand/10";

const animalsContainer = document.querySelector(".animals")


async function animalsOverview() {

    try {
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
    catch(error) {
        animalsContainer.innerHTML = "Oh darn, something went wrong!";
    }
}

animalsOverview();

const animalDetailsContainer = document.querySelector(".animal_details")
const detailUrl = "https://zoo-animal-api.herokuapp.com/animals/rand/";

async function animalDetails() {

    try {
        const response = await fetch(detailUrl);
        const details = await response.json();
        
        console.log(details);

        createDetailsHtml(details);

    }
    catch(error) {
        animalDetailsContainer.innerHTML = "Oh darn, something went wrong!";
    }   

}

animalDetails();

function createDetailsHtml(details) {
    container.innerHTML = `<h1>${details.name}</h1>
                            `;
}

const form = document.querySelector(".contact-form");
const fullName = document.querySelector(".fullName");
const fullNameError = document.querySelector(".fullNameError");
const subject = document.querySelector(".subject");
const subjectError = document.querySelector(".subjectError");
const email = document.querySelector(".email");
const  emailError = document.querySelector(".emailError");
const adress = document.querySelector(".adress");
const adressError = document.querySelector(".adressError");

function validateForm() {
    event.preventDefault();

    if (checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(adress.value, 25) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm);

function checkLength(value) {
    if(value.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const petternMatches = regEx.test(email);
    return patternMatches;
}