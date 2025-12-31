let musicPlaying = false;
const music = new Audio("music.mp3");
music.loop = true;

function toggleMusic() {
    if (!musicPlaying) {
        music.play();
        musicPlaying = true;
    } else {
        music.pause();
        musicPlaying = false;
    }
}
