let x = 0;
let y = 0;
let theta = 0;
let inc = 0.05; // the amount to increment the offset each frame
let offset = 0; // the amount offset from beginning of wave
let amplitude;
let frequency;
let maxAngle;
function setup() {
    amplitude = windowHeight / 4;
    frequency = windowWidth / 4;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    noStroke();
    while (theta < maxAngle + offset) {
        // sine wave 3
        y = sin(theta - 0.4) * amplitude;
        fill(50, 0, 0);
        ellipse(x, y + height / 2, 16);
        // sine wave 2
        y = sin(theta - 0.2) * amplitude;
        fill(150, 0, 0);
        ellipse(x, y + height / 2, 16);
        // sine wave 1
        y = sin(theta) * amplitude;
        fill(255, 0, 0);
        ellipse(x, y + height / 2, 16);
        // cosine wave
        y = cos(theta) * amplitude;
        fill(0, 255, 0);
        ellipse(x, y + height / 2, 16);
        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
