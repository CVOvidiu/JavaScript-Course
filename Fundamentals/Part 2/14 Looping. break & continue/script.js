const populations = [10, 1441, 332, 83];

const percentageOfWorld1 = (population) => {
    return (population / 7900) * 100;
}

let percentages2 = [];
for(let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);