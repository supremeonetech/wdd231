const apiKey = "e9b5c9cf1e2df7b8bf60fce6c038f5df"; 
const lat = "6.2100";  
const lon = "7.0700";  
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById("current-temp").textContent = data.list[0].main.temp.toFixed(1);
  document.getElementById("weather-desc").textContent = data.list[0].weather[0].description;
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "";
  for (let i = 8; i <= 24; i += 8) {
    const day = data.list[i];
    const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
    forecastDiv.innerHTML += `<p>${date}: ${day.main.temp.toFixed(1)}°C</p>`;
  }
}
getWeather();