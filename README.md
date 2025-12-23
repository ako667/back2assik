### Weather & Country Facts App
## Description

This project is a simple web application that displays real-time weather information for a selected city, along with facts about the corresponding country. It uses OpenWeather API for weather data and Rest Countries API for country facts.

All API calls are handled on the server side to ensure security and proper data processing. The frontend displays the data in a clean, responsive, and user-friendly interface.

## Features

Real-time weather data for any city:

* Temperature

* Feels like temperature

* Weather description

* Wind speed

* Coordinates

* Country code

* Rain volume for the last 3 hours

Country facts:

* Country name

* Capital city

* Region

* Population

* Currencies

* Languages

* Country flag

Fully responsive design for mobile and desktop

# Installation & Setup

Clone the repository:
```bash
git clone https://github.com/ako667/back2assik
```

Navigate to the project folder:
```bash
cd weather-app
```

Install dependencies:
```
npm install
```

Create a .env file in the project root and add your OpenWeather API key:
```
OPENWEATHER_API_KEY=YOUR_API_KEY_HERE
```

Start the server:
```
node server.js
```

Open your browser and go to:
```
http://localhost:3000
```
# API Usage

* OpenWeather API: fetches current weather data by city name.

* Rest Countries API: fetches country information by country code returned from OpenWeather.

All requests are handled server-side to avoid exposing API keys on the client.

# Project Structure
```
weather-app/
│
├─ server.js          # Server-side logic and API requests
├─ package.json       # Dependencies and scripts
├─ .env               # API key
├─ views/
│   └─ index.html     # Frontend page
└─ public/
    ├─ style.css      # CSS styling
    └─ script.js      # Client-side JavaScript
```
# Screenshot

<div>
 <img src="Снимок экрана 2025-12-23 175242.png" align="center" height="300">
</div>

<div>
 <img src="Снимок экрана 2025-12-23 175232.png" align="center" height="600">
</div>

# Design Decisions

* Server-side API integration keeps the API key secure.

* Frontend is simple, clean, and responsive using CSS media queries.

* Errors are handled gracefully if the city is not found or API fails.

* Country facts enhance the user experience and fulfill the additional API requirement.

# Author

Kuan Akerke
