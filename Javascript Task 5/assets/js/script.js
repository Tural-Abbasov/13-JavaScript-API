


const baseUrl = "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,subregion,languages,borders";
const cardsContainer = document.querySelector('.cardsContainer');
const cardModal = document.querySelector('.card-modal');
const searchBox = document.querySelector('.searchBox input');

let allCountries = [];

cardsContainer.innerHTML = '';

fetch(baseUrl)
    .then(response => response.json())
    .then(countries => {
        allCountries = countries;
        displayCountries(allCountries);
    })
    .catch(error => console.error('Error fetching countries:', error));

    searchBox.addEventListener('input', function() {
        const searchQuery = searchBox.value.toLowerCase();
        const filteredCountries = allCountries.filter(country =>
            country.name.common.toLowerCase().startsWith(searchQuery)
        );
        displayCountries(filteredCountries);
    });
    

function displayCountries(countries) {
    cardsContainer.innerHTML = '';
    countries.forEach(country => {
        const cardBox = document.createElement('div');
        cardBox.classList.add('cardBox');

        const flagImg = document.createElement('img');
        flagImg.src = country.flags.svg || '';
        flagImg.alt = `Flag of ${country.name.common}`;

        const countryName = document.createElement('h2');
        countryName.textContent = country.name.common || 'N/A';

        const population = document.createElement('p');
        population.innerHTML = `<strong>Population:</strong> ${country.population ? country.population.toLocaleString() : 'N/A'}`;

        const region = document.createElement('p');
        region.innerHTML = `<strong>Region:</strong> ${country.region || 'N/A'}`;

        const capital = document.createElement('p');
        capital.innerHTML = `<strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}`;

        cardBox.appendChild(flagImg);
        cardBox.appendChild(countryName);
        cardBox.appendChild(population);
        cardBox.appendChild(region);
        cardBox.appendChild(capital);

        cardsContainer.appendChild(cardBox);

        cardBox.addEventListener('click', function () {
            showCountryDetails(country);

            cardModal.style.display = 'block';
        });
    });
}

function showCountryDetails(country) {
    document.querySelector('.card img').src = country.flags.svg || '';
    document.querySelector('.card h5').textContent = country.name.common || 'N/A';

    const nativeName = country.name.nativeName ? Object.values(country.name.nativeName).map(name => name.official).join(', ') : 'N/A';
    document.querySelector('.native-name').textContent = nativeName;

    document.querySelector('.population').textContent = country.population ? country.population.toLocaleString() : 'N/A';
    document.querySelector('.region').textContent = country.region || 'N/A';
    document.querySelector('.subregion').textContent = country.subregion || 'N/A';
    document.querySelector('.languages').textContent = country.languages ? Object.values(country.languages).join(', ') : 'N/A';

    const bordersContainer = document.querySelector('.card-text:last-child');
    bordersContainer.innerHTML = '<strong>Border countries:</strong> ';
    if (country.borders) {
        country.borders.forEach(border => {
            const button = document.createElement('button');
            button.textContent = border;
            button.classList.add('border-btn');
            button.addEventListener('click', function () {
                fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                    .then(response => response.json())
                    .then(borderCountryData => {
                        const borderCountry = borderCountryData[0];
                        showCountryDetails(borderCountry);
                    })
                    .catch(error => console.error('Error fetching border country:', error));
            });
            bordersContainer.appendChild(button);
        });
    } else {
        bordersContainer.innerHTML += 'None';
    }
}

document.querySelector('.backBtn').addEventListener('click', function () {
    cardModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === cardModal) {
        cardModal.style.display = 'none';
    }
});

