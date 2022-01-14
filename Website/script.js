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