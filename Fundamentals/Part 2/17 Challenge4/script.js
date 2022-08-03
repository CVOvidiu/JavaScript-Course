const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill_value) => {
    return bill_value >= 50 && bill_value <= 300 ? 15/100 * bill_value : 20/100 * bill_value;
}

const calcAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
        sum += arr[i];
    
    return sum / arr.length;
}

for(let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);
console.log(calcAverage(totals));