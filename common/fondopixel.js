var cuadrados = [];

function setup() {
  createCanvas(windowWidth,400);
  cnv.position(windowWidth,400);
  background(0);
  cnv.style('z-index','-1');

   for (var i =0; i<30; i++ ){

     var cuadrado = {
    x : random (width),
    y : random (height),
    r : random (25,55)
     };
     cuadrados.push(cuadrado);
   }

  for (var i=0; i < cuadrados.length; i++){

     fill (255);
     noStroke();
  square(cuadrados[i].x,cuadrados[i].y,cuadrados[i].r);
   }

}
