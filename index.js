class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
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

const civic = autoManufacturer('car','civic')
const santaFe = autoManufacturer('suv','santa fe');

console.log(civic);
console.log(santaFe);