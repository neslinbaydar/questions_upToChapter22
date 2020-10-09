//Study what we can do with Object.assign() , also show the differences between Object.assign and Object.create

//https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/*Object.assign(hedef_nesne, ...kaynak_nesneler)*/
//Object.assign() metodu bir kaynak nesnesinden bir hedef nesnesine sadece sayılabilir ve sahip olduğu özellikleri kopyalar. 
//Sayılabilir özellikler de dahil olmak üzere özellik tanımlamalarını kopyalamak için, prototiplerdeki Object.getOwnPropertyDescriptor() yerine Object.defineProperty() kullanılmalıdır.
//Object.assign() metodu kaynak nesnelerdeki null ya da undefined durumlarını fırlatmaz.

//Object.create() ile özellik tanımlarız.
//Object.assign() ile ise sadece assign(atama) yaparız.It's configurable,writable,enumarable
//Yani diyebiliriz ki create->sort of creating an instance of parent class
//while "assign"->is just for copying properties.
//Ayrıca object.assign() ile shallow copying(sığ kopyalama) yapabiliriz.Method override ve özellik tanımlama(property declared)
//Object.create() ise deep copying sağlar.(prototype chain)
function objectDotCreate(object){
    function f(){
        f.prototype = object;
        return new f();
    }
}

//clone an object using Object.assign() :
let obj={
    id:1,
    name:'tester'
};
let clone = Object.assign({},obj)
clone.name = "clone tester";  // or we could use spread syntax: let clone={...obj}
console.log(clone.name)
console.log(obj.name)


//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const person = {
    isEngineer: false,
    printSomeInfo: function() {
      console.log(`Her name is ${this.name}. Is she engineer? ${this.isEngineer}`);
    }
  };
  
  const her = Object.create(person);
  
  her.name = 'Amy'; // "name" is a property set on "her", but not on "person"
  her.isEngineer = true; // inherited properties can be overwritten
  her.printSomeInfo();
  // expected output: "My name is Amy. Is she engineer? true"
  

