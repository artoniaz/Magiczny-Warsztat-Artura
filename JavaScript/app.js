document.addEventListener("DOMContentLoaded", function(){

var firstButton = document.querySelector("#firstButton");
var navList = document.querySelector(".navigationList");

    firstButton.addEventListener("mouseover", function(){
    navList.style.display = "block";
});

    navList.addEventListener("mouseleave", function () {
       navList.style.display = "none";
    });

var galleryImg1 = document.querySelector("#imgGallery1");
var galleryImg2 = document.querySelector("#imgGallery2");

var panel1 = document.querySelector("#panel1");
var panel2 = document.querySelector("#panel2");

    galleryImg1.addEventListener("mouseover", function () {
        panel1.style.display = "none";
    });

    galleryImg2.addEventListener("mouseover", function () {
        panel2.style.display = "none";
    });

    galleryImg1.addEventListener("mouseout", function () {
        panel1.style.display = "block";
    });

    galleryImg2.addEventListener("mouseout", function () {
        panel2.style.display = "block";
    });


});