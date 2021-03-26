const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;

 var engine,world;
 var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
 var sling1,sling2,sling3,sling4,sling5;

 function setup(){
    createCanvas(windowWidth/2,windowHeight/2);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelratio = pixelDensity();
    let options = {
      mouse: canvasmouse
    };
    mConstraint = Matter.MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
    
    pendulum1 = new Pendulum(width/2-80, height/2, 0);
    sling1 = new Sling(pendulum1.body,{x:width/2-80,y:height/2-100});
    
    pendulum2 = new Pendulum(width/2-40, height/2, 0);
    sling2 = new Sling(pendulum2.body,{x:width/2-40,y:height/2-100});

    pendulum3 = new Pendulum(width/2, height/2, 0);
    sling3 = new Sling(pendulum3.body,{x:width/2,y:height/2-100});

    pendulum4 = new Pendulum(width/2+40, height/2, 0);
    sling4 = new Sling(pendulum4.body,{x:width/2+40,y:height/2-100});

    pendulum5 = new Pendulum(width/2+80, height/2, 0);
    sling5 = new Sling(pendulum5.body,{x:width/2+80,y:height/2-100});
 }

 function draw(){
  background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}