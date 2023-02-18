let canvas = document.getElementById("gameCanvas");
let sqsize = 1;
let context = canvas.getContext("2d");
let herox = 350;
let heroy = 680;
let ballX = 450;
let ballY = 400;
let ballDX = 5;
let ballDY = 5;
let img = new Image();
img.src="platformaa.png";
let balll = new Image();
balll.src="ball.png";
let i, j;
let blocks = new Array(180);
for(let i = 0; i < blocks.length; i++){
    blocks[i] = true;
}


function drawMap() {
    context.strokeRect(0, 0, 1000, 700);
}

function drawHero() {
    context.drawImage(img, herox * sqsize, heroy * sqsize, sqsize*250, sqsize*250);
}

function drawBlocks() {
    let a = 0;
    for (i=0; i<=1000; i+=50) {
        for (j=0; j<=250; j+=50) {
        if(blocks[a]){
            context.strokeRect(i, j, 50, 50);
        }
            a++;
        }
    }
}

function ball() {
    context.clearRect(0, 0, 1000, 700);
    drawBlocks();
    drawHero();
    drawMap();
    context.drawImage(balll, ballX, ballY, 20, 20);
    ballY+=ballDY;
    ballX+=ballDX;
    if(ballY==heroy-20 && ballX>herox+200 && ballX<herox+250 ) {
        console.log(ballY);
        ballDY*=-1;
        ballDX+=4;
    }
    if(ballY==heroy-20 && ballX>herox && ballX<herox+50 ) {
        console.log(ballY);
        ballDY*=-1;
        ballDX-=4;
    }
    if(ballY==heroy-20 && ballX>herox+50 && ballX<herox+100 ) {
        console.log(ballY);
        ballDY*=-1;
        ballDX-=2;
    }
    if(ballY==heroy-20 && ballX>herox+150 && ballX<herox+200 ) {
        console.log(ballY);
        ballDY*=-1;
        ballDX+=2;
    }
    if(ballY==heroy-20 && ballX>herox+100 && ballX<herox+150 ) {
        console.log(ballY);
        ballDY*=-1;
    }
    if(ballX>=980 || ballX<=0) {
        ballDX*=-1;
    }
    if (ballY==720) {
        alert("gubish");
    }
    hitbrick(300);
}

  setInterval(ball, 20);

  function hitbrick(blockY) {
    if (ballY<=blockY) {
        let rmvblck = 6*Math.floor(ballX/50)+Math.floor(ballY/50);
        if(blocks[rmvblck-1] == false) {
            hitbrick(blockY-50);
        }
        else {
            ballDY*=-1;
            for(let i = 0; i < blocks.length; i++){
                if(i === rmvblck-1)blocks[i] = false;
                drawBlocks();
            }
        }
    
    }
  }
  setInterval(hitbrick, 50);

document.addEventListener('mousemove', function(g){
    let x = g.clientX;
    if (x>=125 && x<=875) {
    herox = x-125;
    }
})



ball();
drawBlocks();
drawHero();
drawMap();

console.log(context);