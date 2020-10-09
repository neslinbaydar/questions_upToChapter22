//•	Write a function that camel cases a string, name it as “toCamelCase” and add it to javascript string library. The expected input and output is as follows:
/* "This is an example".toCamelCase(); // => "thisIsAnExample" */
//i'll explain it in the html page.

String.prototype.toCamelCase = function camelize(str) {
    return this.split(' ').map(function (word, index) {
      if (index == 0) {
        return word.toLowerCase();
      }
    return word[0].toUpperCase() + word.substring(1);
      // return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); //This line was alternative one.I used charAt() to get a character at the specified index in string and then similar steps..
    }).join('');  //.join(separator) can be used to output an array as a string, with a configurable separator.
  }
  
  console.log("This is an example".toCamelCase())
  