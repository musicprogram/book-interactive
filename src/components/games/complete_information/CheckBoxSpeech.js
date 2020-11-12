
import React, {useEffect} from 'react';


function CheckBoxSpeech(props) {

  useEffect(()=>{

  },[])

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
            props.workingSpeech && !props.english && 'Cambiar a escribir'
          }
          {
            !props.workingSpeech && !props.english && 'Cambiar para hablar'
          }
          {
            props.workingSpeech && props.english && 'Change to write'
          }
          {
            !props.workingSpeech && props.english && 'Change to talk'
          }
        </label>
      </div>
    </div>
  );
}

export default CheckBoxSpeech;
