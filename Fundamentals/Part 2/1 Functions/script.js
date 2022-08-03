'use strict'

function describeCountry(country, population, capitalCity) {
    const string = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return string;
}

const country1 = describeCountry("Country1", 1, "Capital1");
const country2 = describeCountry("Country2", 2, "Capital2");
const country3 = describeCountry("Country3", 3, "Capital3");

console.log(country1);
console.log(country2);
console.log(country3);