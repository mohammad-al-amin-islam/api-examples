const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = (countries) => {
    const countriesHolder = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        /* const h3 = document.createElement('h3');
        const p = document.createElement('p');
        console.log(country);
        h3.innerText = country.name;
        p.innerText = country.capital;

        div.appendChild(h3);
        div.appendChild(p);
        */
        div.innerHTML = `
       <h3>${country.name}</h3>
       <p>${country.capital}</p>
       <button onclick='displayCountryDetails("${country.name}")'>Details</button>
       `
        countriesHolder.appendChild(div);
    })
}
const displayCountryDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data[0]))
}

const displayInfo = data =>{
    const detailsDiv = document.getElementById('country-details');
    detailsDiv.innerHTML =`
        <h5>name: ${data.name.common}</h5>
        <p>population: ${data.population}</p>
        <img src="${data.flags.png}"/>
    `
    detailsDiv.style.textAlign = 'center';
}
