let weather = {
  Temperature: 24, // °C
  Humidity: .75, // 0 = 0%, 1 = 100%
  Wind: {
    Speed: .4, // m/s
    Direction: .3563, // 0 = north, .25 = east, .5 = south, .75 = west
  },
  isFreezing() {
    return this.Temperature < 0;
  },
}
document.querySelector('.js-output').innerHTML = weather.isFreezing();

let anotherWeather = {
  Temperature: -2, // °C
  Humidity: .64, // 0 = 0%, 1 = 100%
  Wind: {
    Speed: 3.4, // m/s
    Direction: .9352, // 0 = north, .25 = east, .5 = south, .75 = west
  },
  isFreezing() {
    return this.Temperature < 0;
  },
}
document.querySelector('.other-js-output').innerHTML = anotherWeather.isFreezing();