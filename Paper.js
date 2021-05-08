class Paper{
	constructor(x,y,r)
	{
	this.image = loadImage("paper.png");
	 var options = {
        'restitution':0.3,
        'friction':0,
        'density':1.2
    }

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
	
	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			imageMode(CENTER);
           image(this.image, 0, 0, this.width, this.height);
		   this.image.scale = 0.02
            ellipse(0,0,this.r,this.r);
			pop()
	}

}
