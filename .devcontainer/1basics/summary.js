//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
//number type

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//different outputs

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memory allocation
//primitive(stack) =>copy is passed , no change is affected in original value
//non-primitive(heap)=> share single resource, change gets affected

// https://262.ecma-international.org/5.1/#sec-11.4.3