var button = document.getElementById("btn");
var input = document.getElementById("txt");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');
var del = document.getElementsByClassName("del");

function create_list () {
    var li = document.createElement("li");
    var del_btn = document.createElement("button");    
    var a_txt = document.createTextNode(input.value);
    del_btn.classList.add("del");
    del_btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(a_txt);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(del_btn);
    ul.appendChild(li);
    input.value = "";
    toggleEvent();
    deleteEvent();
}

function addtextafterclick() {
    if (input.value.length > 0) {
        create_list();
    }
}

function addtextafterenter(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        create_list();
    }
}

function assignClass() {
    this.classList.toggle("done");
}

function toggleEvent(){
	for( i=0; i<li.length; i++){
	    li[i].addEventListener('click', assignClass);
	}
}

function removeItem () {
    for(var i=0; i<li.length; i++){
		this.parentNode.remove();
	}
}

function deleteEvent(){
    for( i=0; i<li.length; i++){
        del[i].addEventListener('click', removeItem)
    }
}

button.addEventListener("click", addtextafterclick);
input.addEventListener("keypress", addtextafterenter);

toggleEvent();
deleteEvent();