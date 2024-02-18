const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");//old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpollation//backticks//prefer it

const gameName = new String('hitesh-hc-com')//another way of defining strings

// console.log(gameName[0]);
// console.log(gameName.__proto__);//object {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)//from back
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));//gices an array of strings