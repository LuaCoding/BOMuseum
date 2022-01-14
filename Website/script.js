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
        "image":"img/HSM De Jachtmodellen credit Twycer.jpg"
    },
    {
        "image":"img/vr.jpg"
    },
    {
        "image":"img/wiWillem van de Velde & Zoon.jpeg"
    },
];

function show(index){
    slide.src = sliders[index].image;
}