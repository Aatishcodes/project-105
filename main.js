
Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90
});

camera = document.getElementById("camera")
Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });

}

console.log("ML5 version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2OPDCgxAH/model.json", modelLoaded)
function modelLoaded() {
    console.log("modelLoaded")
}

function check() {
    img = document.getElementById("capture_image");
    classifier.classify(img, gotresult)
}

function gotresult(error, result) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(result)
        document.getElementById("result_object_name").innerHTML = result[0].label
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(2) * 100 + " %"
    }


}

