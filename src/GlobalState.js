import React from 'react'

import dataLinks from './data/data_links'

import {
  atom
} from 'recoil';

export const speechText = (textValue, selectedVoiceName, synth) =>{
  /// var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
  let toSpeak = new SpeechSynthesisUtterance(textValue);
  //     var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
  let voiCesChange = speechSynthesis.getVoices();
  //console.log(voiCesChange)
  voiCesChange.forEach((voice)=>{
    if(voice.lang === 'en-US'){
      toSpeak.voice = voice;
    }
  });

  synth.speak(toSpeak);
}

export const categoryNavigation = atom({
  key: 'categoryNavigation', // unique ID
  default: 0, // default value
});

export const currentStep = atom({
  key: 'currentStep', // unique ID
  default: parseInt(localStorage.getItem("stepFormOne")) ? parseInt(localStorage.getItem("stepFormOne")) : 1, // default value
});

export const synthGlobal = atom({
  key: 'synthGlobal', // unique ID
  default: window.speechSynthesis, // default value
});

export const firstCategory = atom({
  key: 'firstCategory', // unique ID
  default: [], // default value
});

export const linksSvg = atom({
  key: 'linksSvg', // unique ID
  default: dataLinks, // default value
});

