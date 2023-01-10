function setup() {
    createCanvas(windowWidth, windowHeight);
    let x = 0;
    let y = 0;
    let theta = 0;
    let amplitude = windowHeight/8;
    let frequency = windowWidth/8;
    let maxAngle = (windowWidth/frequency) * TWO_PI;
    while(theta < maxAngle){
        y = sin(theta) * amplitude;
        ellipse(x, y + height/2, 16);
        theta += 0.2;
        x = (theta/maxAngle) * windowWidth;
    }
}
function draw() {
}
