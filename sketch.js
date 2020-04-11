const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.bodies;

// remember to create an array of boxes.

var engine,world;
var boxes = [];
var gSlider;

 
function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

   

}
 
function mousePressed() {
    if (mouseY < 334) {
        // Every time a mouse press occures create a new box.
        boxes.push(new Box(mouseX, mouseY, random(20, 70), random(10, 50)));
    }
  }

 
function draw() {
     background("grey");
    
     // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();

    world.gravity.y = fVal;

    Engine.update(engine);
   

    fill("lightblue");
    rect(0,320,400,15);

    // Use a for loop to show all the boxes
        for (var i = 0; i < boxes.length; i++) {
              boxes[i].display();  
        }


      noStroke();
      fill('pink');
      strokeWeight(5);
      
      

      textSize(20);
      text("Gravity: " + fVal, 60, 360);
  }
 

 