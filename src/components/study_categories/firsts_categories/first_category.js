import React, {Fragment, useEffect, useState} from 'react';
import {Container, Card, Row} from 'react-bootstrap'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import {speechText, currentStep, synthGlobal} from '../../../GlobalState'
import {
  useRecoilState
} from 'recoil';

import img from '../../../assets/degradacion.jpg';

import logoPlay from '../../../assets/img/logo-play.png'

import sound from '../../../assets/img/sound.gif'

import talkOne from '../../../assets/img/firts_category/talkOne.svg'
import talkSecond from '../../../assets/img/firts_category/talkSecond.svg'

function FirstCategory(props) {

  const [imgTalk, setImgTalk] = useState(talkOne);
  const [imgPlayFirst, setImgPlayFirst] = useState(logoPlay);
  const [imgPlaySecond, setImgPlaySecond] = useState(logoPlay);
  const [voices, setVoices] = useState(null);
  const [synth, setSynth] = useRecoilState(synthGlobal);
  const [step, setStep] = useRecoilState(currentStep);

  useEffect(()=>{
    //console.log(props.category)
  })

  const handleMessage =()=>{
    //console.log(speechSynthesis.getVoices())
    stopSynth();
    let selectedVoiceName = "Samantha";
    speechText(props.category.descriptionIn, selectedVoiceName, synth);

    setImgTalk(talkSecond);
    setTimeout(()=>{
      setImgTalk(talkOne);
    },5000)
  }

  const stopSynth = () =>{
    if(synth.speaking){ /* stop narration */
      synth.cancel();
    }
  }

  const handlePlayFirst =() =>{
    setImgPlayFirst(sound)
    stopSynth();
    let selectedVoiceName = "Samantha";
    speechText(props.category.firstIn, selectedVoiceName, synth);

    setTimeout(()=>{
      setImgPlayFirst(logoPlay);
    }, 5000)
  }

  const handlePlaySecond =() =>{
    setImgPlaySecond(sound)
    stopSynth();
    const textValue = 'Asymmetry in the garment with strong visualization';
    let selectedVoiceName = "Samantha";
    speechText(textValue, selectedVoiceName, synth);

    setTimeout(()=>{
      setImgPlaySecond(logoPlay);
    }, 5000)
  }

  return (
    <Fragment>
      <Container>

        <h1 className="color-main text-center text-capitalize font-weight-bold">
          {props.category.titleEs} <span className="font-weight-light text-title-span">{props.category.titleIn}</span>
        </h1>


        <div className="card-custom card-msg mt-2 mr-1 ml-1">
          <Card.Body>
            <div className="d-flex justify-content-center">
              <Zoom>
                <img
                  alt="that wanaka tree"
                  src={props.category.img}
                  className="img-category"
                />
              </Zoom>
            </div>
            <Row>
              <div className="col-2">
                <div className="div-button ">
                  <object
                    className="svg-talk"
                    type="image/svg+xml"
                    data={imgTalk}>
                  </object>
                </div>
              </div>
              <div className="col-10">

                <div className="talk-bubble tri-right left-in" onClick={handleMessage}>
                  <div className="talktext text-center">
                    <p className="lead">

                      {props.category.descriptionEs}

                    </p>
                    <br/>
                    <p className="lead">
                      {props.category.descriptionIn}
                    </p>
                  </div>
                </div>


              </div>
            </Row>
            <h2 className="color-main text-center">
              <span className="font-weight-bold text-classic ">
               -- CLASIFICACIÓN --
              </span>
            </h2>
            <hr/>
            <Row>

              <div className="col-md-6 mb-2">

                <Card border="light" style={{ borderRadius: '20px' }}>
                  <Card.Header className="text-classic h3">Primera</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      {props.category.firstEs}

                    </Card.Title>
                    <Card.Text className="color-main font-weight-bold">
                      {props.category.firstIn}
                    </Card.Text>
                    <img src={imgPlayFirst} className="play-button" onClick={handlePlayFirst}/>
                  </Card.Body>
                </Card>

              </div>
              <div className="col-md-6">

                <Card border="light" style={{ borderRadius: '20px' }}>
                  <Card.Header className="text-classic h3">Segunda</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Asimetría en la prenda con
                      visualización fuerte.

                    </Card.Title>
                    <Card.Text className="color-main font-weight-bold">
                      Asymmetry in the garment with
                      strong visualization
                    </Card.Text>
                    <img src={imgPlaySecond} className="play-button" onClick={handlePlaySecond}/>
                  </Card.Body>
                </Card>

              </div>

            </Row>

            <Row>
              <div className="col-md-12">


                <p className="ml-2 mt-3 text-classic ">
                  NO CLASIFICA/
                  NOT CLASSIFIED
                </p>



              </div>
            </Row>

            <div className="d-flex justify-content-center">
              <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                  <button type="button" className="btn btn-secondary" onClick={()=>{
                    props.firstStep()
                    setStep( 1)
                    localStorage.setItem("stepFormOne", `${1}`);
                    stopSynth();
                  }}> {'<<'} </button>
                  <button type="button" className="btn btn-secondary" onClick={()=>{
                    props.previousStep()
                    setStep(props.currentStep - 1);
                    localStorage.setItem("stepFormOne", `${props.currentStep - 1}`);
                    stopSynth();
                  }}> {'<'}</button>
                  <button type="button" className="btn btn-secondary" onClick={()=>{
                    props.nextStep()
                    setStep(props.currentStep + 1)
                    localStorage.setItem("stepFormOne", `${props.currentStep + 1}`);
                    stopSynth();
                  }}> {'>'}</button>
                  <button type="button" className="btn btn-secondary" onClick={()=>{
                    props.lastStep();
                    setStep(parseInt(props.totalSteps));
                    //console.log(parseInt(props.totalSteps))
                    localStorage.setItem("stepFormOne", `${props.totalSteps}`);
                    stopSynth();
                  }}>{'>>'}</button>
                </div>
              </div>
            </div>
          </Card.Body>
        </div>

      </Container>

    </Fragment>

  );
}

export default FirstCategory;
