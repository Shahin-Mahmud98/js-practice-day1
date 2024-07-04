//eta working

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// function Cricketer(name,age,type,country) {
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
// }

// Person.prototype = {
//     eat : function () {
//         console.log(`${this.name} is eating`)
//     }
// }

// Cricketer.prototype = Object.create(Person.prototype);

// Cricketer.prototype.constructor = Cricketer;

// let shahin = new Person ("Shahin",27)

// shahin.eat();


// 
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// function Cricketer(name,age,type,country) {
//     Person.call();
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
// }

// Person.prototype = {
//     eat : function () {
//         console.log(`${this.name} is eating`)
//     }
// }

// Cricketer.prototype = Object.create(Person.prototype);

// Cricketer.prototype.constructor = Cricketer;

// Cricketer.prototype.play = function () {
//     console.log(`${this.name} is playing`)
// }

// let shahin = new Cricketer ("Shahin",27)
// console.log(shahin.play()) ;


// <-- Class Based Prototype-inheritance -->

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }
//     eat(){
//         console.log(`${this.name} is eating`)
//     }

// }

// class Cricketer extends Person{
//     constructor(name,age,type,country){
//         super(name,age,type,country)
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }
//     play(){
//         console.log(`${this.name} is palying`)
//     }

// }

// let shahin = new Cricketer ("Shahin",35);

// shahin.eat();


// <-- Js Polymorphism -->

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }
//     eat(){
//         console.log(`${this.name} is eating`)
//     }
//     play(){
//         console.log(`${this.name} is Playing`)
//     }
// }

// class Cricketer extends Person {
//     constructor(name,age,type,country){
//         super(name,age,type,country)
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }

//     play(){
//         super.play();
//         console.log(`${this.name} is playing cricket`)
//     }
// }

// let shahin = new Cricketer ("Shahin","All Rounder",35);

// shahin.play();