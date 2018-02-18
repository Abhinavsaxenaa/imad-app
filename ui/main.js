console.log('Loaded!');
var element = document.getElementById("text1");
element.innerHTML="bye bye";

var element1 = document.getElementById("img1");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    element1.style.marginLeft=marginLeft+"px";
}
element1.onclick=function() {
    var time = setInterval(moveRight,100);
};