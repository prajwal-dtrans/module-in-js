// function celsiusToFahrenheit(celsius) {
//     return celsius * (9 / 5) + 32;
// }

// module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

// module.exports.fahrenheitToCelsius = function (fahrenheit) {
//     return (fahrenheit - 32) * (5 / 9);
// };

export function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}
export const fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
};

//third function

const milliToCenti = (millimeter) => {
    return millimeter / 10;
}

//fourth function

const centiToMeter = (centimeter) => {
    return centimeter * 100;
}


const nanoMeter = 0.00000001

export default nanoMeter;

export { milliToCenti, centiToMeter }
// export { celsiusToFahrenheit, fahrenheitToCelsius };