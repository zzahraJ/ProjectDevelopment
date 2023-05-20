// Video
let video;
let classifier;
let title = "The car guesser";
let caption = "Scan the car here and find out which brand it is.";

let load = "Which car is it...";

// Load the model
function preload() {
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jVcS5ZSNQ/");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();
  textFont('Lobster');
}

function classifyVideo() {
  classifier.classify(video, results);
}

function draw() {
  background('rgba(204, 229, 255, 1)');
  let videoWidth = video.width / 2;
  let videoHeight = video.height / 2;
  image(video, width / 2 - videoWidth / 2, height / 2 - videoHeight / 2, videoWidth, videoHeight);

  fill(0);
  let textSizeValue = 20;
  textSize(textSizeValue);
  textAlign(CENTER, TOP);

  // Weergave van de titel
  textSize(50);
  textFont('Lobster'); // Pas het lettertype toe op de titel
  text(title, width / 2, height / 6 - textSizeValue); // Pas de y-positie aan

  // Weergave van de tekst
  textSize(textSizeValue);
  textFont('Arial'); // Gebruik een ander lettertype voor de tekst
  let captionY = height / 6 + textSizeValue + 20; // Aangepaste y-positie voor het bijschrift
  text(caption, width / 2, captionY);

  // Weergave van de laadtekst
  textSize(textSizeValue * 1.5);
  textFont('Arial'); // Gebruik een ander lettertype voor de laadtekst
  let loadY = height / 2 + videoHeight / 2 + textSizeValue * 2; // Aangepaste y-positie voor de laadtekst
  text(load, width / 2, loadY);
}


function results(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  load = result[0].label;
  classifyVideo();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
