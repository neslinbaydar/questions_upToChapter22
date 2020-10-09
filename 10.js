//Study how “extends” keyword in ES6 is converted to ES5 statements.  
//i'll explain in html page.
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);     //////////bu kisimda throw eger koşul doğruysa hata verecek.
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,     //////YAZILABİLİR yani item eklenebilirse true döndürsün
            configurable: true   //////AYARLARI DEĞİŞTİRİLEBİLİR ise true döndürsün.
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;    //////////SUBCLASSIN PROTOSUNA SUPERCLASSI ASSİGN EDİYOR(ATAMA)
 }