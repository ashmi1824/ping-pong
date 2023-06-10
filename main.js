function setup(){
    canvas.parent('myCanvas');
    canvas.center();

    video=createCapture(VIDEO);
    video.size(800,400);
    video.hide();

    
   poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose', gotPoses);
    
}
function modelLoaded(){
    console.log("modelLoaded!");
}
function draw(){
    image(video,0,0,800,400);
}