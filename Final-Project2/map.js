let img;

function setup() {
  createCanvas(720, 400);
  img = loadImage('https://i.pinimg.com/originals/e4/d7/69/e4d769742a76da9dba84a36ca541413f.jpg');
}

function draw() {
  image(img, 100, 100);
}
