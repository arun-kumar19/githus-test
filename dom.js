/*const title=document.title;
document.title="New Title"
console.log(title)
const heading=document.getElementsByTagName("h1")
heading[0].innerText="New Heading1"
const header=document.getElementById("main-header");
header.className+=" border border-dark";
console.log(document.getElementsByTagName("h1").value)
document.getElementById("input").value="Enter item name"
console.log(document.getElementById("input").value)
var items=document.querySelector(".list-group");
console.log("first child element="+items.firstElementChild.textContent)

for(var i=0; i<items.childElementCount;i++){

    items.style.fontWeight='bold';

    if(i % 2==0)
        items.children[i].setAttribute("style","color:red");
    else
        items.children[i].setAttribute("style","color:blue");
} 

console.log(document.querySelectorAll("input")[1].name)
document.getElementById("title").style.fontWeight="bold"
document.getElementById("title").style.color="green"
document.getElementsByTagName("span")[0].style.display="none";

console.log(document.getElementsByName("input")[0].name);
console.log(document.getElementById("header-title").innerText); 

const list=document.getElementsByClassName("list-group-item")

for(var i=0;i<list.length;i++){
    list[i].style.backgroundColor="#ccc"
}

const li=document.getElementsByTagName("li")


for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor="#ccc"
} 

 const second=document.querySelector("li:nth-child(2)")
second.style.backgroundColor='green';

const third=document.querySelector("li:nth-child(3)")
third.style.display='none'; 

const list=document.querySelectorAll("li")
list[1].style.color='green';

const odd=document.querySelectorAll("li:nth-child(odd)")
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

const itemList=document.querySelector('#item');
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.lastElementChild)
itemList.lastElementChild.style.color='green';
console.log(itemList.lastChild)
const createLi=document.createElement('li');
createLi.textContent='New Li node';
createLi.setAttribute('class','list-group-item');
console.log(createLi);
document.getElementById('item').appendChild(createLi);
console.log(itemList.firstElementChild)
itemList.firstElementChild.style.backgroundColor='#90EE90';
console.log(itemList.firstChild)
const node=document.querySelector('.list-group-item')
console.log(node.nextSibling);
console.log(node.nextElementSibling);
console.log(node.nextSibling.previousSibling)
console.log(node.nextSibling.previousElementSibling.textContent)
const textnode=document.createTextNode("Hello World!");
const list=document.getElementById('header-title');
list.insertBefore(textnode,list.firstChild)
const item=document.getElementById('item');
const itemnode=document.createTextNode("hello world")

item.insertBefore(itemnode,item.firstChild)
*/
const button=document.getElementById("submit")
const addLi=document.getElementById('item')
const itemlist=document.getElementById('item')
button.addEventListener('click',addItem)
itemlist.addEventListener('click',removeItem)



function addItem(e){
    e.preventDefault()
    var deleteBtn=document.createElement("button");
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode("X"));
    var editBtn=document.createElement("button");
    editBtn.className='btn btn-sm btn-primary float-right editBtn';
    editBtn.appendChild(document.createTextNode("EDIT"))
    const createLi=document.createElement('li')
    createLi.className='list-group-item'
    createLi.style="display: block;"

//createLi.appendChild(editBtn)
createLi.innerText=document.getElementById('input').value+' '+document.getElementById('description').value+' ';
createLi.appendChild(editBtn)
createLi.appendChild(deleteBtn)
//console.log(createLi)
addLi.appendChild(createLi)
}


const search=document.getElementById('filter')
search.addEventListener('input',searchItem)



function searchItem(e){
    e.preventDefault()
    const value=e.target.value.toLowerCase()
    var items=addLi.getElementsByTagName('li')
    
    Array.from(items).forEach(function(item){

        var itemName=item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(value)!=-1){
       item.style.display='block';
       }
       else{
        item.style.display='none';
       }

    });
    
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
        var li=e.target.parentElement;
		console.log(li)
     itemlist.removeChild(li)        
    }
}
}

