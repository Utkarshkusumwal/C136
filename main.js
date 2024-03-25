diffrence = 0;
rightWrist = 0;
leftWrist = 0;
 
function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(400, 400);
    canvas.position(520, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized!");
}

function draw() {
    background("white");
    textSize(diffrence);
    fill("Royalblue");
    text("Coding", 300, 250)

}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
    rightWrist = results[0].pose.rightWrist.x;
    leftWrist = results[0].pose.leftWrist.x;

    diffrence = floor(leftWrist - rightWrist)

    console.log("leftWristX = " + leftWrist + "rightWristX = " + rightWrist + "diffrence = " + diffrence);
}