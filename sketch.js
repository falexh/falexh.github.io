//Forrest Hellard

//use preload to load the images before it sets up
var objects = []; // to hold the Cat objects
let cats = []; // contains all the pictures of cats
function preload()
{
	for (let i = 0; i < 12; i++)
	{// loads array of 12 cat pics
		cats[i] = loadImage('cats/cat' + i + '.png');
	}
}



function setup()
{
	createCanvas(640,340 );
}

function mousePressed()
{
	var c = new Cat(mouseX, mouseY, random(2,5));
	objects.push(c);  //pushes cat objects into objects array
}



function draw()
{
	background(20);
	for (var x = 0; x < objects.length; x++)
	{
		var grav = createVector(0, 1.0 * objects[x].mass)
		objects[x].applyForce(grav);

		objects[x].update();
		objects[x].edges();
		objects[x].show();

	}




}
