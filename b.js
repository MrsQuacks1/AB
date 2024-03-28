Webcam.set({
    width:350, height:350, image_format:"png", png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
    function e(){
        Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; });

    }

    console.log ("ml5");
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LEiB7OsVh/model.json", hola);
    function hola(){
console.log ("gato");
    }
    function m(){
        A=document.getElementById ("selfie_image");
        classifier.classify(A, B);
    }
    function B(){
        
    }