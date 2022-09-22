
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
            document.querySelector('.city').innerHTML = `${name}, ${country}`;
            document.querySelector('.weather-icon').src = `//openweathermap.org/img/w/${icon}.png`;
            document.querySelector('.temperature').innerHTML = `${temp} °C`;
            document.querySelector('.humidity').innerText = `humidity: ${humidity} %`;
            document.querySelector('.desc').innerHTML = `${description}`
            document.querySelector('#weather').classList.remove('loading')
            document.body.style.backgroundImage = `url("//source.unsplash.com/1600x900/?${name}")`
        },

        search: function() {
            this.getData(document.querySelector('.search-text').value);
        }
    }

    document.querySelector('.search-btn').addEventListener('click', function(){
        weatherApp.search();
    })

    document.querySelector('.search-text').addEventListener('keyup', function(event) {
        if (event.key == 'Enter') {
            weatherApp.search();
        }
    });

    weatherApp.getData('Awka');








