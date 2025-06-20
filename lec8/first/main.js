//arrays of object
let arr=[{name:"person1",
    age:18,
},
{name:"person2",
    age:21,
},
{name:"person3",
    age:22,
},
{name:"person4",
    age:6,
},
]

//add a new key "id" & its value to every object

// let person ={
//     name:"person",
//     age:24,
//     skills:["js","react"]
// }

// let newPerson={
//     ...person,
//     profession:"developer",
//     home:"karnal"
// }
// console.log(newPerson);

// let numArr=[1,2,3,4,5,6];
// let newNumArr=[...numArr,7,8,9,10];
// console.log(newNumArr);

arr=arr.map((obj,index)=>{
    return {
        ...obj,
        // name:"changed name",//overwrite old keys value 
        id:index+1,//new key & its value
        salary:(index+1)*100000
    }
})
console.log(arr);

let newArr=arr.filter((person)=>{
    return (person.age >= 18);
})
console.log(newArr);

let salarySum=arr.reduce((accum,person)=>{
    return accum+person.salary
},0)
console.log(salarySum)

//find->same as filter but return first matching element.
let result=arr.find((person)=>{
    return (person.age==18)
})
console.log(result);
let result1=arr.find((person)=>{
    return (person.age<18)
})
console.log(result1);
let result2=arr.find((person)=>{
    return (person.age>18)
})
console.log(result2)


let ar=[1,2,3,4,5,6,7];

let sum=ar.reduce((accum,num)=>{
    return num+accum
},0)
let mul=ar.reduce((accum,num)=>{
    return num*accum
},1)
let div=ar.reduce((accum,num)=>{
    return num/accum
},1)
console.log(sum);
console.log(div);
console.log(mul);

//for each->iteration ke kaam aaata hai kisi bhi aaray ke andar(loop hota hai )use call back function 
ar.forEach(element=>{
    console.log(element);
})