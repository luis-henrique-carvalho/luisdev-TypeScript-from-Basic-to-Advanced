// 1 - Number
let x: number = 10;

console.log(x);

x = 16;

console.log(typeof x);

let y: number = 15.5546456;

console.log(typeof y);

console.log(y);

console.log(y.toPrecision(3));

// 2 - String

const firstName: string = "Matheus";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Battisti";

fullName = firstName + " " + lastName;

console.log(fullName);

console.log(typeof lastName);

// 3 - bullean
let a: boolean = false;

console.log(a);
console.log(typeof a);

// 4 - inference e annotation

let ann: string = "teste";

let inf = 'teste'

// ann = 1
// inf = 1

console.log('testando')
