async function getWeather() {
    // const apiKey = 'f8e8011454d2b7f9ed71de9a67151be2'; 
    const city = document.getElementById('city').value;
    if (!city) return;
    
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('weather').innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weather').innerHTML = `<p style="color: red;">City not found</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p style="color: red;">Error fetching data</p>`;
    }
}
