const apiKey = "6df8801d455f59787b2a0335f3649892";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function cheakWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";
    console.log(data);
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    } else if (data.weather[0].main == "Wind") {
        weatherIcon.src = "images/wind.png"
    }
    searchBox.value = "";
}
searchBtn.addEventListener("click", () => {
    cheakWeather(searchBox.value);
    
});
searchBox.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        cheakWeather(searchBox.value);
    }
});