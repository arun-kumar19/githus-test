/* const title=document.title;
document.title="New Title"
//console.log(title)
const heading=document.getElementsByTagName("h1")
//heading[0].innerText="New Heading1"
const header=document.getElementById("main-header");
header.className+=" border border-dark";
//console.log(document.getElementsByTagName("h1").value)
document.getElementById("input").value="Enter item name"
//console.log(document.getElementById("input").value)
var items=document.querySelector(".list-group");
//console.log("first child element="+items.firstElementChild.textContent)

for(var i=0; i<items.childElementCount;i++){

    items.style.fontWeight='bold';

    if(i % 2==0)
        items.children[i].setAttribute("style","color:red");
    else
        items.children[i].setAttribute("style","color:blue");
} */
/* 
console.log(document.querySelectorAll("input")[1].name)
document.getElementById("title").style.fontWeight="bold"
document.getElementById("title").style.color="green"
document.getElementsByTagName("span")[0].style.display="none";

console.log(document.getElementsByName("input")[0].name);
console.log(document.getElementById("header-title").innerText); */

/* const list=document.getElementsByClassName("list-group-item")

for(var i=0;i<list.length;i++){
    list[i].style.backgroundColor="#ccc"
} */

const li=document.getElementsByTagName("li")


for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor="#ccc"
}


