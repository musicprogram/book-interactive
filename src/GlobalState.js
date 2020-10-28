import React from 'react'

import {
  atom
} from 'recoil';
import Links from "./data/data_links";


import dataLinks from './data/data_links'

import {completeInformationData} from './data/CompleteInformationData';

const arrImgBack = [
  Links[0].background,
  Links[0].modal,
  Links[1].background,
  Links[2].background,
  Links[3].background,
  Links[4].background,
  Links[5].background,
  completeInformationData[0].imgCss,
  completeInformationData[1].imgCss,
  completeInformationData[2].imgCss
]

export const randomImg = () =>{
  const numAleatory = Math.floor(Math.random() * (10 - 0)) + 0;
  return arrImgBack[numAleatory];
}

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

export const currentStep1 = atom({
  key: 'currentStep1', // unique ID
  default: parseInt(localStorage.getItem("stepFormSecond")) ? parseInt(localStorage.getItem("stepFormSecond")) : 1, // default value
});

export const currentStep3 = atom({
  key: 'currentStep3', // unique ID
  default: parseInt(localStorage.getItem("stepFormThird")) ? parseInt(localStorage.getItem("stepFormThird")) : 1, // default value
});

export const synthGlobal = atom({
  key: 'synthGlobal', // unique ID
  default: window.speechSynthesis, // default value
});

export const firstCategory = atom({
  key: 'firstCategory', // unique ID
  default: [], // default value
});

export const secondCategory = atom({
  key: 'secondCategory', // unique ID
  default: [], // default value
});

export const thirdCategory = atom({
  key: 'thirdCategory', // unique ID
  default: [], // default value
});

export const linksSvg = atom({
  key: 'linksSvg', // unique ID
  default: dataLinks, // default value
});

export const color = atom({
  key: 'color', // unique ID
  default: '#ffffff', // default value
});


const resultArr = localStorage.getItem('result');
export const resultTest = atom({
  key: 'resultTest', // unique ID
  default: resultArr ? JSON.parse(resultArr) : [], // default value
});


