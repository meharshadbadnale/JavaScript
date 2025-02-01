//Arrays
let marks = [67,76,55,38,73,26];
console.log(marks);

let heroes = ["ironman","shaktiman","hulk","spiderman"];
console.log(heroes);

let info = ["Harshad","Badnale",21];
console.log(info);


//Array indices
let num = [56,64,44,21];
num[3]=35;
console.log(num);


//looping over an Array
let frnd = ["bablu","sonu","monu","anuj"];

for (let ind=0; ind<frnd.length; ind++){
    console.log(frnd[ind]);
}

//for loop
//we can update the values
let frnd = ["bablu","sonu","monu","anuj"];
frnd[1]="harshu";
for (let i=0; i<frnd.length; i++){
    console.log(frnd[i]);
}

//for of
let frnd = ["bablu","sonu","monu","anuj"];
for (let i of frnd){
    console.log(i);
}


//Array method

//push
let food = ["Mango","Banana","Strawberry","Orange"];
food.push("Cherry");
console.log(food);

//pop
let food = ["Potato","Carrots","Onions","Ginger"];
food.pop();
console.log(food); 

//toString
let food = ["Potato","Carrots","Onions","Ginger"];
console.log(food.toString());

//concat
let boys = ["Harsh","Anuj","Partik"];
let girls = ["Vaishnavi","Sanika"];
let common = boys.concat(girls);
console.log(common);

//unshift
let boys = ["Harsh","Anuj","Partik"];
boys.unshift("Paresh");
console.log(boys);

//shift
let vechicles = ["scooter","bike","car"];
vechicles.shift();
console.log(vechicles);

//slice
let vechicles = ["scooter","bike","car","bus","ship"];
console.log(vechicles.slice(0,3));

//splice
//add ele
let num = [1,2,3,4,5,6,7,8,9];
num.splice(3,0,100);
console.log(num);

//delete ele
let num = [1,2,3,4,5,6,7,8,9];
num.splice(3,1);
console.log(num);

//replace ele
let num = [1,2,3,4,5,6,7,8,9];
num.splice(3,1,101);
console.log(num);