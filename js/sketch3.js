function setup() {
  createCanvas(1280, 720);
  //canvas.position (70,40);
  vid = createVideo('gsg.mp4');
  vid2 = createVideo('gsg.mp4');
  vid.hide();
  vid2.hide();
  vid.loop();
  vid2.loop();
  //canvas.style('z-index','+1');
  //canvas.parent('p5');
  slider = createSlider(0, 1, 0.5, 0.1);
}

function draw() {
  background(250);
  vid.volume(slider.value());
  vid2.volume(0);
  image(vid2, 10, 10);
  filter(INVERT);
  image(vid, 150, 150);
}
