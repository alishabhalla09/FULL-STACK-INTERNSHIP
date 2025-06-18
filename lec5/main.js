console.log('Hello World');

// var a = 5;
// let b = "hello";
// // let b = 'world';
// b = 'world';
// const c = true;

// {
//     // only works for let and const
//     console.log(b);
//     let b = 20;
//     console.log(b);
// }

var a = 5;
{
   console.log(a);
    var a = 20;
    console.log(a); 
}
console.log(a);
const arr = [1, 2, 3, 4, 5];
arr[1] = 10; //this is updation
// arr = [6, 7, 8, 9, 10] // this is reassignment and not allowed
console.log(temp);
var temp="this is temp";
console.log(temp);

console.log(ar);
var ar;
// let ar;
console.log(ar);
ar=10;
console.log(ar)


console.log(temp2);//temp2 is in dead temporal zone(unless it is a ssigned a value)
let temp2="this is temp2";
console.log(temp2);

// ARRAY
let arr1=[1,2,3,"item 4",true,null,undefined]
let TwoDarr=[
            [1,2,3],
            [2,5,6]
            ]
          
console.log(TwoDarr);
console.log(TwoDarr[1][2]);//->6
console.log(TwoDarr[0][1]);//->2
console.log(arr1[4]);


//arr methods

//add item at begining
arr=[1,2,3,4,5,6]
// arr.unshift(50)
 arr.unshift(50,44,55);
console.log(arr);

// delete item from begining
arr.shift();
console.log(arr);

let aa=[1,2,3,4,5];
// let subarr=aa.slice(2,4);
let subarr=aa.slice(2);//starts from 2nd index and end at last
console.log(subarr);

// splice-2 workings
console.log(aa);
// delete elements from between the array
aa.splice(3,1);//delete one element at index 3
aa.splice(3,3);//delete 1 element at index 3,three times
console.log(aa);

//add element at index 1 and shift elements forward
//aa.splice(1,0,10);
aa.splice(1,0,10,11,12,13);
console.log(aa);

let strAA =aa.toString();
let stAA =aa.join(" ");
console.log(strAA);
console.log(strAA);





