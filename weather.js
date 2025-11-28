
const weatherApp = {
  apiKey: "",
  cities: ["Uttarakhand", "Jaipur", "Dubai", "London"],


  async getWeather(city) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=3`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },


  updateTableRow(city, data) {
   
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
      const cityName = row.querySelector("th").textContent.trim();
      if (cityName.toLowerCase() === city.toLowerCase()) {
        const cells = row.querySelectorAll("td");
        cells[0].textContent = data.current.feelslike_c;
        cells[1].textContent = data.current.feelslike_f;
        cells[2].textContent = data.current.wind_mph;
        cells[3].textContent = data.current.wind_kph;
        cells[4].textContent = data.current.humidity;
        cells[5].textContent = data.current.temp_c;
        cells[6].textContent = data.current.temp_f;
        cells[7].textContent = data.current.uv;
      }
    });
  },

 
  async loadWeatherData() {
    for (const city of this.cities) {
      try {
        const data = await this.getWeather(city);
        this.updateTableRow(city, data);
      } catch (err) {
        console.error("Error fetching weather for", city, err);
      }
    }
  },
};


weatherApp.loadWeatherData();

