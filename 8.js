//i'll explain in html page.
var person= {
    name:"John Doe",
    age:42,
    gender:'male',
    bio:function(){
        console.log('my name is '+this.name);
    }
};
person.bio(); //"logs my name is john doe"
var bio=person.bio;
bio(); //logs my name is undefined

//i used "call" and "apply" methods to call a method.
person.bio(); //Will return my name is John Doe
person.bio.call(person) // call() method can be used to invoke (call) a method with an owner object as an argument (parameter).
person.bio.apply(person) // if we had an another properties like "city" or "country",then we could use person method like this (person,["Ankara","İstanbul"]).
person.bio.bind(person)  //The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.


