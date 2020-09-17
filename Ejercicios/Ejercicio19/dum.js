$(document).ready(function () {
  var sounds = [
    "./sounds/crash.mp3",
    "./sounds/kick-bass.mp3",
    "./sounds/snare.mp3",
    "./sounds/tom-4.mp3",
    "./sounds/tom-3.mp3",
    "./sounds/tom-2.mp3",
    "./sounds/tom-1.mp3",
  ];
  $("#7").on("click", function () {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", sounds[0]);
    this.appendChild(audioElement);
    audioElement.play();
    // audioElement.remove();
  });
  $("#6").on("click", function () {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", sounds[1]);
    this.appendChild(audioElement);
    audioElement.play();
  });
  $("#5").on("click", function () {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", sounds[2]);
    this.appendChild(audioElement);
    audioElement.play();
  });
  $("#4").on("click", function () {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", sounds[3]);
    this.appendChild(audioElement);
    audioElement.play();
  });
  $("#3").on("click", function () {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", sounds[4]);
    this.appendChild(audioElement);
    audioElement.play();
  });
  $("#2").on("click", function () {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", sounds[5]);
    this.appendChild(audioElement);
    audioElement.play();
  });
  $("#1").on("click", function () {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", sounds[6]);
    this.appendChild(audioElement);
    audioElement.play();
  });

  $("html").keyup(function (e) {
    if (e.keyCode == 75) {
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", sounds[0]);
      this.appendChild(audioElement);
      audioElement.play();
    }
  });
  $("html").keyup(function (e) {
    if (e.keyCode == 76) {
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", sounds[1]);
      this.appendChild(audioElement);
      audioElement.play();
    }
  });
  $("html").keyup(function (e) {
    if (e.keyCode == 74) {
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", sounds[2]);
      this.appendChild(audioElement);
      audioElement.play();
    }
  });
  $("html").keyup(function (e) {
    if (e.keyCode == 70) {
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", sounds[3]);
      this.appendChild(audioElement);
      audioElement.play();
    }
  });
  $("html").keyup(function (e) {
    if (e.keyCode == 68) {
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", sounds[4]);
      this.appendChild(audioElement);
      audioElement.play();
    }
  });
  $("html").keyup(function (e) {
    if (e.keyCode == 83) {
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", sounds[5]);
      this.appendChild(audioElement);
      audioElement.play();
    }
  });
  $("html").keyup(function (e) {
    if (e.keyCode == 65) {
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", sounds[6]);
      this.appendChild(audioElement);
      audioElement.play();
    }
  });
});

function selectSong(selected) {
  return audioElement;
}
