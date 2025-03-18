// OpenWeatherMap API key (sign up for a free API key on https://openweathermap.org)
const apiKey = '44f649647b8b50ab0894b741158a2bde';

// Function to fetch weather data from OpenWeatherMap API
async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        const weatherInfo = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Condition: ${data.weather[0].description}</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        alert("Error fetching weather data.");
    }
}