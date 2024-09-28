let quadrado = document.getElementById("quadrado");
/*
quadrado.addEventListener("mouseover",function()){
    this.StylePropertyMap.backgroundColor = "red";
}

quadrado.addEventListener("mouseout",function()){
    this.StylePropertyMap.backgroundColor = "blue";
}
*/
quadrado.onmouseover = function () {
    mudacor();
}
quadrado.onmouseout = function () {
    voltacor();
}

function mudacor(){
    quadrado.style[backgroundColor] = "red";
}
function voltacor(){
    quadrado.style[backgroundColor] = "yellow";

}