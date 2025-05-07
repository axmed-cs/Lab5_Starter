// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const speechSynth = window.speechSynthesis;
  let allVoices;
  // populate the select element with all voices 
  const selectElement = document.getElementById('voice-select');
  speechSynth.addEventListener('voiceschanged', () => {
    const voices = speechSynth.getVoices();
    allVoices = voices;
    console.log(voices[0]);
    populateSelect(voices, selectElement);

  });

  // change audio correponding to voice
  const myButton = document.querySelector('button');
  myButton.addEventListener('click', () => {
     speak(selectElement, speechSynth, allVoices);
  });
                        
  
}

function populateSelect(voices, selectElement) {
  //const selectElement = document.getElementById('voice-select');
  // console.log(voices[0].name);
  for (let i = 0; i < voices.length; i++){
    selectElement.innerHTML += `
      <option value="${voices[i].name}">${voices[i].name}</option>
    `;
  }
}

function speak(selectElement, speechSynth, allVoices) {
  const text = document.getElementById('text-to-speak');
  let voice = selectElement.value;
  let selectVoice = allVoices.find(match => match.name === voice)
  // console.log(selectVoice);
  let utterance;
  if (text.value) {
    // console.log(text.value);
    utterance = new SpeechSynthesisUtterance(text.value);
  }
  if (voice != 'select') {
    utterance.voice = selectVoice;
  }
  if (text.value){
    speechSynth.speak(utterance);
    //change picture
    const image = document.querySelector('img');
    while (speeckSynth.speaking) {}
  }
}