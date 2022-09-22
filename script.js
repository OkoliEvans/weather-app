
    let weatherApp = {
        apikey: "e32bf17d68cd7f426964d36596a75097",

        getData : function(city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=
            ${city}&units=metric&appid=${this.apikey}`)
            .then((response) => response.json())
            .then((data) => this.appendWeather(data))
        },

        appendWeather: function(data) {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { country, sunrise, sunset } = data.sys;
            console.log(name, icon, description, humidity, temp, sunrise, sunset, country);
            document.querySelector('.city').innerHTML = `${name}, ${country}`;
            document.querySelector('.weather-icon').src = `//openweathermap.org/img/w/${icon}.png`;
            document.querySelector('.temperature').innerHTML = `${temp} °C`;
            document.querySelector('.humidity').innerText = `humidity: ${humidity} %`;
            let dayLight = document.querySelector('.container');
            if(dayLight = sunset) {
                dayLight.style.backgroundColor = 'grey'
            } else {
                if (dayLight = sunrise) {
                    dayLight.style.backgroundColor = 'white'
                    dayLight.style.color = 'black'
                }
            }
            
        }

    }








