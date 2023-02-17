let canvas = document.getElementById("gameCanvas");
let sqsize = 1;
let context = canvas.getContext("2d");
let herox = 270;
let heroy = 390;
let img = new Image();
img.src="platform.png";


function drawMap() {
    context.strokeRect(0, 0, 800, 450);
}
function drawHero() {
    context.drawImage(img, herox * sqsize, heroy * sqsize, sqsize*50, sqsize*50);
}
function moveLeft() {
    herox-=10;
    if (herox<10) {
        herox=100;
    }
    context.clearRect(0, 0, 800, 450);
    drawHero();
    drawMap();
}

function moveRight() {
    herox+=3;
    if (herox==284) {
        herox=283;
    }
    context.clearRect(0, 0, 800, 450);
    drawHero();
    drawMap();
}
drawHero();
drawMap();
document.onkeypress = function(e) {
    let key = e.key;
    switch(key) {
        case "a": moveLeft(); break;
        case "d": moveRight(); break;
    }
}
console.log(context);