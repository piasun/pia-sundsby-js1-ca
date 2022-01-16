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
                                            <div class="image" style="background-image: url('${beer.image_url}')"></div>
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

//contact

const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const  emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");

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

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
