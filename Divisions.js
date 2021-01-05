class Divisions{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
          

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        for(var k=0;k <=this.width; k=k + 80){
            divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
        }
        for (var k=0;k< divisions.length;k++){
            divisions[k].display();
        }
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };