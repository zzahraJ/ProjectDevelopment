// Video
let video;
let classifier;
let title = "The car guesser";
let caption = "Scan the car here and find out which brand it is.";
let carlogoImages = {}; // Object om afbeeldingen aan labels te koppelen

let bmwLogo; // Variabele voor het BMW-logo
let mercedesLogo; // Variabele voor het Mercedes-logo
let audiLogo;//variabele voor the audi logo
let ferrariLogo;//variabele voor the ferrari logo
let fiatLogo;//variabele voor the fiat logo
let jeepLogo;//variabele voor the jeep logo
let teslaLogo;//variabele voor the tesla logo
let volkswagenLogo;//variabele voor the volkswagen logo
let porcheLogo;//variabele voor the porche logo
let toyotaLogo;//variabele voor the toyota logo

let load = "Which car is it...";

// Load the model
function preload() {
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jVcS5ZSNQ/");
  
  bmwLogo = loadImage("img/bmw.png"); // Laad het BMW-logo
  mercedesLogo = loadImage("img/mercedes.png"); // Laad het Mercedes-logo
  audiLogo = loadImage("img/audi.png");  //laad het audi logo
  ferrariLogo = loadImage("img/ferrari.png"); //laad het ferrari logo
  fiatLogo = loadImage("img/fiat.png"); //laad het fiat logo
  jeepLogo = loadImage("img/jeep.png"); //laad het jeep logo
  teslaLogo = loadImage("img/tesla.png"); //laad het tesla logo
  volkswagenLogo = loadImage("img/volkswagen.png"); //laad het volkswagen logo
  porcheLogo = loadImage("img/porche.png"); //laad het porche logo
  toyotaLogo = loadImage("img/toyota.png"); //laad het toyota logo
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

  // Check if the label is "BMW" and display the logo
  if (load === "BMW") {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(bmwLogo, logoX, logoY, logoSize, logoSize);
  }

  // Check if the label is "Mercedes" and display the logo
  if (load === "Mercedes") {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(mercedesLogo, logoX, logoY, logoSize, logoSize);
  }

  if (load === "Audi") {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(audiLogo, logoX, logoY, logoSize, logoSize);
  }

  if (load === "Ferrari") {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(ferrariLogo, logoX, logoY, logoSize, logoSize);
  }

  if (load === "Fiat") {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(fiatLogo, logoX, logoY, logoSize, logoSize);
  }

  if (load === "Jeep") {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(jeepLogo, logoX, logoY, logoSize, logoSize);
  }

  if (load === "Tesla") {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(teslaLogo, logoX, logoY, logoSize, logoSize);
  }

  if (load === "Volkswagen") {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(volkswagenLogo, logoX, logoY, logoSize, logoSize);
  }

  if (load === "Porche") {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(porcheLogo, logoX, logoY, logoSize, logoSize);
  }

  if (load === "Toyota") {
    let logoSize = 100;
    let logoX = videoX + videoWidth / 2 - logoSize / 2;
    let logoY = loadY + textSizeValue * 2;
    image(toyotaLogo, logoX, logoY, logoSize, logoSize);
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
