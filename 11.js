//i'll explain what are named functions and  anonymous functions, and will show the difference between them.

//ANONYMOUS FUNCTION(a function without a name):
let f = function (name) {   //f function is only created when we hit this line in the program.
    console.log(name + 'something');
  }
/*anonymous self-invoking function (function without name)*/
let a=(function () {
  var b = "Hello Anonymous!";  
})();
console.log(a) //logs undefined
//The function above is actually an anonymous self-invoking function (function without name).

//IIFE, for short, is a pattern that uses an anonymous function which immediately creates and invokes the contents of the function.
(function() {
  console.log('neslin'); // neslin
})();
//Anonim fonksiyonlar isim belirtmeksizin oluşturulabilen fonksiyonlardır. Çoğunlukla callback (geriçağırım fonksiyonu) olarak fonksiyon parametrelerinde kullanılırsa da kullanımı bununla sınırlı değildir.
(function(){
  (function(){
    (function(){
      alrt('Neslin Baydar');
    })();
  })();
})();
//it'll log like this:
/*Uncaught ReferenceError: alrt is not defined
    at <anonymous>:4:7
    at <anonymous>:5:7
    at <anonymous>:6:5
    at <anonymous>:7:3
    */
 //With anonymous functions, it is difficult to identify in call stacks, which makes debugging trickier. While with callback functions, there are identify in call stacks and easy to debug.

//ES6 introduced arrow function expression that provides a shorthand for declaring anonymous functions:
let func = () => console.log('Anonymous function');
//In summary,anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.


/* NAMED FUNCTION */
//In js,we make a named function like this:
function func1 () { return "NamedFunction"; }
//Also they can be declared as follows:
function sum(a, b) {
  return a + b;
}
console.log(sum.name) //it logs sum

//While interpreting code, JS looks for statements starting with function keyword (i.e. named function expressions) and move them to the top.This is called "Hoisting".
//A named function is available even before it’s declared, making the following code valid:
add(1, 2); // => 3
function sum (a, b) {
  return a + b;
} //logs 3

//And it also improves readability.
//It’s really difficult to understand a callback function’s purpose.
//Adding names to callbacks improves readability and acts as implicit documentation, as the following jQuery code does.
$('form').save(function hitAPI () {
  // ...
});
//They can be either declared in a statement or used in an expression.
//The name of the function is bound inside its body, and that can be useful. 
//And we can use the name to have a function invoke itself, or to access its properties like any other object.



