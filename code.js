var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var sophia = createSprite(20, 25, 18, 18);
sophia.shapeColor = "orange";
var cardboard1 = createSprite(97, 150, 100, 20);
cardboard1.shapeColor = "brown";
var cardboard2 = createSprite(200, 200, 100, 20);
cardboard2.shapeColor = "red";
var cardboard3 = createSprite(345, 100, 20, 100);
cardboard3.shapeColor = "blue";
var cardboard4 = createSprite(205, 250, 100, 20);
cardboard4.shapeColor = "yellow";
var cardboard5 = createSprite(380, 200, 20, 100);
cardboard5.shapeColor = "black";
var cardboard6 = createSprite(97, 300, 100, 20);
cardboard6.shapeColor = "green";
var cardboard7 = createSprite(203, 76, 100, 20);
cardboard7.shapeColor = "pink";
var cardboard8 = createSprite(97, 150, 100, 20);
cardboard8.shapeColor = "brown";
var cardboard9 = createSprite(300, 300, 20, 100);
cardboard9.shapeColor = "black";
var cardboard10 = createSprite(150, 350, 20, 60);
cardboard10.shapeColor = "red";
var cardboard11 = createSprite(300, 147, 20, 50);
cardboard11.shapeColor = "blue";
var cardboard12 = createSprite(200, 123, 100, 20);
cardboard12.shapeColor = "brown";
var cardboard13 = createSprite(99, 40, 100, 20);
cardboard13.shapeColor = "brown";
var cardboard14 = createSprite(300, 300, 20, 100);
cardboard14.shapeColor = "brown";
var cardboard15 = createSprite(300, 300, 20, 100);
cardboard15.shapeColor = "brown";
var cardboard16 = createSprite(300, 300, 20, 100);
cardboard16.shapeColor = "brown";
var cardboard17 = createSprite(50, 198, 90, 20);
cardboard17.shapeColor = "black";
var cardboard18 = createSprite(20, 94, 20, 70);
cardboard18.shapeColor = "red";
var cardboard19 = createSprite(350, 300, 20, 50);
cardboard19.shapeColor = "red";
var cardboard20 = createSprite(235, 348, 20, 50);
cardboard20.shapeColor = "red";
var cardboard21 = createSprite(90, 240, 20, 50);
cardboard21.shapeColor = "blue";
var cardboard22 = createSprite(200, 299, 20, 50);
cardboard22.shapeColor = "grey";
var cup = createSprite(390, 390, 20, 20);
function draw() {
  background("white");
  drawSprites();
  sophia.velocityX = 0;
  sophia.velocityY = 0;
  if (keyDown("up")) {
    sophia.velocityX = 0;
    sophia.velocityY = -4;
  }
  if (keyDown("down")) {
    sophia.velocityX = 0;
    sophia.velocityY = 4;
  }
  if (keyWentDown("left")) {
    sophia.velocityX = -4;
    sophia.velocityY = 0;
  }
  if (keyWentDown("right")) {
    sophia.velocityX = 4;
    sophia.velocityY = 0;
  }
  if (sophia.collide(cup)) {
    text("you win", 200, 50);
    textSize(500);
  }
  sophia.bounceOff(cardboard1);
  createEdgeSprites();
  sophia.bounceOff(edges);
  sophia.bounceOff(cardboard2);
  sophia.bounceOff(cardboard3);
  sophia.bounceOff(cardboard4);
  sophia.bounceOff(cardboard5);
  sophia.bounceOff(cardboard6);
  sophia.bounceOff(cardboard7);
  sophia.bounceOff(cardboard8);
  sophia.bounceOff(cardboard9);
  sophia.bounceOff(cardboard10);
  sophia.bounceOff(cardboard11);
  sophia.bounceOff(cardboard12);
  sophia.bounceOff(cardboard13);
  sophia.bounceOff(cardboard14);
  sophia.bounceOff(cardboard15);
  sophia.bounceOff(cardboard16);
  sophia.bounceOff(cardboard17);
  sophia.bounceOff(cardboard18);
  sophia.bounceOff(cardboard19);
  sophia.bounceOff(cardboard20);
  sophia.bounceOff(cardboard21);
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
