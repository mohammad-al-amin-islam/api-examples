//when click enter button seacrh button will work
const getButton = document.getElementById("button-search");
const getSearchText = document.getElementById("text-search");

getSearchText.addEventListener("keypress", function(event) {
    // event.preventDefault();
    if (event.keyCode == 13)
        getButton.click();
});


document.getElementById('error-message').style.display = "none";
const loadData = () => {
    const getInput = document.getElementById('text-search');
    const getInputText = getInput.value;
    getInput.value = "";
    document.getElementById('error-message').style.display = "none";
    if (getInputText == '') {
        alert("You haven't given any input");
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getInputText}`
        fetch(url)
            .then(res => res.json())
            .then(data => searchFoodForDisplay(data.meals))
            .catch(error => displayError(error));
    }


}

const displayError = (error) => {
    console.log(error);
    document.getElementById('error-message').style.display = "block";
}

const searchFoodForDisplay = (meals) => {
    const getContainer = document.getElementById('display-food');
    getContainer.textContent = ""
    if (meals == null) {
        alert('cant find any food');
    }
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="foodDetails(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `
        getContainer.appendChild(div)
    })
}

const foodDetails = meal => {
    console.log(meal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
    fetch(url)
        .then(res => res.json())
        .then(data => getDetails(data.meals[0]))
}

const getDetails = details => {
    const detailsContainer = document.getElementById('food-details');
    detailsContainer.textContent = "";
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <img src="${details.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="${details.strMeal}">Card title</h5>
                <p class="card-text">${details.strInstructions.slice(0, 200)}</p>
                <a href="${details.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `
    detailsContainer.appendChild(div);

}