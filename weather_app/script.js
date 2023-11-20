
const city=document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function req(city){

const url="https://api.openweathermap.org/data/2.5/weather?appid=8ffe0eefe9f774763f607a2b1682331b&units=metric&q="
const result=await fetch(url+city);

    if(result.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else {
        const data=await result.json();
        document.querySelector(".city").innerHTML=data.name
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

        if(data.weather[0].main=="Clouds")
        {
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear")
        {
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Drizzle")
        {
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist")
        {
            weatherIcon.src="images/mist.png";
        }
        else if(data.weather[0].main=="Rain")
        {
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Snow")
        {
            weatherIcon.src="images/snow.png";
        }
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    }

// console.log(data);
}

btn.addEventListener("click", ()=>{
    req(city.value);
})

