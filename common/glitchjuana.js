let miGlitch;

function setup() {
  let cnv = createCanvas(300, 240);
  cnv.position(windowWidth - width, 0)
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
