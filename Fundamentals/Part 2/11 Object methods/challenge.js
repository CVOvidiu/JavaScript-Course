// Challenge

const jonas = {
    name: 'Jonas',
    age: 46,
    job: 'teacher',
    driver_license: true,

    getSummary: function () {
        console.log(`${this.name} is a ${this.age}-year old teacher, and he has ${this.driver_license === true ? 'a' : 'no'} driver's license`);
    }
};

jonas.getSummary();