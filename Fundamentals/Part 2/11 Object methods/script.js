const myCountry = {
    country: 'Romania',
    capital: 'Bucharest',
    language: 'romanian',
    population: 10,
    neighbours: ['Neighbour1', 'Neighbour2', 'Neighbour3', 'Negihbour4'],

    // 1
    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    },

    // 3
    checkIsland: function() {
        this.isIsland = this.neighbours.length == 0 ? true : false;
    }
};

// 2
myCountry.describe();

// 3
myCountry.checkIsland();
console.log(myCountry.isIsland);