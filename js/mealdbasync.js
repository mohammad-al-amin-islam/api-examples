const loadData = async () => {
    const getInput = document.getElementById('text-search');
    const getInputText = getInput.value;
    getInput.value = "";
    if (getInputText == '') {
        alert("You haven't given any input");
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getInputText}`

        const res = await fetch(url);
        const data = await res.json();
        searchFoodForDisplay(data.meals);
        /* fetch(url)
            .then(res => res.json())
            .then(data => searchFoodForDisplay(data.meals)); */
    }


}

const searchFoodForDisplay = (meals) => {
    const getContainer = document.getElementById('display-food');
    getContainer.innerText = ""
    if (meals.length == 0) {
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

const foodDetails = async meal => {
    console.log(meal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
    const res = await fetch(url);
    const data = await res.json();
    getDetails(data.meals[0]);
    /* fetch(url)
        .then(res => res.json())
        .then(data => getDetails(data.meals[0])) */
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