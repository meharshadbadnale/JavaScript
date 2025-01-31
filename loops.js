//for loop
for (let i=1; i<=5; i++){
    console.log("Harshad");
}




//while loop
let i = 1;
while(i<=5){
    console.log("Harshad");
    i++;
}


//Do-while loop
let i = 1;
do{
    console.log("Harshad");
    i++;
}while(i<=5)


//for-of loop
let str = "Harshad";

for(let i of str){
    console.log("i=",i);
}

// i= H
// i= a
// i= r
// i= s
// i= h
// i= a
// i= d



//for-in loop
let student = {
    Name: "Harshad",
    Age: 21,
    cgpa:8.73,
    isPass:true,
};
for(let key in student){
    console.log(key,"=",student[key]);
}