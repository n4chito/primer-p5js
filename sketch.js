function setup() {
    createCanvas(630, 800);
    background("#e3fdfd");
    
    strokeWeight(0);
  
    //RECTANGLE FOND
    fill ("#cbf1f5")
    rect(59,142, 512, 512, 10); 
    
    //CARRE1
    fill ("#a6e3e9"); 
    rect(59,142,64,64, 10, 0, 0, 0);
    
    //FORME
    beginShape();
    vertex(59, 270);
    vertex(187, 270);
    vertex(187, 142);
    vertex(315, 142);
    vertex(315, 398);
    vertex(59, 398);
    endShape(CLOSE);
    
    fill ("#71c9ce"); 
  
    //QUAD1
    quad(102, 164, 81, 185, 102, 206, 123, 185); 
    //QUAD2
    quad(146, 188, 105, 229, 146, 270, 187, 229); 
    //QUAD3
    quad(230, 228, 145, 313, 230, 398, 315, 313); 
    //QUAD4
    quad(401, 314, 231, 484, 401, 654, 571, 484); 
    
  }
  
  function draw() {
  }