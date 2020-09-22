class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class Van extends Car {
    constructor(doors, engine, color){
        super(doors, engine, color);
        this.wheels = 4;
    }
}

const civic = new Car(4, 'V6', 'red');
const caravan = new Van(4, 'V6', 'gray');
console.log(civic);
console.log(caravan);