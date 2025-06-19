//objects
let person={
    name:"alisha",
    age:20,
    profession:"developer",
    skills:["HTML","CSS","JS"]
}
console.log(person);
console.log(person.skills);
console.log(person["profession"]);


//arithematic operators
//+,-,*,/,**
console.log(Math.pow(2,5));//2^5
console.log(2**5);//2^5
console.log(Math.sqrt(4));

//assignment operators

//conditional operators
let a=10;
let b="10"
if(b==a){
    console.log(true);
}

if(a===b){
    console.log(true);
}
if(a===b || b==a){
    console.log(true);
}
if(a===b && b==a){
    console.log(true);
}
if((a===b || a==b) || (a===b && b==a)){
    console.log(true);
}else{
    console.log("false");
}

if((a===b || a==b) || (a===b && b==a) && (a==b)){
    console.log(true);
}else{
    console.log("false");
}

//ternary operator
(a===b?console.log("true statement"):console.log("false"));
let result=(a===b?true:false); 
console.log(result);
let result1=(a==b?"true":"false"); 
console.log(result1);


//chaining
(a==b?(a===b?console.log("a and b both are of same data type"):
console.log("a and b are of different data types")):
console.log("not equal"));

//loops
let arr=[1,2,3,4,5,6,7,8];
//for of loop
for(let element of arr){
    console.log(element);
}
//array ek copy hoti hai uske key index hote hai
for(let key in arr){
    console.log(key);//will print index 
}

let person2={
    name:"alisha bhalla",
    age:20,
    profession:"developer",
    skills:["HTML","CSS","JS"]
}

//for in loop
for(let key in person2){
    console.log(key);
}
for(let key in person2){
    // console.log(key,"->",person2[key]);//not work as key is string
    console.log(key,"->",person2[key]);
}



// while(true){
//     console.log("while loop");
// }