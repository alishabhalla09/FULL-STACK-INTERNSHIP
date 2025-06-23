// const allParagraphs=document.getElementsByTagName("p")
// console.log(allParagraphs);
// console.log(allParagraphs[1]);

// const classElements=document.getElementsByClassName("para")
// console.log(classElements);

// const singleElement=document.getElementById("head2");
// console.log(singleElement);

// const elementsByQuery=document.querySelector("p");
// console.log(elementsByQuery);

// const eleByQuery=document.querySelector(".para2");
// console.log(eleByQuery);

// const elByQuery=document.querySelector("#head2");
// console.log(elByQuery);

// const elemByQuery=document.querySelectorAll("#head2");
// console.log(elemByQuery);

const container=document.getElementById("container");
// console.log(container.innerText);2
// console.log(container.textContent);
// console.log(container.innerHTML);
// // container.innerText="this is changed by <h1>JS</h1>."
// // container.innerHTML="this is changed by <h1>JS</h1>."


// console.log(container.id,container.className);
// container.className="background"

// container.setAttribute("id","containerByJs");
// console.log(container.id);

// elementsByQuery.classList.add("cl5");
// elementsByQuery.classList.remove("cl3");
// elementsByQuery.classList.toggle("cl6");//if class present then remove,if not then add
// console.log(elementsByQuery.classList);

// console.log(container.children);//list of childs i.e->[spam,article,p]
// console.log(container.children[1]);//para
// console.log(container.children[1].nextElementSibling);//article
// console.log(container.children[1].previousElementSibling);//span
// console.log(container.children[1].parentElement);//paara parent i.e."div"
// // console.log(container.childNodes);//we dont use this

// container.children[1].nextElementSibling.innerText="this is changes by JS"//article changed


const val="hello paragraph";
const div=document.createElement("div");//create element
div.className="cl1 cl2";
div.id="dynamic-container";

div.innerHTML=`<p>${val}</p><p>${val} 2</p>`

container.append(div);//push inside div at last +1index
container.prepend(div);//push inside div at 0 index
container.after(div);//lace div after container
container.before(div);//place div before container

console.log(div);