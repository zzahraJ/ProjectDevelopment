// Video
let video;

// Load the model
function preload() {
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jVcS5ZSNQ/");
}

function setup() {
    createCanvas(640, 520);
    // Create the video
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    // Draw the video
    image(video, 0, 0);
}
