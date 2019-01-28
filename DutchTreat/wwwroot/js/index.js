var x = 0;
var s = "";

console.log("Hellooooo");

var theForm = document.getElementById("theForm");
theForm.hidden = true;

var button = document.getElementById("buyButton");
button.addEventListener("click", function () {
    console.log("Buying An Item")
});


//var button = document.getElementById("buyButton");
//button.addEventListener("mouseover", function () {
//    alert("hovered over button")
//});