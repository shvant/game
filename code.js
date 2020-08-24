var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["823faff5-1e16-4ceb-84cd-39e4bda760c7","5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8","251332b3-7aeb-40af-ac0f-1cceb3d1db5b","a8f36482-803d-4474-94a6-b14b425df10b","54c7b714-082d-432f-b761-58b3991e4165","ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7","74a39bcf-bb13-4e10-82fd-16205aa46f49"],"propsByKey":{"823faff5-1e16-4ceb-84cd-39e4bda760c7":{"name":"red","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"El2FKOd54OqBXB0QeV8D3hPJoeWdGhUo","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/823faff5-1e16-4ceb-84cd-39e4bda760c7.png"},"5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8":{"name":"green","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"rAVX.i4kwDC1g.EUfOhFTZCATAaXJHMd","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8.png"},"251332b3-7aeb-40af-ac0f-1cceb3d1db5b":{"name":"blue","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"Oay3r3pdPZAeywb10PDVeOwntsuH7rUQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/251332b3-7aeb-40af-ac0f-1cceb3d1db5b.png"},"a8f36482-803d-4474-94a6-b14b425df10b":{"name":"yellow","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"epLUeJ9UN4yQHFdUm2QmbuTT_GpXqi.H","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/a8f36482-803d-4474-94a6-b14b425df10b.png"},"54c7b714-082d-432f-b761-58b3991e4165":{"name":"arrow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"59fDrGxyWTjYgV3iovb86p1lq9BK_XNG","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/54c7b714-082d-432f-b761-58b3991e4165.png"},"ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7":{"name":"bow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"oqyBbfFSCc.Sp_MLheuu9OYRjk6di2vZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7.png"},"74a39bcf-bb13-4e10-82fd-16205aa46f49":{"name":"sunshine_showers_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var scene = createSprite (0,0,400,400);
scene.setAnimation("sunshine_showers_1");
scene.scale=2;
scene.velocityX=-2;
scene.x=scene.width/2;

var bow = createSprite(360, 200);
bow.setAnimation("bow");


function draw() {
 
    balloon1.lifetime=200;
    balloon2.lifetime=200;
    balloon3.lifetime=200;
    balloon4.lifetime=200;
    
    
      
      var select_balloon = randomNumber(1,4);
      if(World.frameCount % 80 == 0) {
        if (select_balloon ==1) {
      balloon1();
        } else if (select_balloon == 2) {
          balloon2();
        } else if (select_balloon == 3){
          balloon3();
        } else if (select_balloon == 4) {
          balloon4();
        }
        
      
    }
  if(scene.x<0){
  scene.x=scene.width/2;
  }
  
  bow.y=mouseY;
  if (keyWentDown("space")) {
    createArrow();
  }
  
  
   drawSprites();
}
function createArrow() {
  var arrow = createSprite (360,100,5, 10);
  arrow.velocityX = -8;
  arrow.setAnimation("arrow");
  playSound("assets/category_explosion/8bit_explosion.mp3");
  arrow.y=bow.y;
}

function balloon1(){
  var red = createSprite (0,randomNumber(20,370), 10, 10);
  red.setAnimation ("red");
  red.velocityX = 3;
  red.lifetime = 150;
}
function balloon2(){
  var blue = createSprite (0,randomNumber(20,370), 10, 10);
  blue.setAnimation ("blue");
  blue.velocityX = 3;
  blue.lifetime = 150;
}
function balloon3(){
  var green = createSprite (0,randomNumber(20,370), 10, 10);
  green.setAnimation ("green");
  green.velocityX = 3;
  green.lifetime = 150;
}
function balloon4(){
  var yellow = createSprite (0,randomNumber(20,370), 10, 10);
  yellow.setAnimation ("yellow");
  yellow.velocityX = 3;
  yellow.lifetime = 150;
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
