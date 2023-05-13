var i=localStorage.getItem("lastiValue");
const list=document.getElementById("table")
let len=list.children.length;
const mytable=document.getElementById("list")

//creating heading with className

for(let i=0;i<len;i++){
    const node=document.createElement("h3");
    const textnode=document.createTextNode(list.children[i].innerHTML)
    node.className=list.children[i].index;
    node.id=list.children[i].index;
    node.appendChild(textnode)
    mytable.appendChild(node)
}

//creating li under headings
const form=document.getElementById("submit");
form.addEventListener("click",function(e){
    e.preventDefault();
    const price=document.getElementById("price").value
    const item=document.getElementById("item").value;
    const index=list.selectedIndex;
    const value=list[index].value;
    const para=document.createElement("p")
    const ul=document.createElement("ul");
    const li=document.createElement("li");
    if(i==="undefined"){
        li.id=0;    
        localStorage.setItem("lastiValue", 0);
    }
    else{
        i=localStorage.getItem("lastiValue");
        i++;
        li.id=i;
        localStorage.setItem("lastiValue", i);
    }
       
    const btn=document.createElement("button");
    const btnvalue=document.createTextNode("Delete")
    btn.className="delete";
    btn.appendChild(btnvalue);
    li.style="font-family: 'Times New Roman', Times, serif;font-size: medium;font-weight: normal";
    let result = price.concat("-",item,"-",value," ");
    const nodevalue=document.createTextNode(result);
    console.log(nodevalue)
    li.appendChild(nodevalue)
    li.appendChild(btn)
    ul.appendChild(li);  
    para.appendChild(ul)
    
    for(let i=0;i<len;i++){
        
        if(i==index){
           
            document.getElementById(i).appendChild(para);
          
        }
       
        }

   axios({
        method:'post',
        url:'https://crudcrud.com/api/76c5ddd4bdc3435b9ab539a6a541474f/seller',
        data:{
            "id":i,
            "price":price,
            "item":item,
            "category":value,
            "index":index
        }
   }).then(res=>console.log("data inserted scuccessfully")).
   catch(err=>console.log("soemthing went wrong"));
    
})


mytable.addEventListener("click",deleteItem);

function deleteItem(e){
    if(e.target.classList.contains("delete")){
        const child=e.target.parentElement;
        const parent=child.parentElement;
        const id=child.id;
        console.log("li id:",id)
    
    axios.get("https://crudcrud.com/api/76c5ddd4bdc3435b9ab539a6a541474f/seller").then(res=>{
        var datatable=res;
        const tablelen=datatable.data.length;
        for(let i=0;i<tablelen;i++){
            const tbid=datatable.data[i]._id;
        const searchid=datatable.data[i].id;
        console.log("searchid:",searchid," id:",id);
            if(searchid==id){
        const baseurl="https://crudcrud.com/api/76c5ddd4bdc3435b9ab539a6a541474f/seller/";
        const mainurl=baseurl.concat(tbid);
        console.log("url:",mainurl)
        axios.delete(mainurl).then(res=>{
            console.log("deleted susccessfully:",res)      
        parent.removeChild(child);
    }).catch(err=>console.log("soemthing went wrong:",err))
    }
        }
}).catch(err=>console.log("something went wrong:",err))


}

}

window.onload=function (e){
    e.preventDefault()
    let index;
    axios.get("https://crudcrud.com/api/76c5ddd4bdc3435b9ab539a6a541474f/seller").then(res=>{
    
       var datatable=res;
    const tablelen=datatable.data.length;
    
        for(let i=0;i<tablelen;i++){
        const id=datatable.data[i].id;
        const price=datatable.data[i].price;
        const item=datatable.data[i].item;
        const value=datatable.data[i].category;
        const index=datatable.data[i].index;
        console.log(price,item,value,index)

        for(let i=0;i<len;i++){
        
            if(i==index){

                const para=document.createElement("p")
                const ul=document.createElement("ul");
                const li=document.createElement("li");
                const btn=document.createElement("button");
                const btnvalue=document.createTextNode("Delete")
                btn.className="delete";
                btn.appendChild(btnvalue);
                li.id=id;
                li.style="font-family: 'Times New Roman', Times, serif;font-size: medium;font-weight: normal";
                let result = price.concat("-",item,"-",value," ");
                const nodevalue=document.createTextNode(result);
                //console.log(nodevalue)
                li.appendChild(nodevalue)
                li.appendChild(btn)
                ul.appendChild(li);  
                para.appendChild(ul)
               
                document.getElementById(i).appendChild(para);
              
            }
    }
}
 }).catch(res=>{
    console.log(res)
    })
}

