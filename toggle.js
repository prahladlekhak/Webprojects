var toggled = true;

var hTag = document.querySelector("h1");
var bodyTag = document.querySelector("body");
var circle = document.getElementById("circle");

document.getElementById("toggle").onclick = function () {
        
    if(!toggled) {
        
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        circle.style.marginLeft = "100px";
        
        toggled = true;
        
    } else {
        
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.style.marginLeft = "1px";
        toggled = false;
    }
    
}