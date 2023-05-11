// Video
let video;
let classifier;
let load = "Which car is it...";

// Load the model
function preload() {
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jVcS5ZSNQ/");
}

function setup() {
    createCanvas(640, 520);
    // Create the video
    video = createCapture(VIDEO);
    video.hide();
    classifyVideo();
}

function classifyVideo() {
    classifier.classify(video, results);
}

function draw() {
    background('rgba(144, 238, 144, 1)');
    image(video, 0, 0);
    fill(255);
    textSize(35);
    textAlign(CENTER, CENTER);
    text(load, width / 2, height - 20);
}

function results(error, result) {
    if (error) {
        console.error(error);
        return;
    }
    load = result[0].label;
    classifyVideo();
}