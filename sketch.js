var canvs;
var h1;

function setup() {
  canvs=createCanvas(200,200);
    canvs.position(400,500);
    h1=createElement('h1','aajajajajaj');
}

function mousePressed(){
    h1.html("现在我要展示我最喜欢的数字");
    createP("我最喜欢的数字是"+random(0,10));
    createP("QAQ");
}
function draw() {
    stroke(235,122,119);
    line(0,0,1020,1080);
    Fill(232,48,21);
    ellipse(600,400);
}
