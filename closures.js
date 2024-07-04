function myFunction() {
    let a = 4;
    

   return function () {
        x = a * a;
    }
}

const add = myFunction();
console.log(add)
add();


