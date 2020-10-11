class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
    // Decorator
    revEngine = carMixin.revEngine.bind(this);
}

class CarFactory {
    createCar(type){
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'red');
            case 'cavalier':
                return new Car(4, 'V6', 'gray');
        }
    }
}

class SUV {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class SuvFactory {
    createCar(type){
        switch(type) {
            case 'cx5':
                return new Car(4, 'V6', 'red');
            case 'santa fe':
                return new Car(4, 'V6', 'gray');
        }
    }
}

let carMixin = {
    revEngine(){
        console.log(`The ${this.engine} engine is doing vroom vroom!`);
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

// Abstract factory
const autoManufacturer = (type, model) => {
    switch(type){
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createCar(model);
    }
}

//Object.assign(Car.prototype, carMixin);
//Car.prototype.revEngine = carMixin.revEngine;

const civic = autoManufacturer('car','civic')
const santaFe = autoManufacturer('suv','santa fe');

//console.log(civic);
//console.log(santaFe);
civic.revEngine();