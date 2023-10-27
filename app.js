const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', () =>{
    const inputField = document.getElementById('inputField').value;
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ inputField +"&appid=c8b4518d774aed6d971f2818bc46282e")
    .then((response) => response.json())
    .then((data) => {
        
        const Location = data.name;
        const temperature = (data.main.temp - 273.15).toFixed(0);
        const description = data.weather[0].description;
        const feelsLike = (data.main.feels_like - 273.15).toFixed(0);
        const windSpeed = data.wind.speed;
        const pressure = data.main.pressure;
        const sunRise = data.sys.sunrise;
        const sunSet = data.sys.sunset;

        console.log(data);

        console.log(sunSet);

        const cityName = document.getElementById("cityName").innerText = Location;
        const temp = document.getElementById("temp").innerText = temperature ;
        const des = document.getElementById("des").innerText = description;

        const feelTemp = document.getElementById("feelsTemp").innerText = "Temperature Feels Like " + feelsLike ;
        const windspeed = document.getElementById("windSpeed").innerText = "Wind Speed " + windSpeed + "Mile/Hr";
        const airPressure = document.getElementById("pressure").innerText = "Air Pressure " + pressure + "Pa";        


// time for sun Rise

        
        let hr = document.getElementById("hr");
        let min = document.getElementById("min");
        
        var distance = sunRise;
    
        
        var hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
        var minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60));
    
        
        hr.innerHTML = (hours  < 10 ? "0" : "") + hours;
        min.innerHTML = (minutes  < 10 ? "0" : "") + minutes;


// time for sunset

        
        let hr2 = document.getElementById("hr2");
        let min2 = document.getElementById("min2");
        
        var distance2 = sunSet;
    
        
        var hours2 = Math.floor( (distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
        var minutes2 = Math.floor( (distance2 % (1000 * 60 * 60)) / (1000 * 60));
    
        
        hr2.innerHTML = (hours2  < 10 ? "0" : "") + hours2;
        min2.innerHTML = (minutes2  < 10 ? "0" : "") + minutes2;

        
    }).catch((response)=> alert("Please type the correct city name!"));
}
)