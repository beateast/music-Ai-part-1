song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("faded.mp3");
    song2 = loadSound("on_my_way.mp3");
}
function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 700, 500);
}