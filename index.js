let instance = null;

class Car {
    constructor(doors, engine, color){
        if(!instance){
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        }else{
            return instance;
        }
    }
}

// class Van extends Car {
//     constructor(doors, engine, color){
//         super(doors, engine, color);
//         this.wheels = 4;
//     }
// }

const civic = new Car(4, 'V6', 'red');
const cavalier = new Car(4, 'V6', 'gray');
console.log(civic);
console.log(cavalier);