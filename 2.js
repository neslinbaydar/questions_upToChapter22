//i'll explain the following ES6 code segment in html page
"use strict";
    class Car{
    constructor(){
        this.position = 0;
        this.speed = 42;
    }
    move(){
        this.position += this.speed; //using "this" keyword shows us which of the object that we worked on it.
    }
}
    class SelfDrivingCar extends Car{
        move(){
            //start moving around
            super.move(); //calls a parent method
            super.move();
        }
    }





