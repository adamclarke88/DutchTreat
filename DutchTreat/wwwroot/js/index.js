$(document).ready(function () {

    var x = 0;
    var s = "";

    console.log("Hellooooo");

    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying An Item")
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text());
    })

    var $loginToggle = $("#loginToggle");
    var $popupform = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupform.fadeToggle(1000);
    });

});

//var button = document.getElementById("buyButton");
//button.addEventListener("mouseover", function () {
//    alert("hovered over button")
//});