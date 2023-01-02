Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality: 100
    
});
var camera = document.getElementById("camera");
Webcam.attach(camera);

function takeimg() {
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img src="+data_uri+" id = 'selfietake'>";
});
}
console.log("ML5 version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pJ4iKXUsR/model.json", ModelLoaded);

function ModelLoaded() {
    console.log("Model Loaded!");
}
function check(){
    img = document.getElementById("selfietake");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("nameofhuman").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}