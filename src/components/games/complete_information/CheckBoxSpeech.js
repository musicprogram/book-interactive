
import React from 'react';


function CheckBoxSpeech(props) {

  return (
    <div className="d-flex justify-content-center">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          checked={props.workingSpeech}
          onClick={()=> {
           props.setWorkingSpeech(!props.workingSpeech);
           if(!props.workingSpeech){
             props.setInputText({
               text : '',
               infoId : '',
               word: ''
             })
           }
          }}
        />
        <label className="form-check-label labelRead" htmlFor="exampleRadios1">
          {
            props.workingSpeech? 'Cambiar a escribir' : 'Cambiar para hablar'
          }
        </label>
      </div>
    </div>
  );
}

export default CheckBoxSpeech;
