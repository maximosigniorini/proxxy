let img;
let imgb;
let filtro = true;
let canvas;

function preload() {
  img = loadImage("../assets/" + Math.floor(Math.random() * 4 + 1) + ".png");
  imgb = img;
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

}

function mouseClicked() {
  if (filtro == true) {
    filtro = false;
  } else {
    filtro = true;
  }
}

function draw() {
  // image(imgb,0,0,width,height);
  image(imgb, 400, 400, 400, 400);
  for (var i = 0; i < 3; i++) {
    copy(img, (int)(random(100)) + (int)(i * 100 * (mouseX / windowWidth)), 0, 100, img.height, (int)(i * 350 * (mouseX / windowWidth)), 0, 100, imgb.height);

    if (filtro == true) {
      filter(INVERT);
    }
  }
}
