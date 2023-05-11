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
    classifyVideo();
}

function classifyVideo() {
    classifier.classify(video, results);
}

function draw() {
    image(video, 0, 0);
}

function results(error, result) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(result);
}