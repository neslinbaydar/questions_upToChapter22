//i'll convert the following typescript segment to ES5 and i'll explain it in html page.
/*
class SomeClass{
    public static SomeStaticValue:string = "hello";
    public someMemberValue:number = 15;
    private somePrivateValue:boolean = false;
    constructor(){
        SomeClass.SomeStaticValue =SomeClass.getGoodbye();
        this.someMemberValue = this.getFortyTwo();
        this.somePrivateValue = this.getTrue();
    }
    public static getGoodbye():string {
        return "goodbye!";
    }
    public getFortyTwo():number{
        return 42;
    }
    private getTrue():boolean {
        return true;
    }
}*/
    "use strict";

    function SomeClass() {
    this.someMemberValue = 15;
    this.somePrivateValue = false;
    this.SomeStaticValue = getGoodbye();
    this.someMemberValue = getFortyTwo();
    this.somePrivateValue = getTrue();
    }

    function getGoodbye() {
    return "goodbye!";
    }

    function getFortyTwo() {
    return 42;
    }

    function getTrue() {
    return true;
    }

    SomeClass.SomeStaticValue = "hello";
