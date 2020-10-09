"use strict"
 class Pet {

 }
 class Dog extends Pet {
     bark(){
         console.log("woof");
     }
 }

 class Cat extends Pet {
    purr(){
        console.log("meow");
    }
}

function example(name){
    if(name instanceof Dog){    //instance of kullanmak yerine constructor.name ile de yapılabilir.
        name.bark();
    }
    else if(name instanceof Cat){
        name.purr();
    }
    else{
        throw "Error not a dog neither a cat"
    }
}


example(new Dog());  //woof
example(new Cat())   //meow
example(new Pet());  //"Error not a dog neither a cat"