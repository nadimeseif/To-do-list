var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.createElement("li");



// Loop through the NodeList object.

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    li.className += "li-s";
    input.value = "";  
     var buttondel = document.createElement("div");

     li.appendChild(buttondel);
     buttondel.classList.toggle("del");
     buttondel.onclick=delete_row;
     buttondel.style.width="20px";
     buttondel.style.height="20px";

    var list_items = document.querySelectorAll('li');

    for (var i = 0; i < list_items.length; i++) {
        list_items[i].addEventListener("click", toggle);
        if(document.getElementsByClassName === "done"){
            list_items[i].addEventListener("click", untoggle);
        } 
    }
}


function addListAfterClick(){
        if(inputLength() != 0){
            createListElement()       
        }else{
            alert("Please Enter an Item.");
        }
}


function addListAfterKeyPress(event){    
    if (event.key === 'Enter'){
        if(inputLength() > 0){
            createListElement()       
        }else{
            alert("Please Enter an Item.");
        }
    }
}



function delete_row(e)
{
    e.target.parentNode.remove();
}

function toggle(){
    this.classList.toggle("done");
    console.log("done");

}

function untoggle(){
    this.classList.toggle("undone");
}

button.addEventListener("click",addListAfterClick )

input.addEventListener("keypress", addListAfterKeyPress)
