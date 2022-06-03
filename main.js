noseX=0;
noseY=0;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
difference=0;
function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(600, 170);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
shape = document.getElementById("shape_dropdown").value;
console.log(shape);
background('#3cc7b2');
fill(144, 070, 132);
stroke(057, 053, 042);
if(shape == "square"){
square(noseX, noseY, difference);
document.getElementById("square_side").innerHTML="The width and height of a square will be = "+ difference+ "px";
}
else if(shape == "triangle"){
triangle(noseX, noseY, leftWristX, leftWristY, rightWristX, rightWristY);
}
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = "+noseX + " noseY = "+ noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristY=results[0].pose.rightWrist.y;
    difference = floor(leftWristX - rightWristX);
    console.log("left wrist x = "+ leftWristX + " right wrist x = "+rightWristX);
}
}