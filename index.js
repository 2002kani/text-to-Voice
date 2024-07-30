const button = document.querySelector(".button");
const selection = document.querySelector(".selection");

let speech = new SpeechSynthesisUtterance();  // speech request erstellt
let voices = [];

button.addEventListener("click", function(){  // Bei jedem button klick, text in textarea wird ausgegeben
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged = () => {  // Alle Voices in dem select tab gepackt und auswählbar gemacht
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (selection.options[i] = new Option(voice.name, i)));
}

selection.addEventListener("change", function(){  // Bei jedem auswahlwechsel, erscheint die ausgewählte stimme
    speech.voice = voices[selection.value];
});