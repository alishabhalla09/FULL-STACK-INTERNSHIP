// Q:-take an input(number) from user and console whether the number is 0,less than 0,or greater than 0
let num = prompt("enter a number");
console.log(num);

if(num>0){
    console.log("num is greater than 0");
}
else if(num<0){
    console.log("num is less than 0");
}
else{
    console.log("num is equal to 0");
}


//ternary
let ans=num==0?"its a zero":num>0?"its greater than 0":num<0?"its less than 0":"its a word";
console.log(ans);