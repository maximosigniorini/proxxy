let glitch;

function setup() {
	createCanvas(400, 400);
	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	loadImage('../assets/max.jepg', function(im){
		glitch.loadImage(im);
	});
}

function draw() {
	glitch.resetBytes();

	glitch.replaceBytes(1,1); // swap all decimal byte 100 for 104
   if(mouseX<(width/2)){
	glitch.randomBytes(0); }
     else{
       glitch.randomBytes(4);}

	glitch.buildImage();
	image(glitch.image, 200, 200,400,400)
}
