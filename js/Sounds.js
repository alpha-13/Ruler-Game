function Sound() {
    this.sound = function (sound_name) {
        var audio = new Audio();
        audio.src = "Sounds/" + sound_name + ".mp3";
        audio.play();
    }
}