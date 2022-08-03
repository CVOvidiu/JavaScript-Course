const neighbours = ['Neighbour1', 'Neighbour2'];

neighbours.push('Utopia');

neighbours.pop('Utopia');

neighbours.includes('Germany') ? {} : console.log("Probably not a central European country :D");

const changeIndex = neighbours.indexOf('Neighbour2');
const changeString = `Republic of ${neighbours[changeIndex]}`;
neighbours[changeIndex] = changeString;