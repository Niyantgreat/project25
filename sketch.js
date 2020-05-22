const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  paper1,ground1;	
var world,boxPosition,dustbinObj;
function preload (){

}
function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	ground1 = Bodies.rectangle(width/2, height-10, width, 10 , {isStatic:true} );
 	World.add(world, ground1);

 	boxPosition=width/2-100
 	boxY=height-50;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxleftSprite.x, boxleftSprite.y, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	 dustbinObj=new dustbin(600,650);
	 dustbinObj.image=loadImage("dustbingreen.png")
 	boxBottomBody = Bodies.rectangle(boxBase.x, boxBase.y, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody,dustbinObj);

 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color("dustbingreen.png");

 	boxRightBody = Bodies.rectangle(boxrightSprite.x , boxrightSprite.y, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	var option1={
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	paper1=Bodies.circle(100, 400, 20, option1)
	World.add(world, paper1);



	// Online Code
	
	//paperObject=new paper(200,450,40);
	//groundObject=new ground(width/2,670,width,20);
	//Create a Ground

Engine.run(engine);


}


function draw() {
	background(0);
Engine.update(engine);
  //rectMode(CENTER);


  fill(255,0,255)
  ellipseMode(RADIUS);
  ellipse(paper1.position.x,paper1.position.y, 20,20);


  //dustbinObj.display();
  //paperObject.display();
  //groundObject.display();


  drawSprites();


}

function keyPressed() {


  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1,paper1.position,{x:55,y:-75});

  	}



	else if (keyCode === LEFT_ARROW) {

		boxleftSprite.x=boxleftSprite.x-20;  
		boxrightSprite.x=boxrightSprite.x-20;
		boxBase.x=boxBase.x-20;
	  translation={x:-20,y:0}
	  Matter.Body.translate(boxRightBody, translation)
	  Matter.Body.translate(boxLeftBody, translation)
	  Matter.Body.translate(boxBase, translation)


	} else if (keyCode === RIGHT_ARROW) {
		boxleftSprite.x=boxleftSprite.x+20;  
		boxrightSprite.x=boxrightSprite.x+20;
		boxBase.x=boxBase.x+20;
		translation={x:20,y:0}
	  Matter.Body.translate(boxRightBody, translation)
	  Matter.Body.translate(boxLeftBody, translation)
	  Matter.Body.translate(boxBase, translation)
	}
  }
