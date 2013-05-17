
// Game Begins HERE 
window.onload = function() {
	Crafty.init(940, 400);

  Crafty.scene("chapter1", function() {
    var vbox, dialougue;
    var i= 0;
		
    var speakNext = function() {

      // Get rid of old text before adding new.
      if (i > 0) {dialogue.destroy();box.destroy();}
      box = Crafty.e("2D, DOM, Color").attr({alpha: 0.6, x: 100, y: 300, w: 760, h: 200}).color("#ffffff");
      dialogue = Crafty.e('2D, DOM, Tween, Text').attr({alpha: 0.0, x: 120, y: 320, w:720}).text(lines[i]).tween({alpha: 1.0}, 25);
      i ++;
    };

    var bg = Crafty.e('2D, DOM, Image, Text, Mouse')
     	.attr({w: Crafty.viewport.width, h: Crafty.viewport.height})
  		.image('img/bg_sketch_05_scaled.png', 'no-repeat');

  	var girl = Crafty.e('2D, DOM, Image, Tween, Mouse')
      .image('img/girlScaled.png', 'no-repeat')
      .attr({alpha: 0.0, x: -100, y: -30})
     	.tween({alpha: 1.0, x: -100, y: -30}, 50)
      .bind('Click', function() {speakNext()});
	});

  var lines = [ "Hi, I'm Eadwyn. This is not my island. I was kidnapped and brought here, along with others to work as a slave.", 
              "I've run away. My old masters live in the villiage there on the hill.",
              "I've been hiding away for days. It's been pretty tough. There's not much to eat around here.",
              "Do you see that smaller group of huts? That's a Christian Monastery. I've thought to go to them for help, but I don't know if I can trust them.",
              "I've found this book, and I think it belongs to them, because it has a cross like the one there.",
              "If you can help me understand the meaning of the words of the book, maybe I will know if I can go to them for help."];

	Crafty.scene('chapter1');
}

