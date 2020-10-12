import React, {Fragment, useEffect, useState} from 'react';
import {Container, Card, Row, Image} from 'react-bootstrap'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import {speechText, currentStep, synthGlobal, linksSvg} from '../../../GlobalState'
import {
  useRecoilState, useRecoilValue
} from 'recoil';


import talkOne from '../../../assets/img/firts_category/talkOne.svg'
import talkSecond from '../../../assets/img/firts_category/talkSecond.svg'

function Category(props) {

  const [imgTalk, setImgTalk] = useState(talkOne);
  const [imgPlayFirst, setImgPlayFirst] = useState(false);
  const [animatedSound, setAnimatedSound] = useState(false);
  const [synth, setSynth] = useRecoilState(synthGlobal);
  const [step, setStep] = useRecoilState(currentStep);
  const links = useRecoilValue(linksSvg);


  useEffect(()=>{
    //console.log(props.category)
  })

  const handleMessage =()=>{

    //console.log(speechSynthesis.getVoices())
    stopSynth();
    let selectedVoiceName = "Samantha";
    speechText(props.category.descriptionIn, selectedVoiceName, synth);
    setAnimatedSound(true);
    setImgTalk(talkSecond);
    setTimeout(()=>{
      setImgTalk(talkOne);
      setAnimatedSound(false);
    },5000)
  }

  const stopSynth = () =>{
    if(synth.speaking){ /* stop narration */
      synth.cancel();
    }
  }

  const handlePlayFirst =() =>{
    setImgPlayFirst(true)
    stopSynth();
    let selectedVoiceName = "Samantha";
    speechText(props.category.firstIn, selectedVoiceName, synth);

    setTimeout(()=>{
      setImgPlayFirst(false);
    }, 5000)
  }

  const handlePlaySecond =() =>{
    setImgPlayFirst(true)
    stopSynth();
    let selectedVoiceName = "Samantha";
    speechText(props.category.secondIn, selectedVoiceName, synth);

    setTimeout(()=>{
      setImgPlayFirst(false);
    }, 5000)
  }

  return (
    <Fragment>
      <>


        <h1 className="color-main text-center text-capitalize mt-2">
          <span className="font-weight-bold text-title-span-title mr-2 ">{props.category.titleEs} </span>
          <span className="font-weight-light text-title-span">{props.category.titleIn}</span>
        </h1>

        <div className="card-custom card-msg mr-1 ml-1">

          <div className="container">

            <Card.Body>
              <div className="d-flex justify-content-center">
                <Zoom>
                  <img
                    alt="that wanaka tree"
                    src={props.category.img}
                    className="img-category rounded"
                  />
                </Zoom>
              </div>

              <Row className="rounded">
                <div className="col-2">
                  <div className="div-button ">
                    <object
                      className="svg-talk"
                      type="image/svg+xml"
                      data={imgTalk}>
                    </object>
                  </div>
                  {
                    animatedSound && <span> <img src={links[0].sound} className="play-button-h" /></span>
                  }

                </div>
                <div className="col-10">

                  <div className="talk-bubble tri-right left-in wave hvr-grow letter-hover" onClick={handleMessage}>
                    <div className="talktext text-center">
                      <p className="lead">

                        {props.category.descriptionEs}

                      </p>
                      <br/>
                      <p className="lead">
                        <span>{props.category.descriptionIn}</span>
                      </p>
                    </div>
                    <img src={links[0].click} className="click-animated"/>
                  </div>

                </div>

              </Row>
              <Image className="img-banner-1 img-fluid" src={links[1].photoDetail}/>
              <h2 className="color-main text-center mt-3">
              <span className="font-weight-bold text-classic ">
               -- CLASIFICACIÓN --
              </span>
              </h2>
              <hr/>

              <Row>

                <div className="mt-4">

                  <Row>
                    <div className="col-6">

                      <Card border="light" style={{ borderRadius: '20px' }}>
                        <Card.Header className="text-classic h3">Primera</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            {props.category.firstEs}

                          </Card.Title>

                        </Card.Body>
                      </Card>

                    </div>
                    <div className="col-6">

                      <Card border="light" style={{ borderRadius: '20px' }}>
                        <Card.Header className="text-classic h3">Segundo</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            {props.category.secondEs}

                          </Card.Title>

                        </Card.Body>
                      </Card>

                    </div>
                  </Row>

                  <Row className="mt-3 mr-2 ml-2 mb-3">
                    <div className="col-5">
                      <div className="bg-bubble hvr-bubble-right hvr-grow-shadow" onClick={handlePlayFirst}>
                        <Card.Text className="letter-hover mt-1 mr-1 ml-1 text-center">
                          {props.category.firstIn} <span> <img src={links[0].click} className="click-animated"/></span>
                        </Card.Text>
                      </div>

                    </div>
                    <div className="col-2">
                      <object
                        className="face-talk"
                        type="image/svg+xml"
                        data={talkSecond}>
                      </object>
                      <span className={`${imgPlayFirst ? '' : 'show-no'}`}> <img src={links[0].sound} className="play-button mt-1" /></span>

                    </div>

                    <div className="col-5">
                      <div className="bg-bubble hvr-bubble-left hvr-grow-shadow" onClick={handlePlaySecond}>
                        <Card.Text className="letter-hover mt-1 mr-1 ml-1 text-center">
                          {props.category.secondIn} <span> <img src={links[0].click} className="click-animated"/></span>
                        </Card.Text>
                      </div>

                    </div>


                  </Row>

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
                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled={props.currentStep === 1}
                      onClick={()=>{
                        props.firstStep()
                        setStep( 1)
                        localStorage.setItem("stepFormOne", `${1}`);
                        stopSynth();
                      }}> {'<<'} </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled={props.currentStep === 1}
                      onClick={()=>{
                        props.previousStep()
                        setStep(props.currentStep - 1);
                        localStorage.setItem("stepFormOne", `${props.currentStep - 1}`);
                        stopSynth();
                      }}> {'<'}</button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled={props.currentStep === props.totalSteps}
                      onClick={()=>{
                        props.nextStep()
                        setStep(props.currentStep + 1)
                        localStorage.setItem("stepFormOne", `${props.currentStep + 1}`);
                        stopSynth();
                      }}> {'>'}</button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled={props.currentStep === props.totalSteps}
                      onClick={()=>{
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
        </div>

      </>



    </Fragment>

  );
}

export default Category;
