// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype = {
//     eat(){
//         console.log(`${this.name} is eating`)
//     },
//     play(){
//         console.log(`${this.name} is playing`)
//     },
//     swiming(){
//         console.log(`${this.name} is swiming`)
//     }
// }

// const shahin = new Person("Shahin",27);
// // shahin.play(); // value pass okay but we have tried to another because of we have showed this out ui

// //first of we have connected html and javascript file

// document.getElementById("demo").innerHTML = "Shahin" + " is " + shahin.age + " " + "years old ";


// Class constructor

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(`${this.name} is eating and ${this.age} is years old`)
//     }
//     sleep(){
//         console.log(`${this.name} is sleeping `)
//     }
//     play(){
//         console.log(`${this.name} is playing`)
//     }
// };

// const shahin = new Person("Shahin",25);

// shahin.eat();

// document.getElementById("demo").innerHTML = "Shahin is" + " " + shahin.age + " years old";


//<-- Dynamically Object create -->

function Person(name,age){
    
    this.name = name;
    this.age =age;

}
Person.prototype ={
    eat:function(){
        console.log(`${this.name} is eating`)
    }
}

const shahin = new Person("Shahin",35)
console.dir(shahin);
shahin.eat();










