// ES6 
let s = function singleton(...args){ //In order to limitless number of arguments,i used spread syntax
    return args.reduce((a,c)=>a*c) 
 }
console.log(s(1,2,3,4,5));
///i also did this with four way in the past.You can find my "summation_multiplication" repo in my github profile.i used spread syntax,for loop and map function for this.Also i did it using forEach loop.



