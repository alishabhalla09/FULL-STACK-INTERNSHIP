

// setTimeout(() => {
//     console.log("this comes after2s");
// }, 2000);//runsthe callback function after 2000ms(2src).

// const { reject } = require("async");

// const callBack=()=>{
//     console.log("this is outer callback function");
// }

// setTimeout(callBack,1000);//runs the callback function after 1000ms(1sec).

// const id=setInterval(()=>{//id->konse set interval ko rokna hai uski id 
//     console.log("this function is running every 3s")
// },3000);
// // clearInterval(id)

// setTimeout(()=>{
//     clearInterval(id);
// },3000*4)

//promise
let b=10;
const myPromise=new Promise((resolve,reject)=>{
    let num=Math.random()*10
    if(num<5){
        resolve(num)
    }
    else{
        reject(num)
    }
})
// console.log(myPromise)
myPromise.then((data)=>{
    console.log("promise resolve",data);
}).catch((error)=>{
    console.log("promise rejected",error);
});
console.log(b);

const newMyPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("this is a promise which is resolved after 2s");
        resolve();
    },2000)
})
newMyPromise.then(()=>{
    console.log("promise resolved");
})
console.log(newMyPromise);


const chainPromise=new Promise((resolve,reject)=>{
    let num=Math.random()*100
    if(num<50){
        resolve(num)
    }
    else{
        reject(num)
    }
})
chainPromise.then((data)=>{
    if(data<25){
        return `num is less than 25 ${data}`
    }else{
        return `num is greater than 25 ${data}`
    }
}).then((data)=>{
    console.log(dta);
}).catch(()=>{
    console.log("object")
})

//async functions
let a=10;


async function fun() {
    console.log("async function");
}
let result;
const arrowFun=async()=>{
    console.log("async arow function");
    // let data=await //some api call
    //  let res=await fetch("https://randomuser.me/api/")
    // result=await res.json();
    let res=await axios.get("https://randomuser.me/api/")//data leke aana hai tab get
    result=res.data;
    console.log(result);
    console.log("async arrrow function end");
}

fun();
arrowFun();
console.log(result);
console.log(a);

