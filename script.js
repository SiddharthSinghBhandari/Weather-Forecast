const options = {
    method: 'GET',
    headers: {
        'api-key': 
        'api-host': 
    }
}
const getWeather = (city)=>{
    cityname.innerHTML = city
fetch('Api url=' + city, options)
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        
        document.getElementById('feelslike_c').innerHTML = data.current.feelslike_c;
        document.getElementById('feelslike_f').innerHTML = data.current.feelslike_f;
        document.getElementById('wind_mph').innerHTML = data.current.wind_mph;
        document.getElementById('wind_kph').innerHTML = data.current.wind_kph;
        document.getElementById('wind_kph2').innerHTML = data.current.wind_kph;
        document.getElementById('humidity').innerHTML = data.current.humidity;
        document.getElementById('humidity2').innerHTML = data.current.humidity;
        document.getElementById('uv').innerHTML = data.current.uv;
        document.getElementById('temp_c').innerHTML = data.current.temp_c;
        document.getElementById('temp_c2').innerHTML = data.current.temp_c;
        document.getElementById('temp_f').innerHTML = data.current.temp_f;
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("New Delhi")


