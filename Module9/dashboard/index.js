const URL = 'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature';
fetch(URL)
    .then(response => response.json())
    .then(data => {
        // console.log(data.user.name)
        document.body.style.backgroundImage = `url(${data.urls.full})`; //full
        document.getElementById('author').textContent = `By: ${data.user.name}`;
    })
    .catch(err => {
        console.error(err)
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
        document.getElementById('author').textContent = 'By: Dodi Achmad'
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => {
        document.getElementById('crypto-top').innerHTML = `
                    <img src="${data.image.small}" alt="crypto image"/>
                    <span>${data.name}</span> 
                `;
        document.getElementById('crypto-main').innerHTML = `
                    <p>🎯: $${data.market_data.current_price.usd}</p>
                    <p>👆: $${data.market_data.high_24h.usd}</p>
                    <p>👇: $${data.market_data.low_24h.usd}</p>
                `;
    })
    .catch(err => {
        console.log(err)
    })

function getCurrentTime() {
    const d = new Date();
    document.getElementById('time').innerText = d.toLocaleString('en-US', {timeStyle: "short"});
}
setInterval(getCurrentTime, 1000);

navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)

            document.getElementById('weather').innerHTML = ` 
               <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon"/>
               <p class="weather-temp">${Math.round(data.main.temp)}º</p>
               <p class="weather-city">${data.name}</p>
            `;
        })
        .catch(err => console.log(err))
});
