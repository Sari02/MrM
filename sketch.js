const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var floor, meeseeks ;
var entrada, salida;
var plat1, plat2, plat3, plat4, plat5, plat6,plat7, plat8, plat9, plat10, plat11, platultima;
var tostadora;

function setup(){
    var canvas = createCanvas(1800,900);
    //engine = Matter.Engine.create();
    engine = Engine.create();
    world = engine.world;

    
    floor = new Floor(900,height,1800,20);

    meeseeks = new Meeseeks(110,120);

    entrada = new Door(140,100,110,150);
    salida = new Door(1740,100,110,150);

    tostadora = new Plataforma(500,100,70,100);

    plat1 = new Plataforma(140,180,140,20) ;
    plat2 = new Plataforma(300,150,40,300);
    plat3 = new Plataforma(200,700,140,20);
    plat4 = new Plataforma(450,715,60,300);
    plat5 = new Plataforma(660,650,140,20);
    plat6 = new Plataforma(880,690,60,350);
    plat7 = new Plataforma(1200,650,600,20);
    plat8 = new Plataforma(1400,750,700,20);
    plat9 = new Plataforma(1750,600,20,320);
    plat10 = new Plataforma(1150,450,140,20);
    plat11 = new Plataforma(1450,300,140,20);

    platultima = new Plataforma(1720,180,150,20) ;
   
    Matter.Runner.run(engine);

}

function draw(){
    background(0);
    //Engine.update(engine);

   // if (keyIsDown("A")){
   //     meeseeks.pos.x = meeseeks.pos.x - 2;
   // }
   // if (keyIsDown("D")){
   //     meeseeks.pos.x = meeseeks.pos.x + 2;
   // }
    



    //entrada.display();
    salida.display();

    meeseeks.display();

    

    tostadora.display();

    plat1.display();
    plat2.display();
    plat3.display();
    plat4.display();
    plat5.display();
    plat6.display();
    plat7.display();
    plat8.display();
    plat9.display();
    plat10.display();
    plat11.display();
    platultima.display();

    floor.display();
    
    //console.log(meeseeks.position.x);

 
}

