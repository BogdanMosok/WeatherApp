/**
 * File: apiManager.js
 * Role: Simulates a backend weather API service using rich mock JSON data.
 *       Allows the dashboard to work immediately offline without an API key.
 */

const ApiManager = (() => {
    // Internal Mock Database for 5 major cities
    const MOCK_WEATHER_DB = {
        london: {
            city: "London",
            region: "United Kingdom",
            temperature: 14,
            feelsLike: 12,
            condition: "Light Rain",
            icon: "🌧️",
            humidity: 82,
            windSpeed: 24,
            windDirection: "SW",
            pressure: 1008,
            hourly: [
                { time: "09:00", temp: 12 },
                { time: "12:00", temp: 14 },
                { time: "15:00", temp: 15 },
                { time: "18:00", temp: 13 },
                { time: "21:00", temp: 11 },
                { time: "00:00", temp: 10 }
            ],
            daily: [
                { day: "Mon", icon: "🌧️", min: 9, max: 14 },
                { day: "Tue", icon: "⛅", min: 10, max: 16 },
                { day: "Wed", icon: "☁️", min: 11, max: 15 },
                { day: "Thu", icon: "☀️", min: 12, max: 19 },
                { day: "Fri", icon: "⛅", min: 11, max: 17 }
            ]
        },
        tokyo: {
            city: "Tokyo",
            region: "Japan",
            temperature: 22,
            feelsLike: 23,
            condition: "Clear Sky",
            icon: "☀️",
            humidity: 48,
            windSpeed: 14,
            windDirection: "ENE",
            pressure: 1018,
            hourly: [
                { time: "09:00", temp: 19 },
                { time: "12:00", temp: 22 },
                { time: "15:00", temp: 24 },
                { time: "18:00", temp: 21 },
                { time: "21:00", temp: 18 },
                { time: "00:00", temp: 16 }
            ],
            daily: [
                { day: "Mon", icon: "☀️", min: 15, max: 24 },
                { day: "Tue", icon: "☀️", min: 16, max: 25 },
                { day: "Wed", icon: "⛅", min: 17, max: 23 },
                { day: "Thu", icon: "🌧️", min: 14, max: 19 },
                { day: "Fri", icon: "☀️", min: 15, max: 22 }
            ]
        },
        "new york": {
            city: "New York",
            region: "United States",
            temperature: 18,
            feelsLike: 17,
            condition: "Partly Cloudy",
            icon: "⛅",
            humidity: 60,
            windSpeed: 19,
            windDirection: "NW",
            pressure: 1014,
            hourly: [
                { time: "09:00", temp: 15 },
                { time: "12:00", temp: 18 },
                { time: "15:00", temp: 20 },
                { time: "18:00", temp: 17 },
                { time: "21:00", temp: 14 },
                { time: "00:00", temp: 12 }
            ],
            daily: [
                { day: "Mon", icon: "⛅", min: 12, max: 20 },
                { day: "Tue", icon: "☀️", min: 14, max: 23 },
                { day: "Wed", icon: "☀️", min: 15, max: 24 },
                { day: "Thu", icon: "⛈️", min: 13, max: 18 },
                { day: "Fri", icon: "⛅", min: 11, max: 17 }
            ]
        },
        warsaw: {
            city: "Warsaw",
            region: "Poland",
            temperature: 11,
            feelsLike: 9,
            condition: "Overcast",
            icon: "☁️",
            humidity: 74,
            windSpeed: 21,
            windDirection: "W",
            pressure: 1011,
            hourly: [
                { time: "09:00", temp: 8 },
                { time: "12:00", temp: 11 },
                { time: "15:00", temp: 12 },
                { time: "18:00", temp: 10 },
                { time: "21:00", temp: 7 },
                { time: "00:00", temp: 6 }
            ],
            daily: [
                { day: "Mon", icon: "☁️", min: 6, max: 12 },
                { day: "Tue", icon: "🌧️", min: 5, max: 10 },
                { day: "Wed", icon: "⛅", min: 7, max: 14 },
                { day: "Thu", icon: "☀️", min: 8, max: 16 },
                { day: "Fri", icon: "☀️", min: 9, max: 17 }
            ]
        },
        reykjavik: {
            city: "Reykjavik",
            region: "Iceland",
            temperature: 4,
            feelsLike: 0,
            condition: "Snow Showers",
            icon: "❄️",
            humidity: 88,
            windSpeed: 35,
            windDirection: "NNE",
            pressure: 998,
            hourly: [
                { time: "09:00", temp: 2 },
                { time: "12:00", temp: 4 },
                { time: "15:00", temp: 5 },
                { time: "18:00", temp: 3 },
                { time: "21:00", temp: 1 },
                { time: "00:00", temp: -1 }
            ],
            daily: [
                { day: "Mon", icon: "❄️", min: -2, max: 5 },
                { day: "Tue", icon: "❄️", min: -3, max: 3 },
                { day: "Wed", icon: "☁️", min: 0, max: 6 },
                { day: "Thu", icon: "🌧️", min: 2, max: 7 },
                { day: "Fri", icon: "⛅", min: 1, max: 6 }
            ]
        }
    };

    /**
     * Retrieves weather data for a requested city name.
     * @param {string} cityName
     * @returns {Promise<Object>} Weather data object
     */
    function fetchWeatherByCity(cityName) {
        return new Promise((resolve, reject) => {
            const normalizedKey = cityName.trim().toLowerCase();
            const record = MOCK_WEATHER_DB[normalizedKey];

            // Simulate slight asynchronous API response
            setTimeout(() => {
                if (record) {
                    resolve(record);
                } else {
                    reject(new Error(`City "${cityName}" not found in mock database.`));
                }
            }, 80);
        });
    }

    /**
     * Returns a list of all available city names for the sidebar navigation.
     * @returns {Array<Object>} List of summary objects
     */
    function getAvailableCities() {
        return Object.values(MOCK_WEATHER_DB).map(item => ({
            name: item.city,
            temp: item.temperature,
            icon: item.icon
        }));
    }

    return {
        fetchWeatherByCity,
        getAvailableCities
    };
})();