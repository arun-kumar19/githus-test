
const parent=document.getElementById("list")
var submit=document.getElementById("submit")
submit.addEventListener("click",function (){
    var amount=document.getElementById("amount").value
    var description=document.getElementById("description").value
    var category=document.getElementById("category").value

    const element=document.createElement("li")
    const editButton=document.createElement("button");
            editButton.classList="edit"
    const editButtonText=document.createTextNode("edit expense");
    const deleteButton=document.createElement("button");
    deleteButton.classList="delete"
    const deleteButtonText=document.createTextNode("delete expense");
    deleteButton.appendChild(deleteButtonText)
    editButton.appendChild(editButtonText);
    textnode = document.createTextNode(amount+' - '+description+' - '+category+"-");
    element.appendChild(textnode)
    element.appendChild(editButton)
    element.appendChild(deleteButton)
    element.classList.add("listitem")
    parent.appendChild(element)

    const obj={
        'amount':amount,
        'description':description,
        'category':category
    }
    
    const str=JSON.stringify(obj)
    localStorage.setItem(description,str);
    //console.log(element)
});

parent.addEventListener('click',editItem)
parent.addEventListener('click',deleteItem)

function editItem(e){

    if(e.target.classList.contains('edit')){

        var li=e.target.parentElement;
        let data=li.innerText;
        let arr=data.split("-")
        document.getElementById('amount').value=arr[0]
        document.getElementById('description').value=arr[1]
        //console.log(arr[2].trim())
        document.getElementById('category').value=arr[2].trim()
        let description=arr[1].trim()
        //console.log("inside delete item and value is "+description)
        localStorage.removeItem(description)
        parent.removeChild(li)
    }

}

function deleteItem(e){

    if(e.target.classList.contains('delete')){

        var li=e.target.parentElement;
        let data=li.innerText;
        let arr=data.split("-")
        let description=arr[1].trim()
        //console.log(arr[1])
        console.log("inside delete item and value is "+description)
        //document.getElementById('description').value=arr[1]
        //console.log(arr[2].trim())
        //document.getElementById('category').value=arr[2].trim()
      //console.log(arr)  
      localStorage.removeItem(description)
        parent.removeChild(li)
        
    }

}

document.body.onload = function() {
    const len=localStorage.length
const local={...localStorage};
var values=Object.values(local)

for(let i=0;i<len;i++){
var obj=JSON.parse(values[i])

    var amount=obj.amount
    var description=obj.description
    var category=obj.category

    const element=document.createElement("li")
    const editButton=document.createElement("button");
            editButton.classList="edit"
    const editButtonText=document.createTextNode("edit expense");
    const deleteButton=document.createElement("button");
    deleteButton.classList="delete"
    const deleteButtonText=document.createTextNode("delete expense");
    deleteButton.appendChild(deleteButtonText)
    editButton.appendChild(editButtonText);
    litextnode = document.createTextNode(amount+' - '+description+' - '+category+"-");
    element.appendChild(litextnode)
    element.appendChild(editButton)
    element.appendChild(deleteButton)
    element.classList.add("listitem")
    parent.appendChild(element)
}
  }

