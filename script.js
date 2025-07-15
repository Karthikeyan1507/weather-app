const dummyConditions = ['Sunny', 'Cloudy', 'Rainy', 'Stormy', 'Foggy', 'Windy', 'Snowy'];
const dummyTemps = ['22°C','23°C','18°C','30°C','25°C','28°C','19°C','33°C'];
const dummyHumidity = ['40%', '60%', '55%', '70%', '65%', '50%'];
const dummyWind = ['10 km/h', '15 km/h', '7 km/h', '12 km/h', '20 km/h'];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getWeather() {
    const cityInput = document.getElementById('cityInput').value.trim();
    if (cityInput === "") {
        alert("Please enter a city name.");
        return;
    }

    document.getElementById('cityName').textContent = cityInput;
    document.getElementById('temperature').textContent = "Temperature: " + getRandomElement(dummyTemps);
    document.getElementById('condition').textContent = "Condition: " + getRandomElement(dummyConditions);
    document.getElementById('humidity').textContent = "Humidity: " + getRandomElement(dummyHumidity);
    document.getElementById('wind').textContent = "Wind Speed: " + getRandomElement(dummyWind);
}







    





