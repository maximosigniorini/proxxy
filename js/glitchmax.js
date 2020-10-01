let glitch;

function setup() {
	let cnv = createCanvas(300, 300);
  cnv.position(windowWidth * 0.75, 10);
  imageMode(CENTER);

	glitch = new Glitch();
	glitch.loadType('jpeg');
	glitch.loadQuality(.15);
	loadImage('../assets/max.jpeg', function(im){
		glitch.loadImage(im);
	});
}

function draw() {
	glitch.resetBytes();

	glitch.replaceBytes(1,1); // swap all decimal byte 100 for 104

	if (mouseX > 0 && mouseY > 0 && mouseY < 240) {
		glitch.randomBytes(4);
	}

	glitch.buildImage();
	image(glitch.image, width / 2, height / 2, width, height)
}
