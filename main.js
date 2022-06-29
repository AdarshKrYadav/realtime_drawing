function preload(){}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    classifier=ml5.poseNet(video,modelloaded);
    classifier.on("pose",gotposes);
}
function draw(){
    background("#08D1F9");

}
function modelloaded(){
    console.log("Model has loaded");
}
function gotposes(results){
    if(results.lenght>0){console.log(results);}
}