/**
 * File: uiUpdater.js
 * Role: Handles primary DOM updates for temperature, humidity, and wind speed,
 *       manages sidebar navigation events, and coordinates widget updates.
 */

const UIUpdater = (() => {
    // Cache DOM elements
    const elements = {
        cityName: document.getElementById("city-name"),
        cityRegion: document.getElementById("city-region"),
        currentDate: document.getElementById("current-date"),
        currentTemp: document.getElementById("current-temp"),
        weatherCondition: document.getElementById("weather-condition"),
        feelsLike: document.getElementById("feels-like"),
        weatherIcon: document.getElementById("weather-icon"),
        humidityVal: document.getElementById("humidity-val"),
        humidityBar: document.getElementById("humidity-bar"),
        humidityStatus: document.getElementById("humidity-status"),
        windVal: document.getElementById("wind-val"),
        windDir: document.getElementById("wind-dir"),
        pressureVal: document.getElementById("pressure-val"),
        cityList: document.getElementById("city-list"),
        searchForm: document.getElementById("search-form"),
        cityInput: document.getElementById("city-input"),
        searchError: document.getElementById("search-error")
    };

    /**
     * Converts a humidity percentage into a human-readable comfort status.
     */
    function getHumidityDescription(humidity) {
        if (humidity < 40) return "Dry air conditions";
        if (humidity <= 65) return "Optimal comfort level";
        return "High moisture / humid";
    }

    /**
     * Formats and displays today's date in the dashboard header.
     */
    function updateDateBanner() {
        const now = new Date();
        const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
        elements.currentDate.textContent = now.toLocaleDateString("en-US", options);
    }

    /**
     * Updates the primary dashboard metrics and delegates forecast rendering.
     * @param {Object} data - Weather object from ApiManager
     */
    function updateDashboardUI(data) {
        // Header & Hero Card
        elements.cityName.textContent = data.city;
        elements.cityRegion.textContent = data.region;
        elements.currentTemp.textContent = data.temperature;
        elements.weatherCondition.textContent = data.condition;
        elements.feelsLike.textContent = `Feels like ${data.feelsLike}°C`;
        elements.weatherIcon.textContent = data.icon;

        // Humidity Card
        elements.humidityVal.textContent = `${data.humidity}%`;
        elements.humidityBar.style.width = `${data.humidity}%`;
        elements.humidityStatus.textContent = getHumidityDescription(data.humidity);

        // Wind & Pressure Card
        elements.windVal.textContent = `${data.windSpeed} km/h`;
        elements.windDir.textContent = `Direction: ${data.windDirection}`;
        elements.pressureVal.textContent = `Pressure: ${data.pressure} hPa`;

        // Highlight active city in sidebar
        const buttons = elements.cityList.querySelectorAll(".city-btn");
        buttons.forEach(btn => {
            const isMatch = btn.dataset.city.toLowerCase() === data.city.toLowerCase();
            btn.classList.toggle("active", isMatch);
        });

        // Delegate hourly and 5-day forecast rendering to forecastWidget.js
        if (typeof ForecastWidget !== "undefined") {
            ForecastWidget.renderAll(data.hourly, data.daily);
        }
    }

    /**
     * Loads city weather data from ApiManager and updates the screen.
     */
    async function loadCityWeather(cityName) {
        try {
            elements.searchError.classList.add("hidden");
            const weatherData = await ApiManager.fetchWeatherByCity(cityName);
            updateDashboardUI(weatherData);
        } catch (err) {
            elements.searchError.classList.remove("hidden");
        }
    }

    /**
     * Builds the sidebar list of preset cities from ApiManager.
     */
    function renderSidebarCities() {
        const cities = ApiManager.getAvailableCities();
        elements.cityList.innerHTML = "";

        cities.forEach(cityObj => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            btn.className = "city-btn";
            btn.dataset.city = cityObj.name;
            btn.innerHTML = `
                <span>${cityObj.icon} ${cityObj.name}</span>
                <span>${cityObj.temp}°C</span>
            `;
            btn.addEventListener("click", () => loadCityWeather(cityObj.name));
            li.appendChild(btn);
            elements.cityList.appendChild(li);
        });
    }

    /**
     * Initializes event listeners and loads the default city on startup.
     */
    function init() {
        updateDateBanner();
        renderSidebarCities();

        elements.searchForm.addEventListener("submit", event => {
            event.preventDefault();
            const query = elements.cityInput.value;
            if (query.trim() !== "") {
                loadCityWeather(query);
                elements.cityInput.value = "";
            }
        });

        // Load default city
        loadCityWeather("Tokyo");
    }

    return {
        init,
        loadCityWeather
    };
})();

// Start application once DOM is ready
document.addEventListener("DOMContentLoaded", UIUpdater.init);