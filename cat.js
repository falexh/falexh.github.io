//Cat object
//Forrest Hellard

function Cat(x,y,m,img)  // for the array of cat pictures
{
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  // this.img = random(cats);
  this.mass = m;

  this.cat = random(cats);

//show the images of the cats
  this.show = function()
  {
    imageMode(CENTER);
    // image(this.cat, x, y, 80, this.m);
    image(this.cat,this.pos.x, this.pos.y, this.mass*30, this.mass*30,);
  }

  this.applyForce = function(force)
  {
    var fc = force.copy();
    fc.div(this.mass);  //divides the force by mass
    this.acc.add(fc);  // adds to acceleration
  }

  this.update = function()
  {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }

  this.edges = function()
  {
    if(this.pos.y > height)
    {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    if(this.pos.x > width)
    {
      this.vel.x *= -1;
      this.pos.x = width;
    }
  }

}
