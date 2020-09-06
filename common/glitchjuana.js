let glitch;

function setup() {
	createCanvas(10, 10);
	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	loadImage('../assets/juana.jpeg', function(im){
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
	image(glitch.image, 10, 10,10,10)
}
