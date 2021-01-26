import React from 'react';
import Zoom from "react-medium-image-zoom";

function Complete(props) {

  const handleChangeText = (e) =>{
    const data = e.target.value;
    if(data){
      const dataN = data.toLowerCase()
      const dataChange = {
        text : dataN,
        infoId : props.info.id,
        word: props.info.word,
        body: props.info.imgCss
      };
      props.setInputText(dataChange);
    }
  }

  return (
    <div className="card mb-3 mt-4 ml-4 mr-4" data-depth="0.9">
      <Zoom>
        <img src={props.info.img} className="card-img-top" alt="..."/>
      </Zoom>
      <div className="card-body">

        <img
          src={props.info.imgTalk}
          alt=""
          className="gif-complete mx-auto d-block pointer"
          onClick={()=>{
            props.setBody(props.info.imgCss);
            if(props.workingSpeech){
              if(!props.info.solve){
                let data = {
                  word: props.info.word,
                  id: props.info.id
                }
                props.setWordState(data);
                props.speechRecognition();
              }
            }
          }}
        />

        {
          !props.workingSpeech && !props.info.solve && (
            <div className="form-group mt-2 mb-2">
              <input
                type="text"
                className="form-control"
                onChange={handleChangeText}
                placeholder={props.english ? "Write word" : "Escribe la palabra"}
              />
            </div>
          )
        }

        {
          props.info.solve ? (
            <div>
              {
                props.info.id === 1 ? (
                  <h2 className="color-2">
                   <span className="text-capitalize">
                     {props.info.wordDesc}
                   </span> {props.info.word}
                  </h2>
                ):(
                  <h2 className="color-2">
                    <span className="text-capitalize">
                     {props.info.word}
                   </span> {props.info.wordDesc}
                  </h2>
                )
              }
            </div>
          ) :(
            <div>
              {
                props.info.id === 1 || props.info.wordDesc === 'non-conforming' || props.info.wordDesc === 'adhesive' ? (
                  <h2 className="color-2">
                    <span className="text-capitalize">
                     {props.info.wordDesc}
                   </span> {'________'}
                  </h2>
                ):(
                  <h2 className="color-2">
                    {'________'} {props.info.wordDesc}
                  </h2>
                )
              }
            </div>
          )
        }
        <p className={`card-text ${props.info.solve === false ? 'color-2 font-weight-bold': ''}` }>
          {props.info.description}
        </p>

      </div>
    </div>
  );
}

export default Complete;
