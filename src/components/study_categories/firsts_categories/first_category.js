import React, {Fragment, useEffect, useState} from 'react';
import {Container, Card, Col, Row} from 'react-bootstrap'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import {speechText} from '../../../GlobalState'

import img from '../../../assets/degradacion.jpg';

import logoPlay from '../../../assets/img/logo-play.png'

import sound from '../../../assets/img/sound.gif'

import talkOne from '../../../assets/img/firts_category/talkOne.svg'
import talkSecond from '../../../assets/img/firts_category/talkSecond.svg'

function FirstCategory() {

  const [imgTalk, setImgTalk] = useState(talkOne);
  const [imgPlayFirst, setImgPlayFirst] = useState(logoPlay);
  const [imgPlaySecond, setImgPlaySecond] = useState(logoPlay);
  const [voices, setVoices] = useState(null);
  const [synth, setSynth] = useState(window.speechSynthesis);

  useEffect(()=>{
  },[])

  const handleMessage =()=>{
    //console.log(speechSynthesis.getVoices())
    stopSynth();
    const textValue = 'Degradation in the white textiles getting a creamy tone';
    let selectedVoiceName = "Samantha";
    speechText(textValue, selectedVoiceName, synth);

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
    const textValue = 'symmetry in the garment with slight or medium visualization. Asymmetry with slight';
    let selectedVoiceName = "Samantha";
    speechText(textValue, selectedVoiceName, synth);

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

        <p className="text-title-category text-center font-weight-bold">
          AMARILLAMIENTO <span className="color-main text-title-span">YELLOWING</span>
        </p>


        <div className="card-custom card-msg mt-2 mr-1 ml-1">
          <Card.Body>
            <div className="d-flex justify-content-center">
              <Zoom>
                <img
                  alt="that wanaka tree"
                  src={img}
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

                      Degradación que se presenta en los géneros textiles del color blanco hacia el tono cremoso.

                    </p>
                    <br/>
                    <p className="lead">
                      Degradation in the white textiles getting a creamy tone.
                    </p>
                  </div>
                </div>


              </div>
            </Row>
            <h1 className="text-center font-weight-bold text-title-classic text-shadow">CLASIFICACIÓN</h1>
            <hr/>
            <Row>

              <div className="col-md-6 mb-2">

                <Card border="light" style={{ borderRadius: '20px' }}>
                  <Card.Header className="text-classic h3">Primera</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Simetría en la prenda con
                      visualización leve o
                      media.

                      Asimetría en la prenda
                      con visualización leve.

                    </Card.Title>
                    <Card.Text className="color-main font-weight-bold">
                      symmetry in the garment with
                      slight or medium visualization.
                      Asymmetry with slight
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


          </Card.Body>
        </div>

      </Container>
    </Fragment>

  );
}

export default FirstCategory;
