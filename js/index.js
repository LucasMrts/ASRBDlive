var z = new Audio('sounds/tom-1.mp3');
var q = new Audio('sounds/tom-2.mp3');
var s = new Audio('sounds/tom-3.mp3');
var d = new Audio('sounds/tom-4.mp3');
var j = new Audio('sounds/snare.mp3');
var k = new Audio('sounds/crash.mp3');
var l = new Audio('sounds/kick-bass.mp3');

function play(variable) {
  switch (variable) {
    case "z":
      z.play();
      break;

    case "q":
      q.play();
      break;

    case "s":
      s.play();
      break;

    case "d":
      d.play();
      break;

    case "j":
      j.play();
      break;

    case "k":
      k.play();
      break;

    case "l":
      l.play();
      break;

  }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    play(this.classList[0]);
  });
}

document.addEventListener("keydown", function(event) {
  play(event.key);
});
