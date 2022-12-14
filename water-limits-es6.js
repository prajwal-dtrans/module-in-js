import { celsiusToFahrenheit, fahrenheitToCelsius } from './converters.js';
import { milliToCenti, centiToMeter } from './converters.js';
import nano from './converters.js';

const buttonElement = document.getElementById("button");
buttonElement.addEventListener("click", clickme);



function clickme() {
    let element = document.getElementById("container");
    element.innerHTML = `<h1>boiling point is:${celsiusToFahrenheit(100)}
    & freezing point is:${celsiusToFahrenheit(0)},<br><br>
    100 mili meter is${milliToCenti(100)}centi-meters,<br><br>
    1000 centi meter is${centiToMeter(1000)}meter, <br><br> 
    one nanometer is${nano}metrs.
    </h1>`


}



console.log(`water boiling point is ${celsiusToFahrenheit(100)} degree fahrenheit`);
