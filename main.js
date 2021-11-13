function setup() {
    video = createCapture(VIDEO);
    video.size(150, 150);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
}

function modelLoaded() {
    console.log('poseNet is Initialized!')
}

function gotPoses() {
    if(result.length > 0)
    {
        console.log(result);
    }
}