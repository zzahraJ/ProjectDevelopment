// Video
let video;
let classifier;
let title = "The car guesser";
let caption = "Scan the car here and find out which brand it is.";
// Object om afbeeldingen aan labels te koppelen
let carlogoImages = {};
// Object om labels aan logo's te koppelen
let carLogos = {};

let load = "Which car is it...";

// Laden van het model en de afbeeldingen
function preload() {
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jVcS5ZSNQ/");

  carLogos = {
    // Laad het BMW-logo
    BMW: loadImage("img/bmwLogo.png"),
    // Laad het Mercedes-logo
    Mercedes: loadImage("img/mercedesLogo.png"),
    //laad het audi logo
    Audi: loadImage("img/audiLogo.png"),
    //laad het ferrari logo
    Ferrari: loadImage("img/ferrariLogo.png"),
    //laad het fiat logo
    Fiat: loadImage("img/fiatLogo.png"),
    //laad het jeep logo
    Jeep: loadImage("img/jeepLogo.png"),
    //laad het tesla logo
    Tesla: loadImage("img/teslaLogo.png"),
    //laad het volkswagen logo
    Volkswagen: loadImage("img/volkswagenLogo.png"),
    //laad het porche logo
    Porche: loadImage("img/porcheLogo.png"),
    //laad het toyota logo
    Toyota: loadImage("img/toyotaLogo.png")
  };
}

// Setup van de canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();
  textFont('Lobster');
}

// Classificeren van de video
function classifyVideo() {
  classifier.classify(video, results);
}

// Tekenen van de canvas, de tekst en afbeeldingen 
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

  // Het weergeven van de titel
  textSize(50);
  textFont('Lobster');
  text(title, width / 2, height / 6 - textSizeValue);

  // Het weergeven van de caption
  textSize(textSizeValue);
  textFont('Arial');
  let captionY = height / 6 + textSizeValue + 20;
  text(caption, width / 2, captionY);

  // Het weergeven van de label
  textSize(textSizeValue * 1.5);
  textFont('Arial');
  let loadY = videoY + videoHeight + textSizeValue * 2;
  text(load, width / 2, loadY);

  // Controleer of het label bestaat in het carLogos-object en toon het bijbehorende logo
  if (carLogos[load]) {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(carLogos[load], logoX, logoY, logoSize, logoSize);
  }
}

// Het weergeven van de resultaten van de classificatie 
function results(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  load = result[0].label;
  classifyVideo();
}

// Het aanpassen van de canvas aan de grootte van het scherm
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
