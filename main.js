function setup() {

    Canvas = createCanvas(300, 300);
    Canvas.center();
    background("black");
    Canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;

}

function draw() {
    strokeWeight(12);
    stroke("white");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

}



function preload() {
    classifier = ml5.imageClassifier("DoodleNet");

}

function classifyCanvas() {

    classifier.classify(Canvas, gotResult)



}


function clearCanvas() {

    background("black");

}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)

        document.getElementById('Mr_L').innerHTML = 'Label: ' + results[0].label;
        document.getElementById('Mr_C').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
        utterThis = new SpeechSynthesisUtterance(results[0].label); //convert t to s 
        synth.speak(utterThis); //speak



    }

}