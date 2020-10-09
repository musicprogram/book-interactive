import React from 'react'
import {
  atom
} from 'recoil';

export const speechText = (textValue, selectedVoiceName, voices, synth) =>{
  /// var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
  let toSpeak = new SpeechSynthesisUtterance(textValue);
  //     var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
  voices.forEach((voice)=>{
    if(voice.name === selectedVoiceName){
      toSpeak.voice = voice;
    }
  });
  synth.speak(toSpeak);
}

export const categoryNavigation = atom({
  key: 'categoryNavigation', // unique ID
  default: 0, // default value
});