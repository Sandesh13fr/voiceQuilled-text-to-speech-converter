let voices =[];
let speech = new SpeechSynthesisUtterance();
const textarea = document.getElementById("text") 
const button = document.getElementById("convert")
let voiceSelection = document.getElementById("select")

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice= voices[0];
    voiceSelection.innerHTML = "";
    voices.forEach((voice,i)=>{
        voiceSelection.add(new Option(voice.name,i))
    })
}

voiceSelection.addEventListener("change",()=>{
    speech.voice=voices[voiceSelection.value]
})

button.addEventListener("click",()=>{
    speech.text=textarea.value;
    window.speechSynthesis.speak(speech);
})