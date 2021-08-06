const SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition;


    
Webcam.attach(camera);

function start()
{
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function run (event)
{
    console.log(event);

    var content = event.results [0] [0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;


    if (content == "take my selfie")
    {
        console.log("Taking Selfie");
        Speak();
    }
}

function Speak()
{
    var Synth = window.speechSynthesis;
    speak_data = "You Said: " + document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    utterThis.rate = 1;
    Synth.speak(utterThis);


    setTimeout(function()
    {
        Take_snapshot();
    },5000)
}


camera = document.getElementById("camera");


Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

function Take_snapshot()
{
    Webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri +  '">';
    });

    console.log("selfie Taken")
}

function Speak_machine()
{
    var Synth = window.speechSynthesis;
    speak_data = "Taking Selfie in 5 Seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    utterThis.rate = 1;
    Synth.speak(utterThis);

}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click;
}


