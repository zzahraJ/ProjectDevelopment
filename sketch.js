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
  createCanvas(windowWidth, windowHeight); // Pas de grootte van het canvas aan aan het browservenster
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
    let videoWidth = video.width / 2;
    let videoHeight = video.height / 2;
    image(video, width / 2 - videoWidth / 2, height / 2 - videoHeight / 2, videoWidth, videoHeight);
  
    fill(255);
    let textSizeValue = 20;
    textSize(textSizeValue);
    textAlign(CENTER, TOP);
  
    // Weergave van de titel
    textSize(40); // Pas de tekstgrootte van de titel aan
    text(title, width / 2, height / 4 - textSizeValue); // Verplaats de titel iets naar boven
  
    // Weergave van de tekst
    textSize(textSizeValue); // Pas de tekstgrootte van de tekst aan
    text(caption, width / 2, height / 4 + textSizeValue); // Verplaats de tekst iets naar boven
  
    // Weergave van de laadtekst
    textSize(textSizeValue * 1.5); // Pas de tekstgrootte van de laadtekst aan
    text(load, width / 2, height / 2 + videoHeight / 2 + textSizeValue);
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
  resizeCanvas(windowWidth, windowHeight); // Pas de grootte van het canvas aan aan het browservenster
}
