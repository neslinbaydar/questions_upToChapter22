//Convert the following to ES5 
/*
class Car {
    constructor(position,speed){
        move(){
            this.position +=this.speed;
        }
    }
}
*/
//As shown below,here is a converted code to ES5.i'll explain this in html page.
//constructor with property definitions
function Car(position, speed){
    this.position = position;  //property definitions..
    this.speed = speed;
}
Car.prototype.move = function(){ //this way we're defining a method like a prototype in ES5
    return this.position += this.speed;
}

/// Test
const car = new Car(3,5);
console.log(car) 
console.log("Result = " + car.move()) // move protype 