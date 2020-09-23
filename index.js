class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class carFactory {
    createCar(type){
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'red');
            case 'cavalier':
                return new Car(4, 'V6', 'gray');
        }
    }
}


const factory = new carFactory();

const civic = factory.createCar('civic');
const cavalier = factory.createCar('cavalier');

console.log(civic);
console.log(cavalier);