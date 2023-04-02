[33mcommit 5769f43ae5176a728b1b1fc37c3f3a13d5cbf447[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: arun-kumar19 <arunmaurya1177@gmail.com>
Date:   Sun Apr 2 11:26:25 2023 +0530

    dom project

[1mdiff --git a/dom.js b/dom.js[m
[1mnew file mode 100644[m
[1mindex 0000000..ab3e446[m
[1m--- /dev/null[m
[1m+++ b/dom.js[m
[36m@@ -0,0 +1,25 @@[m
[32m+[m[32mconst title=document.title;[m
[32m+[m[32mdocument.title="New Title"[m
[32m+[m[32m//console.log(title)[m
[32m+[m[32mconst heading=document.getElementsByTagName("h1")[m
[32m+[m[32m//heading[0].innerText="New Heading1"[m
[32m+[m[32mconst header=document.getElementById("main-header");[m
[32m+[m[32mheader.className+=" border border-dark";[m
[32m+[m[32m//console.log(document.getElementsByTagName("h1").value)[m
[32m+[m[32mdocument.getElementById("input").value="Enter item name"[m
[32m+[m[32m//console.log(document.getElementById("input").value)[m
[32m+[m[32mvar items=document.querySelector(".list-group");[m
[32m+[m[32m//console.log("first child element="+items.firstElementChild.textContent)[m
[32m+[m
[32m+[m[32mfor(var i=0; i<items.childElementCount;i++){[m
[32m+[m
[32m+[m[32m    if(i % 2==0)[m
[32m+[m[32m        items.children[i].setAttribute("style","color:red");[m
[32m+[m[32m    else[m
[32m+[m[32m        items.children[i].setAttribute("style","color:blue");[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mconsole.log(document.querySelectorAll("input")[1].name)[m
[32m+[m[32mdocument.getElementById("title").style.fontWeight="bold"[m
[32m+[m[32mdocument.getElementById("title").style.color="green"[m
[32m+[m[32mdocument.getElementsByTagName("span")[0].style.display="none";[m
\ No newline at end of file[m
[1mdiff --git a/index.html b/index.html[m
[1mnew file mode 100644[m
[1mindex 0000000..a8a716a[m
[1m--- /dev/null[m
[1m+++ b/index.html[m
[36m@@ -0,0 +1,35 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m<head>[m
[32m+[m[32m    <meta charset="UTF-8">[m
[32m+[m[32m    <meta http-equiv="X-UA-Compatible" content="IE=edge">[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[32m+[m[32m        <title>Title is Item Lister </title>[m
[32m+[m[32m        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">[m
[32m+[m[32m        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>[m
[32m+[m[32m</head>[m
[32m+[m[32m<body>[m
[32m+[m[32m   <header id="main-header" class="bg-success text-white p-4 mb-3">[m
[32m+[m[32m    <div class="container">[m
[32m+[m[32m        <h1 id="header-title">Item Lister <span style="display:yes">123</span></h1>[m
[32m+[m[32m    </div>[m
[32m+[m[32m   </header>[m
[32m+[m[32m            <div class="container">[m
[32m+[m[32m                <div id="main" class="card card-body">[m
[32m+[m[32m                    <h2 id="title">Add Item</h2>[m
[32m+[m[32m                    <form action="" class="form-inline mb-3">[m
[32m+[m[32m                    <input type="text" name="input" id="input" value="enter item" class="form-control mr-2">[m
[32m+[m[32m                    <input type="submit" class="btn btn-dark" name="submit button" value="submit">[m
[32m+[m[32m                    </form>[m
[32m+[m[32m                    <h2 class="title" >Item</h2>[m
[32m+[m[32m                    <ul id="item" class="list-group">[m
[32m+[m[32m                        <li class="list-group-item">item 1</li>[m
[32m+[m[32m                        <li class="list-group-item">item 2</li>[m
[32m+[m[32m                        <li class="list-group-item">item 3</li>[m
[32m+[m[32m                        <li class="list-group-item">item 4</li>[m
[32m+[m[32m                    </ul>[m
[32m+[m[32m                </div>[m
[32m+[m[32m            </div>[m
[32m+[m[32m   <script src="dom.js"></script>[m
[32m+[m[32m</body>[m
[32m+[m[32m</html>[m
\ No newline at end of file[m
