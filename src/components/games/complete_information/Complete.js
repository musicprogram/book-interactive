import React from 'react';
import Zoom from "react-medium-image-zoom";

function Complete(props) {

  const handleChangeText = (e) =>{
     const dataChange = {
       text : e.target.value,
       infoId : props.info.id,
       word: props.info.word
     };
     props.setInputText(dataChange);
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
          props.info.solve && (
            <h2 className="color-2">
              {props.info.word}
            </h2>
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
