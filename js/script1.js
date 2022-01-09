const url = "https://wger.de/api/v2/exercisecategory";

async function exerciseCategory() {

    const response = await fetch(url);

    const results = response.json();

    console.log(results);

}

exerciseCategory();