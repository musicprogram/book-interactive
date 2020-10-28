import React, {Fragment, useEffect, useState, useRef} from 'react';
import {Card, Row, Image} from 'react-bootstrap'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import ButtonCatNextPrev from "./ButtonCatNextPrev";

import {
  speechText,
  currentStep,
  synthGlobal,
  linksSvg,
  categoryNavigation,
  currentStep1,
  currentStep3
} from '../../../GlobalState'

import {
  useRecoilState, useRecoilValue
} from 'recoil';


function Category(props) {


  const [changePage, setChangePage] = useState(true);

  const [imgTalk, setImgTalk] = useState('');
  const [imgTalkSecond, setImgTalkSecond] = useState('');

  const [talkOne, setTalkOne] = useState('');
  const [talkTwo, setTalkTwo] = useState('');

  const [isTalk, setIsTalk] = useState(false);

  const [synth, setSynth] = useRecoilState(synthGlobal);
  const [step, setStep] = useRecoilState(currentStep);
  const [step1, setStep1] = useRecoilState(currentStep1);
  const [step3, setStep3] = useRecoilState(currentStep3);

  const links = useRecoilValue(linksSvg);
  const category = useRecoilValue(categoryNavigation);


  useEffect(()=>{

    if(category === 1){
      setTalkOne(links[0].talkOne);
      setTalkTwo(links[0].talkTwo);

      setImgTalk(links[0].talkOne);
      setImgTalkSecond(links[0].talkOne);
    }else if(category === 2 || category === 3){
      setTalkOne(links[0].talkThree);
      setTalkTwo(links[0].talkFour);

      setImgTalk(links[0].talkThree);
      setImgTalkSecond(links[0].talkThree);
    }

    setTimeout(()=>{
      setChangePage(false)
    }, 1000)
    //console.log(props.category)
  },[]);

  const handleMessage =()=>{
    setImgTalk(talkTwo);
    //console.log(links[0].talkTwo)
    //console.log(speechSynthesis.getVoices())
    stopSynth();
    let selectedVoiceName = "Samantha";
    speechText(props.category.descriptionIn, selectedVoiceName, synth);
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
    setIsTalk(true);
    setImgTalkSecond(talkTwo);
    stopSynth();
    let selectedVoiceName = "Samantha";
    speechText(props.category.firstIn, selectedVoiceName, synth);

    setTimeout(()=>{
      setIsTalk(false);
      setImgTalkSecond(talkOne);
    }, 5000)
  }

  const handlePlaySecond =() =>{
    setIsTalk(true);
    setImgTalkSecond(talkTwo);
    stopSynth();
    let selectedVoiceName = "Samantha";
    speechText(props.category.secondIn, selectedVoiceName, synth);

    setTimeout(()=>{
      setIsTalk(false);
      setImgTalkSecond(talkOne);
    }, 5000)
  }


  const stepsGlobal = (stp) =>{
    if(category === 1){
      setStep(stp);
      localStorage.setItem("stepFormOne", `${stp}`);
    }else if(category === 2){
      setStep1(stp);
      localStorage.setItem("stepFormSecond", stp);
    }else if(category === 3){
      setStep3(stp);
      localStorage.setItem("stepFormThird", stp);
    }
    stopSynth();
  }

  return (
    <Fragment>
      <div className={`${changePage ? 'animate__animated animate__fadeIn  animate__duration-3s' : ''}`}>

        <h1 className="text-center text-capitalize mt-2">
          <span className={`font-weight-bold text-title-span-title mr-2 
            ${'color-' + category}
          `}>
            {props.category.titleEs}
          </span>
          <br/>
          <span className={`font-weight-light text-title-span-title mr-2 text-light mt-1
            ${'color-back-' + category}
          `}>
            {props.category.titleIn}
          </span>
        </h1>

        <div className="card-custom  mr-1 ml-1">

          <div className="container card-msg">

            <Card.Body>

              <ButtonCatNextPrev
                id={props.category.id}
                stepsGlobal={stepsGlobal}
                category={category}
                firstCategoriesLength={props.firstCategoriesLength}
                step={step}
                step1={step1}
                step3={step3}
              />

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
                    <img src={imgTalk} className="img-talk-l"/>
                </div>
                <div className="col-10">

                  <div className={`talk-bubble tri-right left-in wave hvr-grow 
                    ${'letter-hover-' + category}
                 `} onClick={handleMessage}>
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
                <Image className={ `img-banner-1 img-fluid ${category === 1 && 'img-banner-3'} ${category === 2 && 'img-banner-2'} `} src={links[category].photoDetail}/>

              </Row>
              <h2 className={`text-center mt-3
                ${'color-' + category}
              `}>
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
                        <Card.Header className={`text-classic h3 ${'color-' + category}`}>Primera</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            {props.category.firstEs}

                          </Card.Title>

                        </Card.Body>
                      </Card>

                    </div>
                    <div className="col-6">

                      <Card border="light" style={{ borderRadius: '20px' }}>
                        <Card.Header className={`text-classic h3 ${'color-' + category}`}>Segundo</Card.Header>
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
                        <Card.Text className={`mt-1 mr-1 ml-1 text-center ${'letter-hover-' + category}`}>
                          {props.category.firstIn} <span> <img src={links[0].click} className="click-animated"/></span>
                        </Card.Text>
                      </div>

                    </div>
                    <div className="col-2 d-flex justify-content-center">
                      <img src={imgTalkSecond} className={`img-talk-center ${!isTalk && 'img-turn'}` }/>
                    </div>

                    <div className="col-5">
                      <div className="bg-bubble hvr-bubble-left hvr-grow-shadow" onClick={handlePlaySecond}>
                        <Card.Text className={`mt-1 mr-1 ml-1 text-center ${'letter-hover-' + category}`}>
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

              <img src={links[1].photoBottom} className="scissors-bottom"/>


              <ButtonCatNextPrev
                id={props.category.id}
                stepsGlobal={stepsGlobal}
                category={category}
                firstCategoriesLength={props.firstCategoriesLength}
                step={step}
                step1={step1}
                step3={step3}
              />

            </Card.Body>
          </div>
        </div>

      </div>



    </Fragment>

  );
}

export default Category;
