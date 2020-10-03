(function getTemp() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,Ro&appid=c7da641777760054e5ca6164eb47580a')
    .then(resUnc => resUnc.json())
    .then(res => {

        if (celsInput.checked) {

            temp.innerHTML = `${(res.main.temp - 273.15).toFixed(2)} &deg;C`;
            temp2.innerHTML = `${(res.main.temp - 273.15).toFixed(2)} &deg;C`;
            
        } else {
            
            temp.innerHTML = `${(((res.main.temp * 9) / 5) - 459.67).toFixed(2)} &deg;F`;
            temp2.innerHTML = `${(((res.main.temp * 9) / 5) - 459.67).toFixed(2)} &deg;F`;
        
        }
        if (celsInput2.checked) {

            temp2.innerHTML = `${(res.main.temp - 273.15).toFixed(2)} &deg;C`;
            
        } else {
            
            temp2.innerHTML = `${(((res.main.temp * 9) / 5) - 459.67).toFixed(2)} &deg;F`;
        }
    });
})();