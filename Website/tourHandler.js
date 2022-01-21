const tourImg = document.getElementById('tourImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imgLbl = document.getElementById('imgLbl');

nextImg = 2;
currentImg = nextImg - 1;
prevImg = 0;

function next(){
    if (nextImg < 0 || nextImg > 30){
        console.log("Called image does not exist");
    }
    else if (tourImg.src != "img" + currentImg + ".png"){
        tourImg.src = "img/" + nextImg + ".png";
        nextImg = nextImg + 1;
        currentImg = nextImg - 1;
        prevImg = prevImg + 1;
        imgLbl.textContent = currentImg + "/30";
    }
    else {
        tourImg.src = "img/1.png";
        nextImg = 2;
        currentImg = nextImg - 1;
        prevImg = 0;
        imgLbl.textContent = currentImg + "/30";
    }
}

function prev(){
    if (prevImg < 0 || prevImg > 30){
        console.log("Called image does not exist");
    }
    else if (tourImg.src != "img" + currentImg + ".png"){
        tourImg.src = "img/" + prevImg + ".png";
        nextImg = nextImg - 1;
        currentImg = nextImg - 1;
        prevImg = prevImg - 1;
        imgLbl.textContent = currentImg + "/30";
    }
    else{
        tourImg.src = "img/1.png";
        nextImg = 2;
        currentImg = nextImg - 1;
        prevImg = 0;
        imgLbl.textContent = currentImg + "/30";
    }
}