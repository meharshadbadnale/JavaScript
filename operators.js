//Arithmetic operator

let a = 56;
let b = 4;

console.log("a + b", a+b);
//60
console.log("a - b", a-b);
//52
console.log("a * b", a*b);
//224
console.log("a / b", a/b);
//14
console.log("a % b", a%b);
//0


//unary operator

//a++ (post increment)
//--a (pre increment)

let c = 5;
let d = 4;

console.log("c =", c, "& d =", d);
c++;
console.log("c =",c);



//Assinment operator

// =, +=, -=, *=, %=, **=

let e = 5;
let f = 2;

e **= 4;
console.log(e); //9

e -= 4;
console.log(e); //1

e *= 4;
console.log(e); //20

e /= 4;
console.log(e); //1.25

e %= 4;
console.log(e); //1

e **= 4;
console.log(e); //625



//comparsion operator

//Equal to ==      //Equal to & type ===
//Not equal to !=  //Not equal to & type !==

// >,>=,<,<=

let a =5;
let b =4;

console.log("a == b", a==b); //false
console.log("a != b", a!=b); //true
console.log("a -= b", a-=b); //1
console.log("a === b", a===b); //false
console.log("a !== b", a!==b); //true


// >,>=,<,<=

let a =5;
let b =3;

console.log("a > b", a>b); //true
console.log("a >= b", a>=b); //true
console.log("a < b", a<b); //false
console.log("a <= b", a<=b); //false



//Logical operator
// Logical AND &&
let a = 6;
let b = 6;

let cond1 = a >= b;
let cond2 = a === b;

console.log(cond1 && cond2); //true

// Logical OR ||
let a = 6;
let b = 6;

let cond1 = a > b;
let cond2 = a === b;

console.log(cond1 || cond2); //true


// Logical NOT !
let a = 6;
let b = 7;

let cond1 = !(a > b);
console.log(cond1); //true
