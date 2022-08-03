const populations = [10, 1441, 332, 83];

const percentageOfWorld1 = (population) => {
    return (population / 7900) * 100;
}

let percentages3 = [];
let i = 0;

while(percentages3.length !== populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages3);