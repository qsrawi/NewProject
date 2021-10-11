let x=-1;
let lines=document.getElementById("lines");
let header=document.getElementById("header");

function add(){
 x++;
let newh3=document.createElement('h3');
 let newtext=document.createTextNode("Line"+x);
 newh3.appendChild(newtext)
 lines.appendChild(newh3)



}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function remove(){
     x=-1;
     removeAllChildNodes(lines);

    
}