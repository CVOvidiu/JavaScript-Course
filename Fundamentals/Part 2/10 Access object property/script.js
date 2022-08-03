const myCountry = {
    country: 'Romania',
    capital: 'Bucharest',
    language: 'romanian',
    population: 10,
    neighbours: ['Neighbour1', 'Neighbour2', 'Neighbour3', 'Negihbour4']
};

// 1
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

// 2
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);