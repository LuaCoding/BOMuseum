const slideshow = document.getElementById('slideshow');
const slide = document.getElementById('slide');


let sliders = [
    {
        "image":"img/amsterdamse-haven_0.jpg"
    },
    {
        "image":"img/scheepsvaartmuseum.jpg"
    },
    {
        "image":"img/header tentoonstellingsruimte_RAZ.jpg"
    },
    {
        "image":"img/vr.jpg"
    },
    {
        "image":"img/architectuur.jpg"
    },
];

function show(index){
    slide.src = sliders[index].image;
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  } 

  show(0);