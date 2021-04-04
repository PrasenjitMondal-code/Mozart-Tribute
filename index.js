document.querySelector(".dice-roll").addEventListener("click", diceRoll);

function diceRoll() {
  var randomSong = Math.floor(Math.random() * 6) + 1;
  var randomSongSelect = "images/die_face_" + randomSong + ".png";
  document.querySelector(".dice").setAttribute("src", randomSongSelect);

  if (randomSong === 1) {
    document
      .querySelector("a")
      .setAttribute("href", "https://youtu.be/HMjQygwPI1c");
  } else if (randomSong === 2) {
    document
      .querySelector("a")
      .setAttribute("href", "https://youtu.be/Zi8vJ_lMxQI");
  } else if (randomSong === 3) {
    document
      .querySelector("a")
      .setAttribute("href", "https://youtu.be/k1-TrAvp_xs");
  } else if (randomSong === 4) {
    document
      .querySelector("a")
      .setAttribute("href", "https://youtu.be/oy2zDJPIgwc");
  } else if (randomSong === 5) {
    document
      .querySelector("a")
      .setAttribute("href", "https://youtu.be/8OZCyp-LcGw");
  } else {
    document
      .querySelector("a")
      .setAttribute("href", "https://youtu.be/jyjVCbTo5F0");
  }
}

document.querySelector(".rock").addEventListener("click", function () {
  var audio = new Audio(
    "Steelheart - I ll Never Let You Go (Official Video).mp3"
  );
  audio.play();
});
