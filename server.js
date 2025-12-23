require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Погода
app.get('/weather', async (req, res) => {
    const city = req.query.city || 'London';
    const apiKey = process.env.OPENWEATHER_API_KEY;

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric'
            }
        });

        const data = response.data;

        const weather = {
            temperature: data.main.temp,
            feels_like: data.main.feels_like,
            description: data.weather[0].description,
            wind_speed: data.wind.speed,
            coordinates: data.coord,
            country: data.sys.country,
            rain_last_3h: data.rain ? data.rain['3h'] || 0 : 0
        };

        // Получаем факты о стране через Rest Countries API
        const countryResponse = await axios.get(`https://restcountries.com/v3.1/alpha/${data.sys.country}`);
        const countryData = countryResponse.data[0];

        const countryFacts = {
            name: countryData.name.common,
            capital: countryData.capital ? countryData.capital[0] : 'N/A',
            region: countryData.region,
            population: countryData.population,
            currencies: countryData.currencies ? Object.keys(countryData.currencies).join(', ') : 'N/A',
            languages: countryData.languages ? Object.values(countryData.languages).join(', ') : 'N/A',
            flag: countryData.flags ? countryData.flags.png : ''
        };

        res.json({ weather, countryFacts });

    } catch (error) {
        res.status(500).json({ error: 'City not found or API error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
