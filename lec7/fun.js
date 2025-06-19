//FUNCTIONS
function fun(){
    console.log("object");
    // return 5;
}
// console.log(fun());//undefined
let result=fun()
// // console.log(result);
console.log(fun());

//function can return anything

function fun2(){
    return 10+20;
}
console.log(fun2());

function sum(a,b){
    return a+b;
}
let ans=sum(b=100,a=400);
let ans2=sum(100,400);
console.log(ans);

function fun3(a,b,c){
    return a+b+c;
}
let res1=fun3(1,2);
console.log(res1);//result will be NaN

//default argument
function fun3(a,b,c=0){
    return a+b+c;
}
let res2=fun3(1,2,7);
console.log(res2);  

function fun4(){
    return{
        name:"hello",
        work:"nothing"
    }
}
console.log(fun4());

//ARROW FUNCTIONS//drawback->function upar recall nahi hota
let arrowFun=()=>{
    console.log("this is arrow function");
    return "return from arrow function"
}
let arrowRes=arrowFun();
console.log(arrowRes);

let arrowFun2=(a,b)=>{
    console.log("this is arrow function");
    return a+b;
}

//function overloading-same name ke multiple function each have diff value[overriding type->pehla fun 2nd se override and so on]
let a=10;
console.log(a);
function fun5(a,b){
    return a+b;
}
function fun5(a,b,c){
    return a+b+c;
}
function fun5(a,b,c,d){
    return a+b+c+d;
}
res= fun5(2,3,4,5);
res= fun5(2,3,4);
console.log(res);
    
