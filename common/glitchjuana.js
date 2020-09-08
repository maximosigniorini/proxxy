let miGlitch;

function setup() {
  let cnv = createCanvas(300, 300);
  cnv.position(windowWidth-400, 10);
//   if mousePressed ()== true {
//    cnv.position(mouseX,mouseY);}
  imageMode(CENTER);

  miGlitch = new Glitch();
  miGlitch.loadType('jpeg');
  miGlitch.loadQuality(.25);


  loadImage('../assets/juana.jpeg', function(im) {
    miGlitch.loadImage(im);
  });
}

function draw() {
  miGlitch.resetBytes();

  miGlitch.replaceBytes(1, 1);

  if (mouseX > 0 && mouseY > 0 && mouseY < 240) {
    miGlitch.randomBytes(4);
  }

  miGlitch.buildImage();
  image(miGlitch.image, width / 2, height / 2, width, height)
}
