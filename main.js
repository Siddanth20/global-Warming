var SpeechRecognition= window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();

function play(){
        speak();
}

function speak(){
    var synth= window.speechSynthesis;

    speakdata="What is the impact of global warming on seasons? Requesting Saurav Beswal to answer this. "
   
    var utterThis= new SpeechSynthesisUtterance(speakdata);

    synth.speak(utterThis);

}

function play1(){
    speak1();
}

function speak1(){
var synth= window.speechSynthesis;

speakdata="Name any three fuels which emit less carbon-dioxide? Requesting Ananya SJ to answer this. "

var utterThis= new SpeechSynthesisUtterance(speakdata);

synth.speak(utterThis);

}

function play2(){
    speak2();
}

function speak2(){
var synth= window.speechSynthesis;

speakdata="What is global warming? Requesting Chirag Hegda to answer this. "

var utterThis= new SpeechSynthesisUtterance(speakdata);

synth.speak(utterThis);

}

function play3(){
    speak3();
}

function speak3(){
var synth= window.speechSynthesis;

speakdata="What is the use of putting taxes on the idustries which emit carbon-dioxide? Requesting Divya G to answer this. "

var utterThis= new SpeechSynthesisUtterance(speakdata);

synth.speak(utterThis);

}