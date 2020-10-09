/*Void 0 vs undefined. Compare 
a === undefined ? typeof a === “undefined” ? 
How to build a strong null & undefined check for variables ? 
*/
//void 0 : bazı internet sitelerinde browserın tıkladığınız butona ne yapacağını bilemediği durumlarda kilitlenip kalmasına yol açan hata. 

//https://stackoverflow.com/questions/28975896/is-there-a-way-to-check-for-both-null-and-undefined
//Using a juggling-check, you can test both null and undefined in one hit:
if (x == null) {}
//If you use a strict-check, it will only be true for values set to null and won't evaluate as true for undefined variables:
if (x === null) {}
//You can try this with various values using this example in TypeScript:
/*
var a: number;
var b: number = null;

function check(x, name) {
    if (x == null) {
        console.log(name + ' == null');
    }

    if (x === null) {
        console.log(name + ' === null');
    }

    if (typeof x === 'undefined') {
        console.log(name + ' is undefined');
    }
}

check(a, 'a');
check(b, 'b');
*/
//I also find this article very helpful.
//https://medium.com/javascript-in-plain-english/how-to-check-for-null-in-javascript-dffab64d8ed5
//using typeof to check if a value has been declared and is neither null nor undefined.js
//Finally, to check if a value has been declared and assigned a value that is neither null nor undefined, use typeof:
typeof maybeUndeclared !== "undefined" && (typeof maybeUndeclared !== "object" || !maybeUndeclared)



