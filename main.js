noseX = 0;
noseY = 0;
function preload(){
Image_draw = loadImage('Mustache.png');
}

function setup(){
canvas = createCanvas(300, 300)
canvas.position(615, 200)

video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

Posenet = ml5.poseNet(video, modelLoaded());
Posenet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet has been initialized');
}

function gotPoses(results){
if (results.length > 0){
 noseX = results[0].pose.nose.x;
 noseY = results[0].pose.nose.y;
 console.log('X value is ' + noseX + ' Y value is ' + noseY);
}
}

function draw(){

image(video, 0 , 0 , 300, 300);
image(Image_draw, noseX - 20, noseY, 40, 20);
}

function take_snapshot(){
save('mustacheFlter.png');
}
