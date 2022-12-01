/*
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/


// #1
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    };

    accelerate() {
        this.speed += 10;
        console.log(`Accelerate! New speed of ${this.make} is ${this.speed}`);
    };

    brake() {
        this.speed -= 5;
        console.log(`Brake! New speed of ${this.make} is ${this.speed}`);
    };

    get speedUS() {
        return this.speed / 1.6;
    };

    set speedUS(speed) {
        this.speed = 1.6 * speed;
    };
};

const car1 = new CarCl('BMW', 120);
const car2 = new CarCl('Mercedes', 95);

car1.accelerate();
car2.accelerate();
car1.brake();
car2.accelerate();
car1.accelerate();
car2.brake();

// #2
console.log(car1.speedUS);

// #3
car2.speedUS = 50;
console.log(car2);