async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const weatherDiv = document.getElementById('weatherResult');
    const countryDiv = document.getElementById('countryResult');

    if (!city) {
        weatherDiv.innerHTML = 'Please enter a city.';
        countryDiv.innerHTML = '';
        return;
    }

    try {
        // Запрос на сервер
        const response = await fetch(`/weather?city=${city}`);
        const data = await response.json();

        if (data.error) {
            weatherDiv.innerHTML = data.error;
            countryDiv.innerHTML = '';
            return;
        }

        const w = data.weather;
        const c = data.countryFacts;

        // Погода
        weatherDiv.innerHTML = `
            <h2>Weather in ${city}, ${w.country}</h2>
            <p>Temperature: ${w.temperature}°C</p>
            <p>Feels Like: ${w.feels_like}°C</p>
            <p>Description: ${w.description}</p>
            <p>Wind Speed: ${w.wind_speed} m/s</p>
            <p>Coordinates: [${w.coordinates.lat}, ${w.coordinates.lon}]</p>
            <p>Rain (last 3h): ${w.rain_last_3h} mm</p>
        `;

        // Факты о стране
        countryDiv.innerHTML = `
            <h2>Country Facts: ${c.name}</h2>
            <p>Capital: ${c.capital}</p>
            <p>Region: ${c.region}</p>
            <p>Population: ${c.population.toLocaleString()}</p>
            <p>Currencies: ${c.currencies}</p>
            <p>Languages: ${c.languages}</p>
            <img src="${c.flag}" alt="flag" class="flag">
        `;

    } catch (error) {
        weatherDiv.innerHTML = 'Error fetching data.';
        countryDiv.innerHTML = '';
        console.error(error);
    }
}
