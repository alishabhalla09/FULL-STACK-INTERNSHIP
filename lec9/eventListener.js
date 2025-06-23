//eventlistener-imp

// const h1=document.querySelector("h1");
// h1.addEventListener("click",(e)=>{
//     h1.classList.toggle("background");
// })

const h1=document.querySelector("h1");
h1.addEventListener("click",(e)=>{
    // console.log(e.target);//return element at which the event occur
    h1.classList.toggle("background");
    console.log("h1 clicked");
})


const input=document.getElementById("textInp");

//event bubling
h1.children[0].addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("span clicked");
    input.value="";
})

// const input=document.getElementById("textInp");

input.addEventListener("change",(e)=>{
    // console.log(input.value);//line no.23 and 24 are same
    console.log(e.target.value);
})