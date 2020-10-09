var MyClass = (function () {
    var A = 10;
    function MyClass() {
    }
    MyClass.prototype.getA = function(){
        return A;
    };
    return MyClass;
  })();
  var mc = new MyClass();
  console.log(mc.getA());
  console.log(mc.A); // degisken private oldugu icin undefined yazacak
  