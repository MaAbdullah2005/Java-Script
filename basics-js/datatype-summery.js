// Primitive 
// types of primitive 07
// string   number  boolean     null    undefined   symbol  bigint

const score = 100
const scoreValue = 100.3
const isloggedIn = false
// const outsideTemp = Null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3444555544553n


// Refrence (Non-Primitive)
// array    objects     function


const heros = ["Azhan", "Aayan", "Ashir"]
let myObj = {
    name:"Abdullah",
    age: 22,
}



const myFunction = function(){
    console.log("Hellow word");
    }


console.log(typeof myFunction);
   