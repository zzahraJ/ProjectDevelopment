// Video
let video;

function setup() {
    createCanvas(640, 520);
    // Create the video
    video = createCapture(VIDEO);
    video.hide();
    // classifyVideo();
}

function draw() {
    // Draw the video
    image(video, 0, 0);
}

