// var printPlayerNameFunction = function (obj) {
//     obj.printPlayerName = function () {
//         console.log(this.name);
//         console.log(this.age);
//     }
// };

// var sakib = {
//     name:"Sakib",
//     age: 34
// }
// var tamim = {
//     name:"Sakib",
//     age: 34
// }

// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();

// <-- 2nd way -->

// var Person = function (name,age) {
//     return {
//         name:name,
//         age:23,
//         printName: function () {
//             console.log(this.name)
//         }
//     }
// }

// var sakib = Person("Sakib",34);
// sakib.printName();


// <-- Explicitly way -->

// var printName = function (v1,v2,v3) {
//     console.log(`${this.name}`  ) //for .call
    // console.log(`${this.name} is ${v1}, ${v2},${v3}`  ) // for .apply
//     console.log(`${this.name} is ${v1}, ${v2},${v3}`  ) // for .bind
// }


// var sakib = {
//     name:"Sakib",
//     age:32,
    
// }
// var tamim = {
//     name:"Tamim",
//     age:31,

// }

// var v1 = "Handsome";
// var v2 = "ALl rounder";
// var v3 = "Best Player";


// var v = [v1,v2,v3]; //for .apply
// var v = [v1,v2,v3]; //for .bind
// printName.call();  //for .call
// printName.apply(sakib); 
// printName.apply(sakib,v); //for .apply

// for bind use 

// var newFunc = printName.bind(sakib,v1,v2,v3);
// newFunc();


// <-- New Binding -->

// function Person(name,age) {
//     this.name = name;
//     this.age = age ;
//     console.log(`${this.name} is ${age} years old`)
// }

// let sakib = new Person ("Sakib", 32);


// <-- Window Binding -->

var printName = function () {
    console.log(window === this);
    console.log(this.name)
}

var sakib = {
    name:'Sakib'
}

printName();