// Video
let video;
let classifier;
let title = "The car guesser";
let caption = "Scan the car here and find out which brand it is.";
let carlogoImages = {}; // Object om afbeeldingen aan labels te koppelen

let carLogos = {}; // Object om labels aan logo's te koppelen

let load = "Which car is it...";

// Load the model and images
function preload() {
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jVcS5ZSNQ/");
  
  carLogos = {
    BMW: loadImage("img/bmwLogo.png"), // Laad het BMW-logo
    Mercedes: loadImage("img/mercedesLogo.png"), // Laad het Mercedes-logo
    Audi: loadImage("img/audiLogo.png"),  //laad het audi logo
    Ferrari: loadImage("img/ferrariLogo.png"), //laad het ferrari logo
    Fiat: loadImage("img/fiatLogo.png"), //laad het fiat logo
    Jeep: loadImage("img/jeepLogo.png"), //laad het jeep logo
    Tesla: loadImage("img/teslaLogo.png"), //laad het tesla logo
    Volkswagen: loadImage("img/volkswagenLogo.png"), //laad het volkswagen logo
    Porche: loadImage("img/porcheLogo.png"), //laad het porche logo
    Toyota: loadImage("img/toyotaLogo.png") //laad het toyota logo
  };
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
  let videoX = width / 2 - videoWidth / 2;
  let videoY = height / 2 - videoHeight / 2;
  image(video, videoX, videoY, videoWidth, videoHeight);

  fill(0);
  let textSizeValue = 20;
  textSize(textSizeValue);
  textAlign(CENTER, TOP);

  // Display the title
  textSize(50);
  textFont('Lobster');
  text(title, width / 2, height / 6 - textSizeValue);

  // Display the caption
  textSize(textSizeValue);
  textFont('Arial');
  let captionY = height / 6 + textSizeValue + 20;
  text(caption, width / 2, captionY);

  // Display the load text
  textSize(textSizeValue * 1.5);
  textFont('Arial');
  let loadY = videoY + videoHeight + textSizeValue * 2;
  text(load, width / 2, loadY);

  // Check if the label exists in the carLogos object and display the corresponding logo
  if (carLogos[load]) {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(carLogos[load], logoX, logoY, logoSize, logoSize);
  }
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
