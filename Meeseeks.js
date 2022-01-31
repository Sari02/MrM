class Meeseeks {
    constructor(x, y) {
      var options = {
        //'density':1.0,
        'friction': 0.5,
        //'restitution': 0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 100, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;

      //A
      if (keyIsDown(65)){
          pos.x = pos.x - 1;
          
       }
      //D
      if (keyIsDown(68)){
          pos.x = pos.x + 1;
      }

      //W
      if (keyIsDown(87)){
          pos.y = pos.y - 1;
      }

      //S
      if (keyIsDown(83)){
          pos.y = pos.y + 1;
      }


      //var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  