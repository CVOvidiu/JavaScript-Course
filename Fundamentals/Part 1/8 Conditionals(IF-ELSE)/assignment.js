const country = "Romania";
const continent = "Europe";
const population = 10;
const isIsland = false;
const language = "romanian";
const otherCounty = "Finland";
const otherpopulation = 6;
const description = "Portugal is in Europe, and its 11 million people speak portuguese";

if(population > 33)
    console.log(`${country}'s population is above average.`);
else
    console.log(`${country}'s population is ${33 - population} below average.`);