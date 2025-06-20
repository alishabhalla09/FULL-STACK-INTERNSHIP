//Q:-
let menu=[
    "roti","rice","eggrice","paneer","dal","egg-curry","chicken","chicken rice","matar paneer","dal-makhni",
]

//filter out veg and non-veg items.

let nonVeg = menu.filter((item) =>{
    return (item.includes("egg") || item.includes("chicken"))
})
let veg=menu.filter((item)=>{
    return !(item.includes("egg") || item.includes("chicken"))
});
console.log("non-veg",nonVeg);
console.log("veg",veg);


//Q:-
let products = [
  {
    name: "product 1 name",
    category: "wearable",
    color: ["red", "white"]
  },
  {
    name: "product 2 name",
    category: "playable",
    color: ["black", "silver"]
  },
  {
    name: "product 3 name",
    category: "wearable",
    color: ["blue", "white"]
  },
  {
    name: "product 4 name",
    category: "playable",
    color: ["white", "gray"]
  },
  {
    name: "product 5 name",
    category: "playable",
    color: ["gold", "black"]
  },
  {
    name: "product 6 name",
    category: "wearable",
    color: ["orange", "black"]
  },
  {
    name: "product 7 name",
    category: "wearable",
    color: ["purple", "pink"]
}
];
//filter out all the products which are white and wearable
let wearable=products.filter((product)=>{
    return (product.color.includes("white") && product.category=="wearable");
})

console.log(wearable);




//Q:-
new Promise((resolve)=>{
    resolve(5);
})
.then((num)=>{
    console.log("first",num);
    
})